import React from 'react'
import { shallow } from 'enzyme'
import { desc } from '@:/utils/testing'
import { PrivateRoute } from '../PrivateRoute'
import { Redirect } from 'react-router-dom'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'
const Component = () => 'Component'

const setup = ({ component = Component, ...props } = {}) => {
  const wrapper = shallow(
    <PrivateRoute {...{ component, ...props }} />,
    new ReactRouterEnzymeContext().get()
  ).renderProp('render')()

  return { wrapper }
}

desc.compWithSnap(
  { PrivateRoute },
  {
    authToken: null,
    component: Component
  },
  () => {
    describe('Given authToken prop is truthy', () => {
      const { wrapper } = setup({ authToken: 'valid token' })

      it('should render the provided component prop', () => {
        expect(wrapper.find(Component).exists()).toBe(true)
      })
    })

    describe('Given authToken prop is falsy', () => {
      const redirectTo = '/redirect'
      const { wrapper } = setup({ redirectTo, authToken: null })

      it('should not render the component', () => {
        expect(wrapper.find(Component).exists()).toBe(false)
      })
      it('should render a`<Redirect />`', () => {
        expect(wrapper.find(Redirect).exists()).toBe(true)
      })
      it('should pass the redirectTo prop as the pathname of the to prop from the `<Redirect />` component', () => {
        expect(wrapper.find(Redirect).prop('to')).toEqual({
          pathname: redirectTo
        })
      })
    })
  }
)
