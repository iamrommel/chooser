import React, { useState } from 'react'
import fetch from 'cross-fetch'
import { SendForm } from './SendForm'
import { Success } from './Success'
import { Fail } from './Fail'
import { useUriQuery } from '../common/useUriQuery'
import { useAppContext } from '../AppContext'
import get from 'lodash.get'

export const Email = () => {

    const { customerLifetimeValue, monthlyVisitor, businessModel, conversionRate } = useAppContext()
    const uriQuery = useUriQuery()
    const [email, setEmail] = useState('')
    const [sending, setSending] = useState(false)
    const [sendResult, setSendResult] = useState({})


    const sendNow = async () => {

        //set the url search params
        //it's automatically encoded by URLSearchParams
        uriQuery.set('bm', businessModel)
        uriQuery.set('clv', customerLifetimeValue)
        uriQuery.set('mv', monthlyVisitor)
        uriQuery.set('cr', conversionRate)
        const params = uriQuery.toString()
        const origin = get(window, 'location.origin')
        const uri = `${origin}/?${params}`


        try {
            const sendMailUrl = '/.netlify/functions/sendmail'
            setSending(true)
            let fetchResult = await fetch(sendMailUrl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    uri
                })
            })
            fetchResult = await fetchResult.json()
            setSendResult(fetchResult)
        } catch (e) {
            setSendResult({
                message: e.message,
                status: 'NOT-OK'
            })
        } finally {
            setSending(false)
        }

    }

    return (

        <section id="team" className="services gray-section">
            <div className="container">
                <div className="row m-b-lg">
                    <div className="col-lg-12 text-center">
                        <div className="navy-line"/>
                        <h1>Section 4. Email</h1>
                        <p>Email this result</p>
                    </div>
                </div>
                <div className="row m-b-xl">
                    <SendForm {...{ email, onChangeEmail: setEmail, sendNow, sending }} />

                    {sendResult.status === 'OK' && <Success message={sendResult.message}/>}
                    {sendResult.status === 'NOT-OK' && <Fail message={sendResult.message}/>}

                </div>
            </div>
        </section>

    )
}

