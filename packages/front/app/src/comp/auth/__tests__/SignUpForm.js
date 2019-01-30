import React from 'react'
import { shallow } from 'enzyme'
import { desc, expected } from '@:/utils/testing'
import { Fields, Form } from '@:/comp/helpers/form'
import SignUpForm from '../SignUpForm'

const props = {}

desc.compWithSnap({ SignUpForm }, props, () => {
  describe('SignUpForm children', () => {
    const signUp = jest.fn()
    const loading = false
    const error = {}
    const data = {}
    const setup = () =>
      shallow(<SignUpForm />).renderProp('children')(signUp, {
        loading,
        error,
        data
      })

    expected.components(setup(), {
      Form,
      'Fields.Username': Fields.Username,
      'Fields.Email': Fields.Email,
      'Fields.Password': Fields.Password,
      'Fields.PasswordConfirmation': Fields.PasswordConfirmation
    })
  })
})
