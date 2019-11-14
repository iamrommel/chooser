import React from 'react'

export const Fail = ({ message }) => {
    return (
        <div className="col-lg-12">
            <div className="p-h-lg">
                <h1 className="text-center text-danger">{message}</h1>
            </div>
        </div>
    )
}

