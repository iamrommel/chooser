import React from 'react'
import Nouislider from 'nouislider-react'
import { SelectionOutput } from './SelectionOutput'

export const InputSlider = ({ label, description, value, options = {} }) => {
    options = {
        // Show a scale with the slider
        connect: 'lower',
        pips: {
            mode: 'steps',
            stepped: true,
            density: 2
        },
        animate: true,
        animationDuration: 300,
        behaviour: 'tap',
        ...options
    }
    return (
        <div className="row m-t-lg m-b-lg">
            <SelectionOutput {...{ label, description, value }} />
            <div className="col-lg-6 p-h-md">
                <Nouislider{...options} />
            </div>
        </div>
    )
}

