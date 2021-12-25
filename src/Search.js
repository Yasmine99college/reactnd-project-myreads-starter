import escapeStringRegexp from 'escape-string-regexp'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Books from './Books'
import * as BooksAPI from './BooksAPI'


class Search extends Component {
    state = {
        query: '',
        BooksSearchHist: []
    }
    UpdateQ = (query) => {
        this.setState({
            query: query
        })
        this.getBksSrchHist(query)

    }
    getBksSrchHist = (query) => {
        if (query) {
            BooksAPI.search(query).then((BooksSearchHist) => {
                // this.setState({ BooksSearchHist })

                if (BooksSearchHist.error) {
                    this.setState({ BooksSearchHist: [] })
                }
                else {
                    this.setState({ BooksSearchHist })

                }
                // this.setState({ BooksSearchHist })})


            })
        }
        else {
            this.setState({ BooksSearchHist: [] })

        }


    }
    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.UpdateQ(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.BooksSearchHist.map(BooksSearchHist => {
                                let noneshelf = "none";
                                this.props.books.map(book =>
                                (
                                    book.id === BooksSearchHist.id ?
                                        noneshelf = book.shelf :
                                        ''

                                ))
                                return (
                                    <li key={BooksSearchHist.id}>
                                        <Books
                                            bookList={BooksSearchHist}
                                            ShelvesUpdate={this.props.ShelvesUpdate}
                                            shelfNow={noneshelf}

                                        />
                                    </li>
                                )
                            }
                            )}

                    </ol>
                </div>
            </div>
        )
    }

}

export default Search;