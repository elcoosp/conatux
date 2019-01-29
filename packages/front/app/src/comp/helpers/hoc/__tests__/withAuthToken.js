import React from 'react'
import { desc } from '@:/utils/testing'
import withAuthToken from '../withAuthToken'
import { shallow } from 'enzyme'
desc.module('withAuthToken', () => {
  const setup = ({ data }) => {
    const Component = () => 'component'
    const WrappedComponent = withAuthToken(Component)
    const wrapper = shallow(<WrappedComponent />).renderProp('children')({
      data
    })

    return { wrapper }
  }

  describe('Given the data.auth.token property does not exist', () => {
    it('should return a component with the authToken prop set to null', () => {
      const { wrapper } = setup({ data: {} })

      expect(wrapper.prop('authToken')).toBe(null)
    })
  })

  describe('Given the data.auth.token property does  exist', () => {
    it('should return a component with the authToken prop set to null', () => {
      const token = 'token'
      const { wrapper } = setup({ data: { auth: { token } } })

      expect(wrapper.prop('authToken')).toBe(token)
    })
  })
})
