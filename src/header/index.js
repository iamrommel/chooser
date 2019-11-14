import React from 'react'

export const Header = () => {
    return (
        <div className="navbar-wrapper">
            <nav className="navbar navbar-default navbar-fixed-top navbar-scroll" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="/">Chooser</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="page-scroll" href="#features">Summary</a></li>
                            <li><a className="page-scroll" href="#contact">Input Summary</a></li>
                            <li><a className="page-scroll" href="#pricing">Output Details</a></li>
                            <li><a className="page-scroll" href="#team">Email</a></li>
                            <li><a className="page-scroll" href="#testimonials">Option Details</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

