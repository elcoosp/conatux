import { desc, expected } from '@:/utils/testing'
import React from 'react'
import { Fields, Form } from '@:/comp/helpers/form'
import Auth from '../../../services/auth'
import LoginForm, { makeSubmitHandler } from '../LoginForm'
import { shallow } from 'enzyme'

describe('LoginForm children', () => {
  const login = jest.fn()
  const loading = false
  const error = {}
  const data = {}
  const setup = () =>
    shallow(<LoginForm />)
      .renderProp('children')({ client: {} })
      .renderProp('children')(login, { loading, error, data })

  expected.components(setup(), {
    Form,
    'Fields.Email': Fields.Email,
    'Fields.Password': Fields.Password
  })
})

desc.func('makeSubmitHandler', () => {
  it('should call the login mutation, then Aut.storeToken, write the token to the cache and call formikHandlers.setSubmitting', async () => {
    Auth.storeToken = jest.fn()
    const client = {
      writeData: jest.fn()
    }
    const token = 'token'
    const login = jest.fn(async () => ({
      data: {
        login: { token }
      }
    }))
    const submitHandler = makeSubmitHandler({ client, login })
    const formikHandlers = { setSubmitting: jest.fn(), setErrors: jest.fn() }
    const variables = { some: 'variable' }
    await submitHandler(variables, formikHandlers)

    expect(login).toHaveBeenLastCalledWith({ variables })
    expect(Auth.storeToken).toHaveBeenLastCalledWith(token)
    expect(client.writeData).toHaveBeenLastCalledWith({
      data: { auth: { token } }
    })
    expect(formikHandlers.setSubmitting).toHaveBeenLastCalledWith(false)
  })
})
