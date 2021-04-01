import React, { Component } from 'react'
import Book from './Book'
//import * as BooksAPI from './BooksAPI'

class ListContent extends Component{
    state={

    }

    render(){
        const { query } = this.state
        const { section, book } = this.props
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {section.map((s)=>(
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{s}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {book.map((b)=>(
                                            b.shelf.trim().toLowerCase() === s.replace(/\s/g, '').toLowerCase() &&
                                            (<li key={b.id}>
                                                <Book
                                                books={b}
                                                />
                                            </li>)
                                            ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
            
        )
    }
}

export default ListContent