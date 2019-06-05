import React, {Component} from 'react';

export default class ViewBooks extends Component{

    constructor(props){
        super(props);

        this.state = {
            books: []
        }

        this.componentDidMount = () => {

            fetch('/api/books', {method: 'GET'}).then(res => res.json()).then(resJson => {
                console.log(resJson.data);
                this.setState({
                    books: resJson.data
                })
            })
        }
        
    }

    render(){
        return(
            <div className="container"> 
                
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">ISBN</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                        <th scope="col">Year Of Publication</th>
                        <th scope="col">Publisher</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                           this.state.books.length ? (

                                this.state.books.map((book, key) => {
                                    return(
                                        <tr key={key}>
                                        <td>{book.Name}</td>
                                        <td>{book.ISBN}</td>
                                        <td>{book.Author}</td>
                                        <td>{book.Price}</td>
                                        <td>{book.YearOfPublication}</td>
                                        <td>{book.Publisher}</td>
                                        </tr>
                                    )
                                })
                           ) : (
                               <tr><td>No Books Found</td></tr>
                           )
                       }
                       
                    </tbody>
                </table>
            </div>
        )
    }
}