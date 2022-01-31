import React, { useEffect } from "react"
import { OtherString } from '../util'

interface UseColorsProps {
    color?: string;
    styles: any;
    ref: React.MutableRefObject<any>
}

export type CustomColor = "primary" | "error" | "success" | OtherString;

export const useColors = (props: UseColorsProps) => {
    const { color: c, styles, ref} = props;
    const color = c || "primary";

    useEffect(() => {
        if (ref.current && !["primary", "error", "success"].includes(color)) {
            ref.current.style.setProperty('--color', color)
        }
    }, [ref, color])

    return {
        colorClasses: [
            {[styles.error]: color === 'error'}, 
            {[styles.success]: color === 'success'}
        ]
    }
}