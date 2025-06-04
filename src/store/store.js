import { createStore, applyMiddleware, combineReducers } from 'redux';
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

export const store = createStore(reducer, applyMiddleware(thunk));
