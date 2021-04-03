import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListContent from './ListContent'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    sections:["Currently reading","Want to read","read"],
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={()=>(
            <SearchBook
              currentBooks={this.state.books}
            />
          )}
         />
        <Route exact path='/' render={()=>(
          <ListContent
              section={this.state.sections}
              book={this.state.books}
            />
          )}
         />  
            
      </div>
    )
  }
}

export default BooksApp
