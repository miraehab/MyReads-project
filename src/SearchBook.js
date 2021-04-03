import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component{
  state={
    books:[],
    afterChange:''
  }

  afterChanging = (value)=>{
    this.setState(()=>(
        {afterChange: value}
    ))
  };

  checkAlreadyExist = function (b) {
    for (let book of this.props.currentBooks){
      if(b.id === book.id)
        return book.shelf
    }
    return 'none'
  }

  updateQuery = (query)=>{
    (query)?
    (BooksAPI.search(query)
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })):(
      this.setState(()=>({
        books: []
      }))
    )
  }
    render(){
        return(
                <div className="search-books">
                  <div className="search-books-bar">
                    <a href="/" className="close-search">Close</a>
                    <div className="search-books-input-wrapper">
                      
                      <input 
                      type="text" 
                      placeholder="Search by title or author"
                      onChange={(event)=> this.updateQuery(event.target.value)}/>
      
                    </div>
                  </div>
                  <div className="search-books-results">
                    <ol className="books-grid">
                    {(!this.state.books.error)?
                      this.state.books.map((book)=>(
                            <li>
                              <Book 
                                books={book}
                                afterChange={this.afterChanging}
                                shelf={this.checkAlreadyExist(book)}
                              />
                            </li>
                        ))
                        : (<li></li>)
                    }
                    </ol>
                  </div>
                </div>
        )
    }
}

export default SearchBook