import { iMusicState,  musicReducer } from "./music-reducer";
import { iPersonState, personsReducer } from "./persons-reducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

export interface iRootState {
    music: iMusicState,
    persons: iPersonState,
}

const rootReducer = combineReducers({
    music: musicReducer,
    persons: personsReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
