import React from 'react'
import { InputSlider } from '../components/InputSlider'
import numeral from 'numeraljs'
import get from 'lodash.get'

export const MonthlyWebsiteVisitor = ({ value, onChange }) => {

    const formatter = {
        to: (num) => {
            return numeral(num).format('0,0')
        },
        from: (str) => {
            return numeral(str).value()
        }
    }

    const sliderOptions = {

        range: {
            min: 1000,
            '33%': 10000,
            '66%': 100000,
            max: 100000000
        },
        pips: {
            mode: 'steps',
            stepped: true,
            density: 2,
            format: formatter
        },
        start: value || 0,
        tooltips: formatter,
        onSlide: (args) => {
            const sliderValue = get(args, '[0]')
            onChange(numeral(sliderValue).value())
        }
    }

    return (
        <InputSlider label="Monthly Website Visitors" description="Your estimated monthly website visitor"
                     value={formatter.to(value)} options={sliderOptions}/>
    )
}

