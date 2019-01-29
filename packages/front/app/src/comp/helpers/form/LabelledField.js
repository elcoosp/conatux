import React from 'react'
import P from 'prop-types'
import { Label, Input } from 'ui/form'
import { Field as FormikField, ErrorMessage } from 'formik'

const Field = Input.withComponent(FormikField)
const LabelledField = ({ label, name, type }) => (
  <>
    <Label>
      {label}
      <Field name={name} type={type} />
    </Label>
    <ErrorMessage name={name} />
  </>
)

LabelledField.propTypes = {
  label: P.string.isRequired,
  name: P.string.isRequired,
  type: P.string.isRequired
}
export default LabelledField
