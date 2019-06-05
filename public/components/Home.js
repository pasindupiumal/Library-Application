import React, {Component} from 'react';
import NavBar from './NavBar';
import ViewBooks from './ViewBooks';
import AddBook from './AddBook';
import {BrowserRouter, Route} from 'react-router-dom';

export default class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <NavBar/>

                <Route exact path="/" component={ViewBooks}/>
                <Route exact path="/AddBook" component={AddBook}/>

            </BrowserRouter>
        )
    }
}