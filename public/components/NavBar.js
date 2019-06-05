import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                    <NavLink exact to="/" className="navbar-brand">Online Library</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active">View Books</NavLink>
                        <NavLink exact to="/AddBook" className="nav-item nav-link" activeClassName="nav-item nav-link active">Add Book</NavLink>                 
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}