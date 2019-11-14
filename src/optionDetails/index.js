import React from 'react'
import { Details } from './Details'
import { useAppContext } from '../AppContext'
import get from 'lodash.get'

export const OptionDetails = () => {

    const { computeResult } = useAppContext()
    const winnerName = get(computeResult, 'winner.name')
    const loserName = get(computeResult, 'loser.name')

    return (
        <section id="testimonials" className="services">
            <div>
                <Details {...computeResult.winner} name={<>Details for <b>{winnerName} </b> </>}/>
            </div>
            <div className="gray-section">
                <Details {...computeResult.loser} name={<>Details for <b>{loserName} </b> </>}/>
            </div>
        </section>

    )
}

