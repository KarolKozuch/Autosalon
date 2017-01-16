import React from 'react';

export default class Navigation extends React.Component {
    

    render() {
        return (
            <div className="navbar-fixed">
                    <nav className="blue-grey darken-1 ">
                        <div className="nav-wrapper container">
                            <a href="/" className="brand-logo"><i className="material-icons">directions_car</i>autosalon</a>
                                <ul className="right">
                                    <li><a href="/SearchResult"><i className="material-icons">search</i></a></li>
                                    <li><a href="/Kontakt">Kontakt</a></li>
                                </ul>
                        </div>

                    </nav>
            </div>
        )
    }
}