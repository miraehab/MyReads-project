import React, { Component } from 'react'
import SelectOptions from './SelectOptions'
import * as BooksAPI from './BooksAPI'
 
class Book extends Component{

    handler = (val) => { 
      BooksAPI.update(this.props.books, val)
      this.props.books.shelf = val
      this.props.afterChange(val)
    }
    
    render(){
      const { books } = this.props

        return(
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(books.imageLinks !== undefined)?books.imageLinks.thumbnail:''})` }}></div>
                <div className="book-shelf-changer">
                  <SelectOptions 
                  handler={this.handler}
                  value={(this.props.books.shelf === undefined)?this.props.shelf:this.props.books.shelf}
                  />
                </div>
              </div>
              <div className="book-title">{books.title}</div>
              <div className="book-authors">{books.authors}</div>
            </div>
        )
    }
}

export default Book
