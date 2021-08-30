/** @format */

import React, { Fragment } from "react"
import Card from "react-bootstrap/Card"
import { useQuery } from "@apollo/client"
import { getOneBook } from "../graphql-client/queries"

const BookDetail = ({ bookId }) => {
  const { loading, error, data } = useQuery(getOneBook, {
    variables: {
      id: bookId,
    },
  })
  if (loading) return <p>Loading information of book ...</p>
  if (error) {
    console.log(error.message)
    return <p>Something error ... </p>
  }
  const book = !loading && !error ? data.book : null

  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {book === null ? (
          <Card.Text>Please select a book</Card.Text>
        ) : (
          <Fragment>
            <Card.Title>{book.name}</Card.Title>
            <Card.Subtitle> {book.genre}</Card.Subtitle>
            <p>Name author:{book.author.name}</p>
            <p>Age: {book.author.age}</p>
            <p>All books by this author</p>
            <ul>
              {book.author.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </Fragment>
        )}
      </Card.Body>
    </Card>
  )
}

export default BookDetail
