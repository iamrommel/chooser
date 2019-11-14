import React from 'react'

export const SelectionOutput = ({ label, description, value }) => {
    return (
        <React.Fragment>
            <div className="col-lg-4 text-right">
                <h2>{label}
                </h2>
                <small>{description}</small>
            </div>
            <div className="col-lg-2 no-padding">
                <h2 className="text-success font-bold">{value}</h2>
            </div>
        </React.Fragment>
    )
}

