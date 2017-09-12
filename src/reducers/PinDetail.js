import { Toast } from 'antd-mobile';
const TopicReducers = (state = { data: {} }, action) => {
	let newState;
	switch (action.type) {
		case 'RECEIVE_DETAIL':
			state.data = action.data;
			newState = Object.assign({}, state);
			return newState;
		default:
			return state
	}
};

export default TopicReducers;

