import React, { useEffect, useRef, useState } from 'react'
import styles from './Tooltip.module.scss'
import cn from 'classnames'
import { useColors, CustomColor } from '../../hooks/useColors'

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    tooltip?: string;
    position?: "left" | "right" | "top" | "bottom";
    color?: CustomColor;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
    const { children, className, tooltip, position: p, color: c, ...rest } = props
    let position = p || 'top'
    let color = c || '#2C3E50';

    const content = useRef(null) as React.MutableRefObject<null | HTMLDivElement>
    const tt = useRef(null) as React.MutableRefObject<null | HTMLDivElement>
    let [style, setStyle] = useState({});

    const { colorClasses } = useColors({ ref: tt, styles, color })

    const getStyle = () => {
        if (position === 'top' || position === 'bottom') {
            let cw = content.current?.clientWidth || 0;
            let tw = tt.current?.clientWidth || 0;
            let left = ((cw - tw) / 2) + "px";
            setStyle({left})
        }
        else if (position === 'left' || position === 'right') {
            let ch = content.current?.clientHeight || 0;
            let th = tt.current?.clientHeight || 0;
            let top = ((ch - th) / 2) + "px";
            setStyle({top})
        }
    }
    
    useEffect(() => {
        getStyle()
    }, [content, tt, position])

    return (
        <div className={cn(styles.container, className)} {...rest}>
            <div className={styles.content} ref={content}>
                { children }
            </div>
            <div className={cn(styles.tooltip, styles[position], colorClasses)} ref={tt} style={style}>{ tooltip }</div>
        </div>
    )
}