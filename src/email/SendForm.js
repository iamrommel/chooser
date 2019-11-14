import React from 'react'

export const SendForm = ({ email, onChangeEmail, sendNow, sending }) => {
    return (
        <React.Fragment>
            <div className="col-lg-6 col-lg-offset-2 ">
                <input type="email" placeholder="Email" className="form-control" value={email} disabled={sending}
                       onChange={e => onChangeEmail(e.target.value)}/>
            </div>
            <div className="col-lg-2">
                <button className="btn btn-primary btn-xs" onClick={sendNow} disabled={sending}>Send</button>
            </div>
        </React.Fragment>

    )
}

