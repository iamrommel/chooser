import React from 'react'
import { CompareItem } from './CompareItem'
import { useAppContext } from '../AppContext'

export const OutputDetails = () => {

    const { computeResult } = useAppContext()

    return (
        <section id="pricing" className="services">
            <div className="container">
                <div className="row m-b-lg">
                    <div className="col-lg-12 text-center">
                        <div className="navy-line"/>
                        <h1>Section 3. Output Details</h1>
                    </div>
                </div>
                <div className="row">
                    <CompareItem {...computeResult.left} />
                    <CompareItem {...computeResult.right} />
                </div>
            </div>
        </section>


    )
}

