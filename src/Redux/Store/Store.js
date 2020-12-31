import rootReducer from "../Reducers";

import { createStore } from "redux";

const compose = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const initialStore = {};
const store = createStore(rootReducer, initialStore, compose);

export default store