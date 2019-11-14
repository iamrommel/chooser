import React from 'react'
import { InputRadio } from '../components/InputRadio'
import { BusinessModelOptions } from '../common/BusinessModelOptions'

export const BusinessModelInput = (props) => {

    const options = [
        {
            value: BusinessModelOptions.consumer.value,
            onChange: () => props.onChange(BusinessModelOptions.consumer.value)
        },
        {
            value: BusinessModelOptions.b2b.value,
            onChange: () => props.onChange(BusinessModelOptions.b2b.value)
        },
        {
            value: BusinessModelOptions.enterprise.value,
            onChange: () => props.onChange(BusinessModelOptions.enterprise.value)
        }
    ]

    return (
        <InputRadio label="Business Model"
                    description="A design for the successful operation of a business"
                    value={props.value}
                    options={options}
                    name="businessModel"
        />
    )
}

