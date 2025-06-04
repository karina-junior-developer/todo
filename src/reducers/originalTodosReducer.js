export const initialOriginalTodosState = {
	originalTodos: [],
};

export const originalTodosReducer = (state = initialOriginalTodosState, action) => {
	switch (action.type) {
		case 'SET_ORIGINAL_TODOS': {
			return {
				...state,
				originalTodos: action.payload,
			};
		}
		default:
			return state;
	}
};
