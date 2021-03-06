/** @format */

import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import BookForm from "./BookForm"
import AuthorForm from "./AuthorForm"

function Forms() {
  return (
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <AuthorForm />
      </Col>
    </Row>
  )
}

export default Forms
