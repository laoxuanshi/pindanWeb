const MessageReducers = (state = {}, action) => {
	let newState;
	switch (action.type) {
		case 'RECEIVE_MESSAGENUM':
			state.messagenum = action.data;
			newState = Object.assign({}, state);
			return newState;
		default:
			return state
	}
};
export default MessageReducers;