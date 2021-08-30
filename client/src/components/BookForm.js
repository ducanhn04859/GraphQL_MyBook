/** @format */

import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { useQuery, useMutation } from "@apollo/client"
import { getAuthors, getBooks } from "../graphql-client/queries"
import { addSingleBook } from "../graphql-client/mutations"
const BookForm = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  })

  const { name, genre, authorId } = newBook

  const onInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    //console.log(newBook)
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooks }],
    })
    setNewBook({ name: "", genre: "", authorId: "" })
  }

  //GraphQL operations
  const { loading, error, data } = useQuery(getAuthors)

  const [addBook, dataMutaion] = useMutation(addSingleBook)

  // console.log(dataMutaion)

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group>
        <Form.Control
          type="text"
          name="name"
          placeholder="Book name"
          onChange={onInputChange}
          value={name}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Book Genre"
          name="genre"
          onChange={onInputChange}
          value={genre}
          required
        />
      </Form.Group>

      <Form.Group>
        {loading ? (
          <p>Loading author ...</p>
        ) : (
          <Form.Control
            as="select"
            name="authorId"
            onChange={onInputChange}
            value={authorId}>
            <option value="" disabled>
              Select author
            </option>
            {data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Form.Control>
        )}
      </Form.Group>
      <Button className="float-right" variant="info" type="submit">
        Add New Book
      </Button>
    </Form>
  )
}

export default BookForm
