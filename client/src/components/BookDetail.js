/** @format */

import React from "react"
import Card from "react-bootstrap/Card"
const BookDetail = () => {
  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        <Card.Title> Dev Up</Card.Title>
        <Card.Subtitle> IT Book</Card.Subtitle>
        <p>Name author: Nguyen Hien</p>
        <p>Age: 40</p>
        <p>All books by this author</p>
        <ul>
          <li>Dev Up</li>
          <li>Manage Time</li>
        </ul>
      </Card.Body>
    </Card>
  )
}

export default BookDetail
