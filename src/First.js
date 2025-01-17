import React, { Component } from 'react'
import Books from './Books'
import { Link } from 'react-router-dom';


class First extends Component {
    render() {
        // console.log(this.props.books)
        return (<div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">

                                {this.props.books
                                    .filter(books => books.shelf === 'currentlyReading')
                                    .map(books =>
                                    (<li key={books.id}><Books
                                        book={books}
                                        ShelvesUpdate={this.props.ShelvesUpdate}
                                        shelfNow="currentlyReading"


                                    /></li>)
                                    )}

                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books
                                    .filter((books => books.shelf === 'wantToRead'))
                                    .map(books =>
                                    (<li key={books.id}><Books
                                        book={books}
                                        ShelvesUpdate={this.props.ShelvesUpdate}
                                        shelfNow="wantToRead"

                                    /></li>)
                                    )}
                                {/* book of Books.js */}


                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books
                                    .filter((books => books.shelf === 'read'))
                                    .map(books =>
                                    (<li key={books.id}><Books
                                        book={books}
                                        ShelvesUpdate={this.props.ShelvesUpdate}
                                        shelfNow="read"

                                    /></li>)
                                    )}


                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>)
    }

}

export default First;