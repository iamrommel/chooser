import React from 'react'
import { SelectionOutput } from './SelectionOutput'
import get from 'lodash.get'

export const InputRadio = ({ value, label, description, options = [], name }) => {

    return (
        <div className="row m-t-lg m-b-lg">
            <SelectionOutput {...{ label, description, value }} />

            <div className="col-lg-6 p-h-md">
                {options.map((m) => <InputRadioOption key={m.value} {...{ ...m, name, selectedValue: value }}/>)}
            </div>
        </div>
    )
}


export const InputRadioOption = ({ value, selectedValue, onChange, name }) => {

    name = name || 'radioInline'
    const id = `${name}` + value.replace(/\s/g, '')
    const checked = value === selectedValue

    return (
        <div className="radio radio-success radio-inline">
            <input type="radio"
                   id={id}
                   value={value}
                   name={name}
                   checked={checked}
                   onChange={(arg) => {
                       const changeValue = get(arg, 'target.value')
                       onChange(changeValue)
                   }}
            />
            <label htmlFor={id}> {value} </label>
        </div>
    )
}

