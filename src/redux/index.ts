import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware());

if (typeof window !== "undefined") {
    (window as any).getStore = () => {
        return store.getState();
    };
}

export default store;
