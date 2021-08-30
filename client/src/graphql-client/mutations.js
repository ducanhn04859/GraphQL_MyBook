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
export { addSingleBook }
