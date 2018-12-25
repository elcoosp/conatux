import React from 'react'
import { LabelledField } from '@:/comp/helpers/form'

export const Username = () => (
  <LabelledField label="Username" type="text" name="username" />
)

export const Email = () => (
  <LabelledField label="Email" type="email" name="email" />
)

export const Password = () => (
  <LabelledField label="Password" type="password" name="password" />
)

export const PasswordConfirmation = () => (
  <LabelledField
    label="Password confirmation"
    type="password"
    name="passwordConfirmation"
  />
)
export default {
  Username,
  Email,
  Password,
  PasswordConfirmation
}
