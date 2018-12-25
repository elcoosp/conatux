/* namedMutationObj: An object with a unique property which is the name of the mutation and whose value is a mutation function */
const execNamedMutation = async (namedMutationObj, variables) => {
  const [mutationName] = Object.keys(namedMutationObj)
  const mutation = namedMutationObj[mutationName]

  const {
    data: { [mutationName]: response } // Extract the relevant response data from an apollo result
  } = await mutation({
    variables
  })

  return response
}

// Handle submitting an apollo mutation from a formik onSubmit event
const handleMutationSubmit = namedMutationObj => async (
  variables, // Mutation variables
  { setSubmitting, setErrors } // Formik handler function
) => {
  try {
    const response = await execNamedMutation(namedMutationObj, variables)
    console.log(response)
  } catch (error) {
    console.log(error.graphQLErrors)
  } finally {
    setSubmitting(false)
  }
}

export default handleMutationSubmit
