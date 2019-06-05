import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                </div>
            </BrowserRouter>
        )
    }
}
