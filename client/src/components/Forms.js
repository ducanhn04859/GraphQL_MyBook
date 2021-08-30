/** @format */

import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { useQuery } from "@apollo/client"
import { getAuthors } from "../graphql-client/queries"

function Forms() {
  const { loading, error, data } = useQuery(getAuthors)
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Book name" required />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="Book Genre" />
          </Form.Group>

          <Form.Group>
            {loading ? (
              <p>Loading author ...</p>
            ) : (
              <Form.Control as="select" defaultValue="Select author">
                <option disabled>Select author</option>
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
