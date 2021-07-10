import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "react-thunk";

 

export const store = createStore(rootReducer ,applyMiddleware(thunk));