/* namedMutationObj: An object with a unique property which is the name of the mutation and whose value is a mutation function */
export const execNamedMutation = async (
  namedMutationObj,
  mutationOptions = {},
  variables
) => {
  const [mutationName] = Object.keys(namedMutationObj)
  const mutation = namedMutationObj[mutationName]

  const {
    data: { [mutationName]: response } // Extract the relevant response data from an apollo result
  } = await mutation({
    variables,
    ...mutationOptions
  })

  return response
}

// Handle submitting an apollo mutation from a formik onSubmit event
const handleMutationSubmit = (namedMutationObj, mutationOptions) => async (
  variables, // Mutation variables
  { setSubmitting, setErrors } // Formik handler function
) => {
  try {
    const response = await execNamedMutation(
      namedMutationObj,
      mutationOptions,
      variables
    )
    return response
  } catch (error) {
    // TODO: handle error mappings to fields with setErrors
  } finally {
    setSubmitting(false)
  }
}

export default handleMutationSubmit
