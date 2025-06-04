import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	isLoadingReducer,
	originalTodosReducer,
	refreshTodoItemsReducer,
	todosReducer,
} from '../reducers';

const reducer = combineReducers({
	todos: todosReducer,
	originalTodos: originalTodosReducer,
	refreshTodoItems: refreshTodoItemsReducer,
	isLoading: isLoadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
