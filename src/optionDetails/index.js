import React from 'react'
import { Details } from './Details'
import { useAppContext } from '../AppContext'
import get from 'lodash.get'

export const OptionDetails = () => {

    const { computeResult } = useAppContext()
    const leftName = get(computeResult, 'left.name')
    const rightName = get(computeResult, 'right.name')

    return (
        <section id="testimonials" className="services">
            <div>
                <Details {...computeResult.left} name={<>Details for <b>{leftName} </b> </>}/>
            </div>
            <div className="gray-section">
                <Details {...computeResult.right} name={<>Details for <b>{rightName} </b> </>}/>
            </div>
        </section>

    )
}

