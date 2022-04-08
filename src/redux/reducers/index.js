import {combineReducers, createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {tableDataReducer} from "./tableDataReducer";

export const store = createStore(combineReducers({
    tableDataReducer
}), applyMiddleware(thunk));