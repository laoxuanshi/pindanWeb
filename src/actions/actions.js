import '../mock/PinFrag'
import '../mock/MessageFrag'
import '../mock/SearchFrag'
import '../mock/MyFrag'

let actions = {
	selectTab: tab => ({
		type: 'SELECT_TAB',
		tab
	}),
	requestPinList: ( num = 10 ) => (dispatch, getState) => {
		let url  = `http://localhost:8088/getPinList?limit=${num}`;
		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			dispatch(actions.receivePinList(data.list, num))
		}).catch(e => console.log(e))
	},
	receivePinList: (pinList, num) => ({
		type: 'RECEIVE_PinList',
		pinList,
		num
	}),

	requestDetail: (id) => (dispatch, getState) => {
		let url = `http://localhost:8088/pindetail/${id}`;

		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			dispatch(actions.receiveDetail(data, id))
		}).catch(e => console.log(e))
	},
	receiveDetail: (data, id) => ({
		type: 'RECEIVE_DETAIL',
		data,
		id
	}),
    request_messageNum: () => (dispatch, getState) => {
        let url = `http://localhost:8088/getMessageNum`;

        fetch(url).then(function(res) {
            return res.json()
        }).then(function(data) {
            dispatch(actions.receiveMessageNum(data))
        }).catch(e => console.log(e))
    },
    receiveMessageNum: (data) => ({
    type: 'RECEIVE_MESSAGENUM',
    data
    }),
    request_catlist: () => (dispatch, getState) => {
        let url = `http://localhost:8088/getCatagoryList`;

        fetch(url).then(function(res) {
            return res.json()
        }).then(function(data) {
            dispatch(actions.receivecatlist(data))
        }).catch(e => console.log(e))
    },
    receivecatlist: (data) => ({
        type: 'RECEIVE_CATLIST',
        data
    }),
	request_UserInfo: (userId = 1) => (dispatch, getState) => {
		let url = `http://localhost:8088/getUserInfo/${userId}`;

		fetch(url).then(function(res) {
			return res.json()
		}).then(function(data) {
			dispatch(actions.receiveUserInfo(data))
		}).catch(e => console.log(e))
	},
	receiveUserInfo: (data) => ({
		type: 'RECEIVE_USERINFO',
		data
	})

};
export default actions