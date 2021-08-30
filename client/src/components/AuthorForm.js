/** @format */

import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { useMutation } from "@apollo/client"
import { getAuthors } from "../graphql-client/queries"
import { addSingleAuthor } from "../graphql-client/mutations"
function AuthorForm() {
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    age: "",
  })

  const { name, age } = newAuthor

  const onInputChange = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    //console.log(newAuthor)
    addAuthor({
      variables: {
        name,
        age: parseInt(age),
      },
      refetchQueries: [{ query: getAuthors }],
    })
    setNewAuthor({ name: "", age: "" })
  }

  //GraphQL operations
  //   const { loading, error, data } = useQuery(getAuthors)

  const [addAuthor, dataMutaion] = useMutation(addSingleAuthor)

  // console.log(dataMutaion)

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group className="invisible">
        <Form.Control />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Author name"
          name="name"
          onChange={onInputChange}
          value={name}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Author Age"
          name="age"
          onChange={onInputChange}
          value={age}
          required
        />
      </Form.Group>

      <Button className="float-right" variant="info" type="submit">
        Add New Author
      </Button>
    </Form>
  )
}

export default AuthorForm
