export const carsActionsTypes = {
    FETCH_CARS: 'FETCH_CARS',
    FETCH_ONE_CAR: 'FETCH_ONE_CAR',
    ADD_CAR: 'ADD_CAR',
    ADD_CAR_TO_STATE: 'ADD_CAR_TO_STATE',
    ADD_NEW_CAR: 'ADD_NEW_CAR',
    ADD_ONE_CAR: 'ADD_ONE_CAR',
    ADD_ONE_CAR_TO_STATE: 'ADD_ONE_CAR_TO_STATE',
    ADD_NEW_CAR_TO_STATE: 'ADD_NEW_CAR_TO_STATE',
    DELETE_CAR: 'DELETE_CAR',
    DELETE_CAR_FROM_STATE: 'DELETE_CAR_FROM_STATE',
    SET_IS_LOADING: 'SET_IS_LOADING'
}

export const fetchCars = () => {
    return {
        type: carsActionsTypes.FETCH_CARS
    }
}

export const fetchOneCar = (payload) => {
    return {
        type: carsActionsTypes.FETCH_ONE_CAR,
        payload
    }
}

export const addNewCar = (payload) => {
    return {
        type: carsActionsTypes.ADD_NEW_CAR,
        payload
    }
}

export const addOneCar = (payload) => {
    return {
        type: carsActionsTypes.ADD_ONE_CAR,
        payload
    }
}

export const addOneCarToState = (payload) => {
    return {
        type: carsActionsTypes.ADD_ONE_CAR_TO_STATE,
        payload
    }
}

export const deleteCar = (payload) => {
    return {
        type: carsActionsTypes.DELETE_CAR,
        payload
    }
}

export const addCar = (payload) => {
    return {
        type: carsActionsTypes.ADD_CAR,
        payload
    }
}

export const addCarToState = (payload) => {
    return {
        type: carsActionsTypes.ADD_CAR_TO_STATE,
        payload
    }
}

export const addNewCarToState = (payload) => {
    return {
        type: carsActionsTypes.ADD_NEW_CAR_TO_STATE,
        payload
    }
}

export const setIsLoading = (payload) => {
    return {
        type: carsActionsTypes.SET_IS_LOADING,
        payload
    }
}

export const remooveCar = (payload) => {
    return {
        type: carsActionsTypes.DELETE_CAR,
        payload
    }
}

export const remooveCarFromState = (payload) => {
    return {
        type: carsActionsTypes.DELETE_CAR_FROM_STATE,
        payload
    }
}