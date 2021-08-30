/** @format */

import { gql } from "@apollo/client"

const addSingleBook = gql`
  mutation CreateBookMutation($authorId: ID!, $name: String, $genre: String) {
    createBook(authorId: $authorId, name: $name, genre: $genre) {
      id
      name
      genre
    }
  }
`

const addSingleAuthor = gql`
  mutation CreateAuthorMutation($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
    }
  }
`
export { addSingleBook, addSingleAuthor }
