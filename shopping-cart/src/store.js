import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./Reducers/productsReducer";

const initialState = {};

const composeEnhancer =
	window.__REDUX_DEVTOOLS_CHROME_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({
		products: productsReducer
	}),
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
