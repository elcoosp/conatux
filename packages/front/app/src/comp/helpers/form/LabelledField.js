import React from 'react'
import P from 'prop-types'
import { Label } from 'ui/form'
import { Field, ErrorMessage } from 'formik'

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
