import React, { useRef, useState } from 'react'
import styles from './Select.module.scss'
import cn from 'classnames'
import { useColors, CustomColor } from '../../hooks/useColors'

export interface SelectOption {
    value?: any;
    label?: string;
}

export interface SelectProps extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
    accent?: CustomColor;
    value?: any;
    options?: SelectOption[];
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

function findIndex(array: SelectOption[], value: any) {
    if (array.length == 0) return
    let result = array.map(a => a.value).findIndex(o => JSON.stringify(o) === JSON.stringify(value))
    if (result != -1) return array[result];
    else return array[0];
}

export const Select: React.FC<SelectProps> = (props) => {
    const { children, className, accent, options: ops, value, onChange, ...rest } = props;
    const options = ops || [];
    const [selected, setSelected] = useState(findIndex(options, value));
    const [focus, setFocus] = useState(false);

    const root = useRef(null) as React.MutableRefObject<null | HTMLDivElement>
    const hiddenInput = useRef(null) as React.MutableRefObject<null | HTMLInputElement>
    const { colorClasses } = useColors({ ref: root, styles, color: accent })

    const emitChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: any) => {
        setSelected(findIndex(options, value))
        hiddenInput.current?.blur();
        //@ts-ignore
        let e: React.ChangeEvent<HTMLSelectElement> = event;
        if (onChange) {
            e.currentTarget.value = value;
            onChange(e);
        }
    }

    const getId = () => {
        const id = '_' + Math.random().toString(36).substr(2, 9);
        return id;
    }

    return (
        <div className={cn(styles.select, {[styles.focus]: focus}, colorClasses, className)} {...rest} ref={root}>
            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} ref={hiddenInput}/>
            <p className={cn(styles.selected)}>{ selected?.label }</p>
            <div className={cn(styles["options-container"], {[styles.focus]: focus})}>
                <div className={cn(styles["options-list"])}>
                    { options.map(option => {
                        return <div key={getId()} className={cn(styles.option)} 
                            onClick={(event) => emitChange(event, option.value)}
                            onMouseDown={(event) => event.preventDefault()}
                        >{ option.label }</div>
                    }) }
                </div>
            </div>
        </div>
        
    )
}