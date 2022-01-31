import React, { lazy, useEffect, useRef, useState } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import { useColors, CustomColor } from '../../hooks/useColors'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    shadow?: boolean;
    icon?: React.ReactNode;
    "icon-position"?: 'left' | 'right';
    color?: CustomColor;
}
export const Button: React.FC<ButtonProps> = (props) => {
    const {children, shadow, icon: Icon, "icon-position": ip, color, ...rest} = props;
    let iconPosition = ip || 'right';
    
    const root = useRef(null) as React.MutableRefObject<null | HTMLButtonElement>
    const { colorClasses } = useColors({ color: color || 'primary', ref: root, styles })

    return (
        <button className={
            cn(
                styles.btn, {[styles.shadow]: shadow},
                colorClasses
            )
        } {...rest} ref={root}>
            <div className={cn(styles["button-content"], {[styles['with-icon']]: Boolean(Icon)})}>
                { iconPosition === 'left' && Boolean(Icon) && <div className={styles.icon}>{ Icon }</div> }
                { children }
                { iconPosition === 'right' && Boolean(Icon) && <div className={styles.icon}>{ Icon }</div> }
            </div>
        </button>
    )
}