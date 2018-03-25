// import configureMockStore from 'redux-mock-store'
import { CREATE_REQUIREMENT } from 'common/actionTypes'
import appReducer, { createRequirement } from '../appReducer'

// const middlewares = []
// const mockStore = configureMockStore(middlewares)

describe('appReducer', () => {
  test('handles CREATE_REQUIREMENT action', () => {
    const mockRequirements = []
    const initialState = { requirements: mockRequirements }
    const mockRequirement = { id: 1, title: 'test requirement' }
    const mockAction = {
      type: CREATE_REQUIREMENT,
      payload: mockRequirement
    }
    expect(appReducer(initialState, mockAction)).toEqual({
      ...initialState,
      requirements: [...initialState.requirements, mockRequirement]
    })
  })
})

describe('#createRequirement', () => {
  it('should create CREATE_REQUIREMENT action to update requirements', () => {
    const mockRequirement = { id: 1, title: 'test requirement' }
    const expectedAction = {
      type: CREATE_REQUIREMENT,
      payload: mockRequirement
    }
    expect(createRequirement(mockRequirement)).toEqual(expectedAction)
  })
})
