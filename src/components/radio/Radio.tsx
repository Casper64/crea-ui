import React, { useRef } from 'react'
import { useColors, CustomColor } from '../../hooks/useColors'
import styles from './Radio.module.scss'
import cn from 'classnames'

interface RadioProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
    "label-position"?: "left" | "right";
    color?: CustomColor;
    name?: string;
    value?: any;
}

export const Radio: React.FC<RadioProps> = (props) => {
    const { children, className, onLostPointerCapture, "label-position": lp, color, ...rest} = props;
    const labelPosition = lp || 'left';

    const root = useRef(null) as React.MutableRefObject<null | HTMLDivElement>
    const { colorClasses } = useColors({ ref: root, color, styles })
    const id = '_' + Math.random().toString(36).substr(2, 9);

    return (
        <div className={cn(styles["radio-container"], colorClasses, className)} ref={root}>
            { labelPosition === 'left' && <label htmlFor={id}>{children}</label> }
            <div className={styles.radio}>
                <input  type="radio" id={id} {...rest}/>
                <div className={styles['radio-effect']}></div>
            </div>
            { labelPosition === 'right' && <label htmlFor={id}>{children}</label> }
        </div>
    )
}