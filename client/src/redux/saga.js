import { all } from 'redux-saga/effects'
import { carsSaga } from './cars/carsSaga'
import { propertySaga } from './property/propertySaga'

export function* rootSaga() {
    yield all([carsSaga(), propertySaga()])
}