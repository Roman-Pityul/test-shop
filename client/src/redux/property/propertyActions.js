export const propertyActionTypes = {
   FETCH_PROPERTY: 'FETCH_PROPERTY',
   DELETE_PROPERTY: 'DELETE_PROPERTY',
   DELETE_PROPERTY_FROM_STATE: 'DELETE_PROPERTY_FROM_STATE',
   ADD_PROPERTY: 'ADD_PROPERTY',
   ADD_NEW_PROPERTY: 'ADD_NEW_PROPERTY',
   ADD_NEW_PROPERTY_TO_STATE: 'ADD_NEW_PROPERTYTO_STATE',
   SET_IS_LOADING: 'SET_IS_LOADING'

}

export const fetchProperty = () => {
   return {
      type: propertyActionTypes.FETCH_PROPERTY
   }
}

export const addPropertyToState = (payload) => {
   return {
      type: propertyActionTypes.ADD_PROPERTY,
      payload
   }
}

export const addNewProperty = (payload) => {
   return {
      type: propertyActionTypes.ADD_NEW_PROPERTY,
      payload
   }
}

export const addNewPropertyToState = (payload) => {
   return {
      type: propertyActionTypes.ADD_NEW_PROPERTY_TO_STATE,
      payload
   }
}

export const deleteProperty = (payload) => {
   return {
      type: propertyActionTypes.DELETE_PROPERTY,
      payload
   }
}

export const deletePropertyFromState = (payload) => {
   return {
      type: propertyActionTypes.DELETE_PROPERTY_FROM_STATE,
      payload
   }
}

export const setIsLoading = (payload) => {
   return {
      type: propertyActionTypes.SET_IS_LOADING,
      payload
   }
}