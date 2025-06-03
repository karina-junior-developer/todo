export const initialTodosState = {
	todos: [],
	originalTodos: [],
	refreshTodoItems: false,
	isLoading: false,
};

export const reducer = (state = initialTodosState, action) => {
	switch (action.type) {
		case 'SET_TODOS': {
			return {
				...state,
				todos: action.payload,
			};
		}

		case 'SET_ORIGINAL_TODOS': {
			return {
				...state,
				originalTodos: action.payload,
			};
		}

		case 'SET_IS_LOADING': {
			return {
				...state,
				isLoading: action.payload,
			};
		}

		case 'SET_REFRESH': {
			return {
				...state,
				refreshTodoItems: !state.refreshTodoItems,
			};
		}

		default:
			return state;
	}
};
