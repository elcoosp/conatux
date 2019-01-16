import { desc } from '@:/utils/testing'
import getGqlErrorMessages from '../getGqlErrorMessages'

desc.module('getGqlErrorMessages', () => {
  it('return an empty array if the error is undefined', () => {
    expect(getGqlErrorMessages(undefined)).toEqual([])
  })

  it('return an array of the messages stored inside the graphQLErrors field', () => {
    const messageOne = 'error'
    const messageTwo = 'error two'
    const error = {
      graphQLErrors: [{ message: messageOne }, { message: messageTwo }]
    }
    expect(getGqlErrorMessages(error)).toEqual([messageOne, messageTwo])
  })
})
