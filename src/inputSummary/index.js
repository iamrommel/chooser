import React from 'react'
import { useAppContext } from '../AppContext'
import { BusinessModelInput } from './BusinessModelInput'
import { MonthlyWebsiteVisitor } from './MonthlyWebsiteVisitor'
import { CustomerLifetimeValue } from './CustomerLifetimeValue'
import { ConversionRate } from './ConversionRate'

export const InputSummary = () => {

    const {
        monthlyVisitor, setMonthlyVisitor,
        customerLifetimeValue,  setCustomerLifetimeValue,
        businessModel, setBusinessModel,
        conversionRate, setConversionRate
    } = useAppContext()


    return (

        <section id="contact" className="gray-section">
            <div className="container">
                <div className="row m-b-lg">
                    <div className="col-lg-12 text-center">
                        <div className="navy-line"/>
                        <h1>Section 2. Inputs Summary</h1>
                    </div>
                </div>

                <BusinessModelInput value={businessModel} onChange={setBusinessModel}/>
                <MonthlyWebsiteVisitor value={monthlyVisitor} onChange={setMonthlyVisitor}/>
                <CustomerLifetimeValue value={customerLifetimeValue} onChange={setCustomerLifetimeValue}/>
                <ConversionRate value={conversionRate} onChange={setConversionRate}/>

            </div>
        </section>

    )
}



