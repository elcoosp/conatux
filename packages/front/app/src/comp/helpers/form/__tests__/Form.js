import React from 'react'
import { shallow } from 'enzyme'
import { Submit } from 'ui/form'
import { Formik } from 'formik'

import Errors from '@:/comp/helpers/Errors'

import { desc, getFakeProps, expected } from '@:/utils/testing'
import Form, { isDisabled, FormInner } from '../Form'

const [props] = getFakeProps(__dirname, '../Form')('Form')

desc.compWithSnap({ Form }, props, () => {
  describe('Mutation handler', () => {
    it('should pass an `onSubmit` prop to the `Formik` component if the `mutation` prop is an object', () => {
      const wrapper = shallow(<Form {...props} mutation={{}} />)
      expect(
        wrapper
          .find(Formik)
          .first()
          .prop('onSubmit')
      ).toBeDefined()
    })

    it('should not pass an `onSubmit` prop to the `Formik` component if the `mutation` prop is falsy', () => {
      const wrapper = shallow(<Form {...props} mutation={undefined} />)
      expect(
        wrapper
          .find(Formik)
          .first()
          .prop('onSubmit')
      ).toBe(undefined)
    })
  })
  describe('Form children', () => {
    const setup = ({ isSubmitting = false, errors = {} } = {}) =>
      shallow(<Form {...props} />).renderProp('children')({
        isSubmitting,
        errors
      })

    expected.components(setup(), { Submit, FormInner, Errors })
  })
})

desc.module('isDisabled', () => {
  it('should return true if isSubmitting is true', () => {
    expect(isDisabled(true)).toBe(true)
  })

  it('should return true if errors has some keys', () => {
    expect(isDisabled(false, { foo: 'bar' })).toBe(true)
  })

  it('should return false if both isSubmitting is false and errors has no keys', () => {
    expect(isDisabled(false, {})).toBe(false)
  })
})
