/** @format */

import React from "react"

const BookForm = () => {
  return (
    <div>
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
    </div>
  )
}

export default BookForm
