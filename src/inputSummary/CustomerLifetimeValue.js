import React from 'react'
import { InputSlider } from '../components/InputSlider'
import numeral from 'numeraljs'
import get from 'lodash.get'

export const CustomerLifetimeValue = ({ value, onChange }) => {

    const formatter = {
        to: (num) => {
            return numeral(num).format('($0a)')
        },
        from: (str) => {
            return numeral(str).value()
        }
    }

    const sliderOptions = {

        range: {
            min: 1,
            '25%': 100,
            '50%': 1000,
            '75%': 10000,
            max: 100000
        },
        step: 100,
        start: value || 0,
        tooltips: formatter,
        pips: {
            mode: 'steps',
            stepped: true,
            density: 2,
            format: formatter
        },
        onSlide: (args) => {
            const sliderValue = get(args, '[0]')
            onChange(numeral(sliderValue).value())
        }
    }

    return (
        <InputSlider label="Customer Lifetime Value" description="Your estimated lifetime value of customer"
                     value={formatter.to(value)} options={sliderOptions}/>
    )
}

