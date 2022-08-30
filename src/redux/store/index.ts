import { createStore , applyMiddleware } from 'redux';
import Reducers from "../reducers";
import createSagaMiddleware from 'redux-saga';
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware()


const Store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);



export default Store;