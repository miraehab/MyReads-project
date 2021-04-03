import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListContent from './ListContent'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
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
