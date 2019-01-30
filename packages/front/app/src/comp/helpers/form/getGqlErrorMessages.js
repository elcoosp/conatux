const getGqlErrorMessages = error =>
  error === undefined ? [] : error.graphQLErrors.map(({ message }) => message)

export default getGqlErrorMessages
