import React from 'react'
import { useAppContext } from '../AppContext'
import get from 'lodash.get'
import numeral from 'numeraljs'

export const Summary = () => {
    const { computeResult } = useAppContext()

    const winnerName = get(computeResult, 'winner.name', '')
    const winnerRevenueRaw = numeral(get(computeResult, 'winner.revenue', 0)).format('$0,0.00')
    const winnerRevenue = numeral(get(computeResult, 'winner.revenue', 0)).format('($0a)')
    const winnerProfit = numeral(get(computeResult, 'winner.profit', 0)).format('($0a)')
    const loserName = get(computeResult, 'loser.name', '')


    return (
        <section id="features" className="container services">
            <div className="container">
                <div className="row m-b-lg">
                    <div className="col-lg-12 text-center">
                        <div className="navy-line"/>
                        <h1>Section 1. Output Summary</h1>
                        <p>Here is the summary of calculation</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8  features-text">
                        <h1>Each year, a business with <b>{winnerName}</b> will earn and estimate <b>{winnerRevenue}</b> revenue from {loserName}. {winnerName} will earn a {winnerProfit} additional profit over {loserName}</h1>
                    </div>
                    <div className="col-lg-4  features-text">

                        <div className="widget navy-bg p-lg text-center">
                            <div className="m-b-md">
                                <i className="fa fa-money fa-4x"/>
                                <h3 className="font-bold no-margins">
                                    {winnerName} Revenue
                                </h3>
                                <h1 className="m-xs">{winnerRevenueRaw}</h1>
                                <small>per year</small>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

