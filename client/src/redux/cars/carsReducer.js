import { carsActionsTypes } from "./carsActions"

const initialState = {
    items: [],
    item: null,
    isLoading: false
}

const newCars = (state, action) => {
    console.log(action.payload)
    const newState = [...state.cars, action.payload]
    return newState
}

const remooveCar = (state, action) => {
    console.log(action.payload)
    const newState = state.items.filter(item => item._id !== action.payload)
    return newState
}

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carsActionsTypes.ADD_CAR_TO_STATE:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }

        case carsActionsTypes.ADD_NEW_CAR_TO_STATE:
            return {
                ...state,
                items: newCars(state, action)
            }

        case carsActionsTypes.ADD_ONE_CAR_TO_STATE:
            return {
                ...state,
                item: action.payload
            }

        case carsActionsTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case carsActionsTypes.DELETE_CAR_FROM_STATE:
            return {
                ...state,
                items: remooveCar(state, action)
            }

        default: return state
    }
}