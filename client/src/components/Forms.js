/** @format */

import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { useQuery, useMutation } from "@apollo/client"
import { getAuthors, getBooks } from "../graphql-client/queries"
import { addSingleBook } from "../graphql-client/mutations"

function Forms() {
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
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <Form>
          <Form.Group className="invisible">
            <Form.Control />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="Author name" required />
          </Form.Group>

          <Form.Group>
            <Form.Control type="number" placeholder="Author Age" />
          </Form.Group>

          <Button className="float-right" variant="info" type="submit">
            Add New Book
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Forms
