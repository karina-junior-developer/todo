export const initialIsLoadingState = {
	isLoading: false,
};

export const isLoadingReducer = (state = initialIsLoadingState, action) => {
	switch (action.type) {
		case 'SET_IS_LOADING': {
			return {
				...state,
				isLoading: action.payload,
			};
		}
		default:
			return state;
	}
};
