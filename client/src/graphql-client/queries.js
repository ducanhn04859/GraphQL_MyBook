/** @format */

import { gql } from "@apollo/client"

const getBooks = gql`
  query getBooks {
    books {
      name
      id
    }
  }
`
const getOneBook = gql`
  query getOneBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`

const getAuthors = gql`
  query getAuthor {
    authors {
      id
      name
    }
  }
`

export { getBooks, getOneBook, getAuthors }
