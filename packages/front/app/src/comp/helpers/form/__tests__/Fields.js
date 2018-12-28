import { desc, getFakeProps } from '@:/utils/testing'
import Fields from '../Fields'

const fieldNames = ['Username', 'Email', 'Password', 'PasswordConfirmation']

const [Username, Email, Password, PasswordConfirmation] = getFakeProps(
  __dirname,
  '../Fields'
)(...fieldNames)

const props = {
  Username,
  Email,
  Password,
  PasswordConfirmation
}

fieldNames.forEach(fieldName =>
  desc.compWithSnap(
    { [`Fields.${fieldName}`]: Fields[fieldName] },
    props[fieldName],
    () => {}
  )
)
