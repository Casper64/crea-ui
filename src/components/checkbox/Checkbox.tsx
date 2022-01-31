import React, { useRef } from 'react'
import styles from './Checkbox.module.scss'
import cn from 'classnames'
import { useColors, CustomColor } from '../../hooks/useColors'

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    value?: boolean;
    "label-position"?: "left" | "right";
    color?: CustomColor;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { children, className, style, value, "label-position": lp, color, ...rest } = props;
    let labelPosition = lp || 'left';

    const root = useRef(null) as React.MutableRefObject<null | HTMLInputElement>
    const { colorClasses } = useColors({ ref: root, styles, color: color })
    const id = '_' + Math.random().toString(36).substr(2, 9);

    return (
        <div className={cn(styles["checkbox-container"], className)} style={style}>
            { labelPosition === 'left' && <label htmlFor={id}>{children}</label> }
            <input className={cn(colorClasses)} id={id} type="checkbox" checked={value} {...rest} ref={root}/>
            { labelPosition === 'right' && <label htmlFor={id}>{children}</label> }
        </div>
    )
}