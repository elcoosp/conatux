import { desc } from '@:/utils/testing'
import handleMutationSubmit, {
  execNamedMutation
} from '../handleMutationSubmit'

let responseData, namedMutationObj, variables
beforeEach(() => {
  responseData = 'the response'
  namedMutationObj = {
    myMutation: jest.fn(() => ({
      data: {
        myMutation: responseData
      }
    }))
  }
  variables = { id: 4 }
})

desc.module('execNamedMutation', async () => {
  const result = await execNamedMutation(namedMutationObj, variables)
  it('should call the named mutation with the provided variables', () => {
    expect(namedMutationObj.myMutation).toHaveBeenCalledWith(variables)
  })
  it('should return the extracted response data of the named mutation', () => {
    expect(result).toBe(responseData)
  })
})
desc.module('handleMutationSubmit', async () => {
  it('should call the setSubmitting formik function with false', async () => {
    const formikHandlers = {
      setSubmitting: jest.fn(),
      setError: jest.fn()
    }
    await handleMutationSubmit(namedMutationObj)(variables, formikHandlers)
    expect(formikHandlers.setSubmitting).toHaveBeenCalledWith(false)
  })
})
