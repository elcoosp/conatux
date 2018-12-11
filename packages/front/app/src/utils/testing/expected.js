import React from 'react'
import { shallow } from 'enzyme'
const withProps = props => ({
  from: (func, ...args) => {
    const result = func(...args)
    Object.entries(props).forEach(([prop, value]) => {
      it(`should return an object with a \`${prop}\` property`, () => {
        expect(result).toHaveProperty(prop, value)
      })
    })
  }
})

const isCompWithProps = ({ kind, props, component }) => {
  const [expectedComponent, displayName] = kind
  const [Component, name] = component
  describe(`Given the \`${name}\` component`, () => {
    const wrapper = shallow(<Component />)

    it(`should be a ${displayName}`, () =>
      expect(wrapper.is(expectedComponent)).toBe(true))

    Object.entries(props).forEach(([prop, value]) => {
      it(`should have a \`${prop}\` prop equal to \`${value}\``, () =>
        expect(wrapper.prop(prop)).toBe(value))
    })
  })
}

export default {
  withProps,
  isCompWithProps
}
