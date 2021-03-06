import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import { rootSaga } from './saga'
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)