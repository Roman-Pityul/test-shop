import { call, put, takeLatest } from "redux-saga/effects";
import { addNewCarToState, carsActionsTypes, addOneCarToState, addCarToState, setIsLoading, remooveCarFromState } from '../cars/carsActions'
import { carsApi } from "../../api/carsApi";

export function* fetchCarsRequest() {
    try {
        yield put(setIsLoading(true))
        const cars = yield call(carsApi.getAllCar)
        yield put(addCarToState(cars))
    } catch (e) {
        console.log(e.message)
    }
}

export function* addNewCarRequest({ payload }) {
    try {
        yield put(setIsLoading(true))
        const car = yield call(carsApi.addCar, payload)
        yield put(addNewCarToState(car))
    } catch (e) {
        console.log(e.message)
    }
}

export function* addOneCarRequest({ payload }) {
    try {
        const car = yield call(carsApi.getOneCar, payload)
        yield put(addOneCarToState(car))
    } catch (e) {
        console.log(e.message)
    }
}

export function* deleteCarRequest({ payload }) {
    try {
        console.log(payload)
        yield call(carsApi.deleteCar, payload)
        yield put(remooveCarFromState(payload))
    } catch (e) {
        console.log(e.message)
    }
}

export function* carsSaga() {
    yield takeLatest(carsActionsTypes.FETCH_CARS, fetchCarsRequest)
    yield takeLatest(carsActionsTypes.ADD_NEW_CAR, addNewCarRequest)
    yield takeLatest(carsActionsTypes.ADD_ONE_CAR, addOneCarRequest)
    yield takeLatest(carsActionsTypes.DELETE_CAR, deleteCarRequest)
}