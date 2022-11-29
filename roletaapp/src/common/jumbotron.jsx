import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron bg-light d-flex align-items-center justify-content-center" style={{height: 500}}>
                <div className="container-fluid col-6">
                    <h1 className="display-3 text-center">Roleta App!</h1>
                    <p className="text-center">Roleta app is your app for calculating the amount you have to pay for
                        your blinds,
                        you can also see the types of blinds and we will direct you with the company that implements
                        them.</p>
                    <p className="text-center">
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Calculate
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/outside-blinds">
                                        <a className="dropdown-item">Outside Blinds
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/store">
                                        <a className="dropdown-item">Store
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/venetiane">
                                        <a className="dropdown-item">Venetiane
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;