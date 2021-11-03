import { put, call, takeLatest } from 'redux-saga/effects'
import { propertyApi } from '../../api/propertyApi'
import { addPropertyToState, propertyActionTypes, addNewPropertyToState, deletePropertyFromState, setIsLoading } from './propertyActions'

export function* fetchPropertyRequest() {
   try {
      yield put(setIsLoading(true))
      const property = yield call(propertyApi.getAllProperty)
      yield put(addPropertyToState(property))
   } catch (e) {
      console.log(e.message)
   }
}

export function* addNewPropertyRequest({ payload }) {
   try {
      const property = yield call(propertyApi.addNewProperty, payload)
      yield put(addNewPropertyToState(property))
   } catch (e) {
      console.log(e.message)
   }
}

export function* deletePropertyRequest({ payload }) {
   try {
      yield call(propertyApi.deleteProperty, payload)
      yield put(deletePropertyFromState(payload))
   } catch (e) {
      console.log(e.message)
   }
}

export function* propertySaga() {
   yield takeLatest(propertyActionTypes.FETCH_PROPERTY, fetchPropertyRequest)
   yield takeLatest(propertyActionTypes.ADD_NEW_PROPERTY, addNewPropertyRequest)
   yield takeLatest(propertyActionTypes.DELETE_PROPERTY, deletePropertyRequest)
}