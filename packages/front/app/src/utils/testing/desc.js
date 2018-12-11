import React from 'react'
import { shallow } from 'enzyme'

const comp = (name, callback) => describe(`<${name} />`, () => callback())

const compWithSnap = (namedComponentObj, props, callback) => {
  const name = Object.keys(namedComponentObj)[0]
  const Comp = namedComponentObj[name]
  comp(Comp.displayName || name, () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Comp {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
    callback()
  })
}

const module = (name, callback) => describe(`module: ${name}`, () => callback())

const func = (name, callback) => describe(`${name}()`, () => callback())

export default {
  module,
  func,
  comp,
  compWithSnap
}
