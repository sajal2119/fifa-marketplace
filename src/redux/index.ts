import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

if (typeof window !== "undefined") {
    (window as any).getStore = () => {
        return store.getState();
    };
}

export default store;
