import React, { useRef } from 'react'
import cn from 'classnames'
import styles from './Switch.module.scss'
import { useColors, CustomColor } from '../../hooks/useColors'

interface SwitchProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
    on: React.ReactNode;
    off: React.ReactNode;
    color?: CustomColor;
    value?:  boolean;
}

export const Switch: React.FC<SwitchProps> = (props) => {
    const { children, on, off, color, value, className, ...rest } = props
    
    const bg = useRef(null) as React.MutableRefObject<null | HTMLDivElement>
    const { colorClasses } = useColors({ color, ref: bg, styles })

    return (
        <div className={cn(styles.switch, className)} >
            <input type="checkbox" checked={value} {...rest}/>
            <div className={styles.circle}></div>
            <div className={cn(styles.text, styles.on)}>{ on }</div>
            <div className={cn(styles.text, styles.off)}>{ off }</div>
            <div className={cn(styles.background, colorClasses)} ref={bg}></div>
        </div>
    )
}