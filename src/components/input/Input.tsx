import React, { useRef, useState } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'
import { useColors, CustomColor } from '../../hooks/useColors'
import { Button } from '../button/Button'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    value: string;
    type?: React.HTMLInputTypeAttribute;
    accent?: CustomColor;
    icon?: React.ReactNode;
    shadow?: boolean;
    "button-icon"?: React.ReactNode;
    "icon-position"?: "start" | "end";
    button?: string;
    "button-position"?: "start" | "end";
    callback?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Input: React.FC<InputProps> = (props) => {
    const { className, children, type: t, accent, icon: Icon, "icon-position": ip, 
            button, "button-position": bp, callback, "button-icon": buttonIcon, shadow, ...rest 
    } = props
    let type = t || "text"
    let iconPostion = ip || 'start'
    let buttonPosition = bp || 'end'
    let color = accent || 'primary'
    
    const root = useRef(null) as React.MutableRefObject<null | HTMLDivElement>
    const [focus, setFocus] = useState(false)
    const { colorClasses } = useColors({ color, ref: root, styles })

    const onFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
        setFocus(true)
        if (props.onFocus) props.onFocus(event)
    }

    const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
        setFocus(false)
        if (props.onBlur) props.onBlur(event)
    }

    return (
        <div className={cn(
                styles["input-container"], colorClasses, {[styles.focus]: focus}, {[styles.grid]: button || buttonIcon || Boolean(Icon)},
                styles[`btn-${buttonPosition}`], {[styles.shadow]: shadow}
        )} ref={root}>
            { (button || buttonIcon) && buttonPosition === "start" && <Button icon={buttonIcon} color={color} onClick={callback}>{ button }</Button> }
            { Boolean(Icon) && iconPostion === "start" && Icon }
            <input type={type} onFocus={onFocus}  {...rest} onBlur={onBlur}/>
            { Boolean(Icon) && iconPostion === "end" && Icon }
            { (button || buttonIcon) && buttonPosition === "end" && <Button icon={buttonIcon} color={color} onClick={callback}>{ button }</Button> }
        </div>
    )
}