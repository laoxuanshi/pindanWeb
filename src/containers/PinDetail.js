import React from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'antd-mobile';
import actions from '../actions/actions';
import Content from '../components/PinFrag/Detail/Detail';
import {NavBar,Icon} from 'antd-mobile';

class PinDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
        let {dispatch,params} = this.props;
		dispatch(actions.requestDetail(params.id))
	}

	render() {
        let { PinDetail } = this.props;

		return (
			<div style={{height:document.documentElement.clientHeight-98}}>
				<NavBar mode="light" onLeftClick={() => history.go(-1)} rightContent={[<Icon key="0" type="ellipsis" />]}>拼单详情</NavBar>
				<div style={{backgroundColor:'#F7F7F7',height:document.documentElement.clientHeight-99 }}>
                    <Content data={PinDetail.data}/>
				</div>
			</div>

		)
	}
}

function mapStateToProps(state) {
    let { PinDetail } = state;
    return { PinDetail }
}
export default connect(mapStateToProps)(PinDetail)
