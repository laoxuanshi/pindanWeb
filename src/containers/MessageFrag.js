import React from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon } from 'antd-mobile'
import actions from '../actions/actions';
import MessageList from '../components/MessageFrag/MessageList'

class MessageFrag extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let {dispatch} = this.props;
		dispatch(actions.request_messageNum())
	}

	render() {
		let {MessageFrag} = this.props;

		return (
			<div style={{height:document.documentElement.clientHeight-98}}>
				<NavBar mode="light" iconName={false} rightContent={[<Icon key="0" type="ellipsis" />]}>消息</NavBar>
				<div style={{backgroundColor:'#F7F7F7',height:document.documentElement.clientHeight-99 }}>
					<MessageList data={MessageFrag.messagenum}/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {

	let {MessageFrag} = state;
	return {MessageFrag}
}

export default connect(mapStateToProps)(MessageFrag)