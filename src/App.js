import React from 'react'
import './style/index'
import { Header } from './header'
import { AppContextProvider } from './AppContext'
import { Summary } from './outputSummary'
import { OutputDetails } from './outputDetails'
import { Email } from './email'
import { OptionDetails } from './optionDetails'
import { InputSummary } from './inputSummary'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/*">
                    <AppContextProvider>
                        <Header/>
                        <Summary/>
                        <InputSummary/>
                        <OutputDetails/>
                        <Email/>
                        <OptionDetails/>
                    </AppContextProvider>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
