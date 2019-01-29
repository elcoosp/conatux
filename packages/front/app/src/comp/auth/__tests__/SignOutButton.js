import React from 'react'
import { desc } from '@:/utils/testing'
import Auth from '@:/services/auth'
import { shallow } from 'enzyme'
import SignOutButton from '../SignOutButton'

const props = {}

desc.compWithSnap({ SignOutButton }, props, () => {
  it('should call `Auth.signOut()` on click', () => {
    Auth.signOut = jest.fn()
    const wrapper = shallow(<SignOutButton />)
    wrapper.simulate('click')
    expect(Auth.signOut).toHaveBeenCalledTimes(1)
  })
})
