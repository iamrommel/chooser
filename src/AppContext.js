import React, { createContext, useContext as useContextCore, useEffect, useState } from 'react'
import { BusinessModelOptions } from './common/BusinessModelOptions'
import { ComputeFactory } from './common/compute/ComputeFactory'
import { useUriQuery } from './common/useUriQuery'

const context = createContext()
const CoreProvider = context.Provider


export const AppContextProvider = ({ children }) => {

    const params = useUriQuery()
    //get the initial value from the url or from static value when not defined
    const initBusinessModel = params.get('bm') || BusinessModelOptions.consumer.value
    const initCustomerLifetimeValue = params.get('clv') || 200
    const initMonthlyVisitor = params.get('mv') || 10000
    const initConversionRate = params.get('cr') || 0.022


    const [customerLifetimeValue, setCustomerLifetimeValue] = useState(initCustomerLifetimeValue)
    const [monthlyVisitor, setMonthlyVisitor] = useState(initMonthlyVisitor)
    const [businessModel, setBusinessModel] = useState(initBusinessModel)
    const [conversionRate, setConversionRate] = useState(initConversionRate)
    const [computeResult, setComputeResult] = useState({})


    useEffect(() => {
        //run this once base on the default values
        //pass the inputs to data
        const computeInstance = new ComputeFactory({
            input: {
                customerLifetimeValue: customerLifetimeValue,
                monthlyVisitor: monthlyVisitor,
                businessModel: businessModel,
                conversionRate: conversionRate
            }
        })

        const result = computeInstance.run()
        setComputeResult(result)

    }, [customerLifetimeValue, monthlyVisitor, businessModel, conversionRate])


    return (
        <CoreProvider value={{
            customerLifetimeValue, setCustomerLifetimeValue,
            monthlyVisitor, setMonthlyVisitor,
            businessModel, setBusinessModel,
            conversionRate, setConversionRate,
            computeResult

        }}>
            {children}
        </CoreProvider>
    )
}

export const useAppContext = () => useContextCore(context)
