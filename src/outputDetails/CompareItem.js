import React from 'react'
import numeral from 'numeraljs'

export const CompareItem = ({ winner, revenue, expenses, profit, name }) => {
    revenue = numeral(revenue).format('$0,0')
    expenses = numeral(expenses).format('$0,0')
    profit = numeral(profit).format('$0,0')
    return (
        <div className="col-lg-6 wow zoomIn animated" style={{ visibility: 'visible' }}>
            <ul className={`pricing-plan list-unstyled ${winner === true ? 'selected' : ''}`}>
                <li className="pricing-title">
                    {name}&nbsp;
                    {winner && <i className="fa fa-trophy text-warning" aria-hidden="true" title="Winner"/>}
                </li>
                <li className="pricing-desc">
                    This is your per year 1 result
                </li>
                <li>
                    <span>{revenue}</span> as revenue
                </li>
                <li>
                    <span>{expenses}</span> as expenses
                </li>
                <li className="pricing-price">
                    <span>{profit}</span> as profit
                </li>
            </ul>
        </div>
    )
}

