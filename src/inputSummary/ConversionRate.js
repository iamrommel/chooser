import React from 'react'
import { InputSlider } from '../components/InputSlider'
import numeral from 'numeraljs'
import get from 'lodash.get'

export const ConversionRate = ({ value, onChange }) => {

    const formatter = {
        to: (num) => {
            return numeral(num).format('0.0%')
        },
        from: (str) => {
            return numeral(str).value()
        }
    }

    const sliderOptions = {

        range: {
            min: 0,
            '25%': 0.05,
            '50%': 0.10,
            '75%': 0.15,
            max: 0.2
        },
        pips: {
            mode: 'steps',
            density: 2,
            format: formatter
        },
        //step: 0.001,
        start: value || 0,
        tooltips: formatter,
        onSlide: (args) => {
            const sliderValue = get(args, '[0]')
            onChange(numeral(sliderValue).value())
        }
    }

    return (
        <InputSlider label="Conversion Rate" description="How fast your conversion is"
                     value={formatter.to(value)} options={sliderOptions}/>
    )
}

