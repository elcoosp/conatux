const { createError } = require('apollo-errors')

module.exports = {
  WrongCredentials: createError('WrongCredentials', {
    message: 'The provided credentials are invalid.'
  })
}
