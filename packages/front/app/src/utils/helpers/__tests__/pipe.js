import { desc } from '@:/utils/testing'
import pipe from '../pipe'
desc.module('pipe', () => {
  desc.func('execAsync', () => {
    it('should call every provided functions consecutively with the same cntext argument', async () => {
      const fnOne = jest.fn()
      const fnTwo = jest.fn()
      const context = 'context'
      await pipe.execAsync(fnOne, fnTwo)(context)
      expect(fnOne).toHaveBeenCalledWith(context)
      expect(fnTwo).toHaveBeenLastCalledWith(context)
    })
  })
})
