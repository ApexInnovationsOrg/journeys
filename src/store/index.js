import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const middleWare = [thunk]

const store = window.__REDUX_DEVTOOLS_EXTENSION__
	? createStore(
			rootReducer,
			{},
			compose(
				applyMiddleware(...middleWare),
				window.__REDUX_DEVTOOLS_EXTENSION__()
			)
	  )
	: createStore(rootReducer, {}, compose(applyMiddleware(...middleWare)))

export default store
