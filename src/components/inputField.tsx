"use client";

import React, { useEffect, useState } from 'react'

interface InputProps {
    onChange: (val: string) => void;
    className: string;
    value?: string | number;
    disabled?: boolean;
    error?: string;
    type?: React.HTMLInputTypeAttribute;
}
const InputFieldComponent = (props: InputProps) => {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value])

    const onChangeValue = (value: string) => {
        if (props.type == "number") {
            value = value.length > 1
                ? value.replace(/^0+/, '') // replace all leading 0s
                : value
            value = value == "" ? "0" : value
        }

        setValue(value)
        props.onChange(value);
    }
    const errorBlock = props.error && (
        <span style={{
            position: "absolute",
            left: 0,
            top: 25,
            color: "red",
            fontSize: 12,
            width: 100
        }}>
            {props.error}
        </span>
    )
    return (
        <div style={{ position: "relative" }}>
            <input
                type={props.type}
                disabled={props.disabled}
                className={props.className}
                onChange={e => onChangeValue(e.target.value)}
                onFocus={e => e.target.select()}
                value={value}
            />
            {errorBlock}
        </div >
    )
}

export default InputFieldComponent;