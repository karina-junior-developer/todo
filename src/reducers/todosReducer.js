export const initialTodosState = {
	todos: [],
};

export const todosReducer = (state = initialTodosState, action) => {
	switch (action.type) {
		case 'SET_TODOS': {
			return {
				...state,
				todos: action.payload,
			};
		}
		default:
			return state;
	}
};
