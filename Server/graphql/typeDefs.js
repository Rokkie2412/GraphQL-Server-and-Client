const {gql} = require('apollo-server')

module.exports = gql `
    type Contact {
        name:String
        email:String
        phoneNumber:String
    }

    input ContactInput {
        name:String
        email:String
        phoneNumber:String
    }

    type Query {
        contact(ID:ID!): Contact!
        getContact(amount: Int): [Contact]
        getByName(name: String): [Contact]
    }

    type Mutation {
        createContact(contactInput: ContactInput): Contact!
        deleteContact(ID: ID!):Boolean
        editContact(ID:ID!, contactInput:ContactInput): Boolean
    }
`

