// import configureMockStore from 'redux-mock-store'
import { CREATE_REQUIREMENT, UPDATE_REQUIREMENT } from 'common/actionTypes'
import requirementReducer, {
  createRequirement,
  updateRequirement
} from '../requirementReducer'

// const middlewares = []
// const mockStore = configureMockStore(middlewares)

describe('requirementReducer', () => {
  test('handles CREATE_REQUIREMENT action', () => {
    const mockRequirements = []
    const initialState = { requirements: mockRequirements }
    const mockRequirement = { id: 1, title: 'test requirement' }
    const mockAction = {
      type: CREATE_REQUIREMENT,
      payload: mockRequirement
    }
    expect(requirementReducer(initialState, mockAction)).toEqual({
      ...initialState,
      requirements: [...initialState.requirements, mockRequirement]
    })
  })

  test('handles UPDATE_REQUIREMENT action', () => {
    const mockRequirements = [{ id: 1, title: 'test requirement' }]
    const initialState = { requirements: mockRequirements }
    const mockRequirementUpdated = { id: 1, title: 'test requirement update' }
    const mockAction = {
      type: UPDATE_REQUIREMENT,
      payload: mockRequirementUpdated
    }
    expect(requirementReducer(initialState, mockAction)).toEqual({
      ...initialState,
      requirements: [mockRequirementUpdated]
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

describe('#updateRequirement', () => {
  it('should create UPDATE_REQUIREMENT action to update requirements', () => {
    const mockRequirement = { id: 1, title: 'test requirement' }
    const expectedAction = {
      type: UPDATE_REQUIREMENT,
      payload: mockRequirement
    }
    expect(updateRequirement(mockRequirement)).toEqual(expectedAction)
  })
})
