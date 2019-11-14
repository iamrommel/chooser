import { BusinessCase } from './BusinessCase'
import { ToyotaVsHondaCase } from './ToyotaVsHondaCase'

//NOTE: this should get the value from environment variables or settings somewhere
const defaultOperation = 'toyotaVsHondaCase'


export class ComputeFactory {
    constructor({ operationName, input }) {
        this.operationName = operationName || defaultOperation
        this.input = input
    }

    run = () => {
        const method = this[this.operationName]
        if (!method) {
            throw new Error(`Computation ${this.operationName} is NOT implemented on ComputeFactory`)
        }
        return method()
    }


    businessCase = () => {
        const instance = new BusinessCase()
        return instance.compute(this.input)
    }

    toyotaVsHondaCase = () => {
        const instance = new ToyotaVsHondaCase()
        return instance.compute(this.input)
    }

}