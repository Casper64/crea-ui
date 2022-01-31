import React, { useRef, useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import cn from 'classnames'

const ITEMS_COLLAPSE_ROW_HEIGHT = 30;

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    brand?: React.ReactNode;
    "justify-items"?: 'left' | 'center' | 'right'
    color?: string;
    transparent?: boolean;
    shadow?: boolean;
    "prevent-collapse"?: boolean;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { children, color, transparent, shadow, "prevent-collapse": preventCollapse, brand, "justify-items": justifyItems, ...rest } = props;
    let justify = justifyItems  || 'right';

    const navItems = useRef(null) as React.MutableRefObject<HTMLDivElement | null>;
    const [mobile, setMobile] = useState(false)
    const [collapsed, setCollapsed] = useState(true)

    const onResize = () => {
        if (preventCollapse === true) return
        if (navItems.current === null) return
        if (navItems.current.scrollWidth <= navItems.current.clientWidth) {
            setMobile(false)
            return
        }
        // Navbar items width is bigger than the available width
        setMobile(true)
        setCollapsed(true);
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [preventCollapse])

    useEffect(() => {
        onResize();
    }, [navItems])

    useEffect(() => {
        if (!preventCollapse) onResize();
        else setMobile(false)
    }, [preventCollapse])

    useEffect(() => {
        if (navItems.current === null) return
        if (mobile === false) {
            navItems.current.style.height = 'unset';
            return
        }
        if (collapsed === false) {
            const height = navItems.current.childElementCount * ITEMS_COLLAPSE_ROW_HEIGHT
            navItems.current.style.height = height+'px'
        }
        else {
            navItems.current.style.height = '0px'
        }
    }, [collapsed, mobile])

    return (
        <nav
            // className={`navbar ${classNames()}`} 
            className={
                cn(styles.navbar, {[styles.transparent]: transparent}, 
                    {[styles['with-background']]: Boolean(color)}, {[styles.shadow]: shadow},
                    {[styles.mobile]: mobile}, {[styles.open]: !collapsed}
                )
            }
            style={{
                background: color
            }}
            {...rest}
        > 
            { brand && <NavItem brand>{brand}</NavItem> }
            { mobile && 
                <div className={cn(styles.plate, styles.plate4)} onClick={() => setCollapsed(!collapsed)}>
                    <svg className={styles.burger} version="1.1" height="60" width="60" viewBox="0 0 100 100">
                        <path className={cn(styles.line, styles.line1)} d="M 50,35 H 30" />
                        <path className={cn(styles.line, styles.line2)} d="M 50,35 H 70" />
                        <path className={cn(styles.line, styles.line3)} d="M 50,50 H 30" />
                        <path className={cn(styles.line, styles.line4)} d="M 50,50 H 70" />
                        <path className={cn(styles.line, styles.line5)} d="M 50,65 H 30" />
                        <path className={cn(styles.line, styles.line6)} d="M 50,65 H 70" />
                    </svg>
                    <svg className={styles.x} version="1.1" height="60" width="60" viewBox="0 0 100 100">
                        <path className={styles.line} d="M 34,32 L 66,68" />
                        <path className={styles.line} d="M 66,32 L 34,68" />
                    </svg>
              </div>
            }
            <div className={cn(styles['nav-items'])} ref={navItems}>
                { !mobile && (justify === 'center' || justify === 'right') && <NavItem spacer/>}
                { children }
                { !mobile && (justify === 'center' || justify === 'left') && <NavItem spacer/>}
            </div>
        </nav>
    )
}

export interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
    spacer?: boolean;
    brand?: boolean;
}

export const NavItem: React.FC<NavItemProps> = (props) => {
    const { children, spacer, brand, ...rest } = props;

    return (
        <div className={cn(styles["nav-item"], {[styles.spacer]: spacer}, {[styles.brand]: brand})} {...rest}>
            { children }
        </div>
    )
}