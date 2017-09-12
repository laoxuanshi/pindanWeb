const Topic = (state = { pinList: {} }, action) => {
	let newState;
	switch (action.type) {
		case 'RECEIVE_PinList':
			state.pinList = action.pinList;
			newState = Object.assign({}, state);
			return newState;
		default:
			return state
	}
};

export default Topic