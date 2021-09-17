import gql from "graphql-tag";
export const schema = gql`
  type UserExample {
    id: Int!
    email: String!
    name: String
  }

  type Query {
    userExamples: [UserExample!]!
    userExample(id: Int!): UserExample
  }

  input CreateUserExampleInput {
    email: String!
    name: String
  }

  input UpdateUserExampleInput {
    email: String
    name: String
  }

  type Mutation {
    createUserExample(input: CreateUserExampleInput!): UserExample!
    updateUserExample(id: Int!, input: UpdateUserExampleInput!): UserExample!
    deleteUserExample(id: Int!): UserExample!
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZ3JhcGhxbC91c2VyRXhhbXBsZXMuc2RsLmpzIl0sIm5hbWVzIjpbImdxbCIsInNjaGVtYSJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHO0FBQXRCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTNCTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgVXNlckV4YW1wbGUge1xuICAgIGlkOiBJbnQhXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHVzZXJFeGFtcGxlczogW1VzZXJFeGFtcGxlIV0hXG4gICAgdXNlckV4YW1wbGUoaWQ6IEludCEpOiBVc2VyRXhhbXBsZVxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlVXNlckV4YW1wbGVJbnB1dCB7XG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmdcbiAgfVxuXG4gIGlucHV0IFVwZGF0ZVVzZXJFeGFtcGxlSW5wdXQge1xuICAgIGVtYWlsOiBTdHJpbmdcbiAgICBuYW1lOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGNyZWF0ZVVzZXJFeGFtcGxlKGlucHV0OiBDcmVhdGVVc2VyRXhhbXBsZUlucHV0ISk6IFVzZXJFeGFtcGxlIVxuICAgIHVwZGF0ZVVzZXJFeGFtcGxlKGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlVXNlckV4YW1wbGVJbnB1dCEpOiBVc2VyRXhhbXBsZSFcbiAgICBkZWxldGVVc2VyRXhhbXBsZShpZDogSW50ISk6IFVzZXJFeGFtcGxlIVxuICB9XG5gXG4iXX0=