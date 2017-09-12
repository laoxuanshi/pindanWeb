const LoginReducers = (state = { userinfo: {} }, action) => {
	let newState;
	switch (action.type) {
		case 'RECEIVE_USERINFO':
			state.userinfo = action.data;
			newState = Object.assign({}, state);
			return newState;
		default:
			return state
	}
};
export default LoginReducers;