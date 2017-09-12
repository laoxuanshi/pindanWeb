const MessageReducers = (state = { catlist: {} }, action) => {
	let newstate;
	switch (action.type) {
		case 'RECEIVE_CATLIST':
			state.catlist = action.data.list;
			newstate = Object.assign({}, state);
			return newstate;
		default:
			return state
	}
}
export default MessageReducers;