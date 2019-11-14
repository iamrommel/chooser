import React, { useState } from 'react'
import { SelectionOutput } from '../components/SelectionOutput'
import { Collapse } from 'react-bootstrap'
import { useAppContext } from '../AppContext'
import { MonthlyWebsiteVisitor } from '../inputSummary/MonthlyWebsiteVisitor'
import { ConversionRate } from '../inputSummary/ConversionRate'

export const Details = ({ name }) => {

    const [show, setShow] = useState(false)

    const {
        monthlyVisitor, setMonthlyVisitor,conversionRate,setConversionRate
    } = useAppContext()

    return (
        <div className="container">
            <div className="row m-b-lg">
                <div className="col-lg-12 text-center">
                    <div className="navy-line"/>
                    <h1><a onClick={() => setShow(!show)}>  {name} </a></h1>
                    <small>Click the header to expand and change the details</small>
                </div>
            </div>
            <Collapse in={show}>
                <div>
                    <MonthlyWebsiteVisitor value={monthlyVisitor} onChange={setMonthlyVisitor}/>
                    <ConversionRate value={conversionRate} onChange={setConversionRate}/>

                    <div className="col-lg-8 col-lg-offset-4">
                        <SelectionOutput label="Advance Result"
                                         description="This will be your estimated value for the first quarter."
                                         value="24,000"/>
                    </div>
                    <div className="col-lg-8 col-lg-offset-4">
                        <SelectionOutput label="Final Result"
                                         description="This will be your estimated value for the last quarter."
                                         value="2,000"/>
                    </div>

                </div>

            </Collapse>
        </div>
    )
}

