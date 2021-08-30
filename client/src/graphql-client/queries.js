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

export { getBooks }
