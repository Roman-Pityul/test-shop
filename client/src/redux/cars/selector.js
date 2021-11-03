
const selectCarsFromState = (state) => {
  return state.cars
}

export const selectCars = (state) => {
  return selectCarsFromState(state).items
}

export const selectCar = (state) => {
  return selectCarsFromState(state).item
}

export const selectIsLoading = (state) => {
  return selectCarsFromState(state).isLoading
}