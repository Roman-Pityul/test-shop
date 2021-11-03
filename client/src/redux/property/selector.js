
const selectPropertyFromState = (state) => {
   return state.property
}

export const selectProperty = (state) => {
   return selectPropertyFromState(state).property
}

export const selectIsLoading = (state) => {
   return selectPropertyFromState(state).isLoading
}