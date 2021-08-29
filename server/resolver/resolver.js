const resolvers = {
    Query: {
        books: () => [
            {
                id: 1,
                name: "User First",
                genre:"IT book"
            },
             {
                id: 2,
                name: "Dev UP",
                genre:"IT book"
            }
        ]
    }
}

module.exports = resolvers