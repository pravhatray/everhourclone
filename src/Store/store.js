import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth.reducer";
import { signupReducer } from "./signupreducer";

const rootreducer = combineReducers({ signup:signupReducer,auth:authReducer});
const createcomposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore( rootreducer,createcomposer(applyMiddleware(thunk)));
