import { SHOW_ERROR, HIDE_ERROR } from '../actions/error'
import errorReducer from './error'
// Woo, tests!

describe('error reducer', () => {
  it('returns error message on "SHOW_ERROR"', () => {
    const action = {
      type: SHOW_ERROR,
      errorMessage: 'Error message',
    }
    const state = errorReducer(null, action)
    expect(state).toBe('Error message')
  })

  it('returns null on "HIDE_ERROR"', () => {
    const action = {
      type: HIDE_ERROR,
    }
    const state = errorReducer('Error message', action)
    expect(state).toBeNull()
  })

  it('returns previous state on other action type', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    }
    const state = errorReducer(null, action)
    expect(state).toBeNull()
  })
})
