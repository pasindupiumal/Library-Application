import React, {Component} from 'react';
import axios from 'axios';

export default class AddBook extends Component{

    constructor(props){
        super(props);

        this.state = {
            authors: []
        }

        this.componentDidMount = () => {

            fetch('/api/authors', {method: 'GET'}).then(res => res.json()).then(resJson => {

                this.setState({
                    authors: resJson.data,
                    Name: null,
                    ISBN: null,
                    Author: null,
                    Price: null,
                    YearOfPublication: null,
                    Publisher: null,
                });

            })
        }

        this.handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        }


        this.handleSubmit = (e) => {
            e.preventDefault();

            const newBook = {
                Name: this.state.Name,
                ISBN: this.state.ISBN,
                Author: this.state.Author,
                Price: this.state.Price,
                YearOfPublication: this.state.YearOfPublication,
                Publisher: this.state.Publisher
            }

            axios.post('/api/books/', newBook).then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            })

            console.log(this.state);
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <br/> 
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="Name" placeholder="Enter Name" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>ISBN</label>
                        <input type="text" className="form-control" id="ISBN" placeholder="Enter ISBN" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" id="Price" placeholder="Enter Price" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Year Of Publication</label>
                        <input type="text" className="form-control" id="YearOfPublication" placeholder="Enter Year Of Publication" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Publisher</label>
                        <input type="text" className="form-control" id="Publisher" placeholder="Enter Publisher Name" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Select Author</label>
                        <select className="form-control" id="Author" onChange={this.handleChange}>

                        {
                            this.state.authors.length ? (

                                this.state.authors.map((author, key) => {
                                    return(
                                        <option key={key}> {author.FirstName + " " + author.LastName}</option>
                                    )
                                })
                            ) : (
                                <option> No Authors Found </option>
                            )
                        }
                        </select>
                    </div>

                    <div className="form-group text-center">
                        <br/>
                        <button type="submit" className="btn btn-primary mb-2">Add New Book</button>
                    </div>        

                    
                </form>
            </div>
        )
    }
}