import { propertyActionTypes } from './propertyActions'

const initialState = {
  property: [],
  isLoading: false,
  isLoading: false
}

const newProperty = (state, action) => {
  const newState = [...state.property, action.payload]
  return newState
}

const deleteProperty = (state, action) => {
  const newState = state.property.filter(prop => prop._id !== action.payload)
  return newState
}

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {

    case propertyActionTypes.ADD_PROPERTY:
      return {
        ...state,
        property: action.payload,
        isLoading: false
      }

    case propertyActionTypes.ADD_NEW_PROPERTY_TO_STATE:
      return {
        ...state,
        property: newProperty(state, action)
      }

    case propertyActionTypes.DELETE_PROPERTY_FROM_STATE:
      return {
        ...state,
        property: deleteProperty(state, action)
      }

    case propertyActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default: return state
  }
}