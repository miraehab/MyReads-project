import React, { Component } from 'react'
import SelectOptions from './SelectOptions'
 
class Book extends Component{
    render(){
      const { books } = this.props

        return(
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <SelectOptions/>
                </div>
              </div>
              <div className="book-title">{books.title}</div>
              <div className="book-authors">{books.authors}</div>
            </div>
        )
    }
}

export default Book
