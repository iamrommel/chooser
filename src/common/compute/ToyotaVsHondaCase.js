import { BusinessModelOptions } from '../BusinessModelOptions'

export class ToyotaVsHondaCase {

    compute = ({ customerLifetimeValue, monthlyVisitor, businessModel, conversionRate }) => {

        //NOTE: Do some logic about the computation, showing the winner and loser,
        //This will finalize what will happen on the computation
        //Just to Do Random things
        const random = () => Math.floor((Math.random() * 100) + 1)

        let businessModelMultiplier = 1
        if (businessModel === BusinessModelOptions.enterprise.value) {
            businessModelMultiplier = 2
        }
        else if (businessModel === BusinessModelOptions.b2b.value) {
            businessModelMultiplier = 3
        }

        let left = {
            name: 'Toyota',
            expenses: (customerLifetimeValue + monthlyVisitor * conversionRate * random()) / businessModelMultiplier,
            revenue: (customerLifetimeValue + monthlyVisitor * conversionRate * random()) / businessModelMultiplier
        }
        left.profit = left.revenue - left.expenses

        let right = {
            name: 'Honda',
            expenses: (customerLifetimeValue + monthlyVisitor * conversionRate * random()) / businessModelMultiplier,
            revenue: (customerLifetimeValue + monthlyVisitor * conversionRate * random()) / businessModelMultiplier
        }
        right.profit = right.revenue - right.expenses

        //get the winner
        right.winner = right.profit > left.profit
        left.winner = left.profit > right.profit

        const winner = left.winner ? left : right
        const loser = !left.winner ? left : right

        //return the computed object
        return { left, right, winner, loser }
    }
}