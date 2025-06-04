export const initialRefreshTodoItemsState = {
	refreshTodoItems: false,
};

export const refreshTodoItemsReducer = (state = initialRefreshTodoItemsState, action) => {
	switch (action.type) {
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
