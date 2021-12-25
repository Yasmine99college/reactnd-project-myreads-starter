import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import Books from './Books';
import First from './First';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }
   async componentDidMount() {
     const books = await BooksAPI.getAll()
      //  .then((books) => {
      this.setState({
        books, isLoading: false,
      })
    //  })


  }
  ShelvesUpdate = (books, shelf) => {
    BooksAPI.update(books, shelf).then(BooksAPI.getAll().then((books) => { this.setState({ books }) })
);


  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<First
          books={this.state.books}
          ShelvesUpdate={this.ShelvesUpdate}
        ></First>)} />

        <Route exact path="/search" render={() => (
          <Search
            ShelvesUpdate={this.ShelvesUpdate}
            books={this.state.books}

          />)} />

      </div>
    )
  }
}

export default BooksApp
