import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';
import PinList from '../components/PinFrag/PinList/PinList';
import {NavBar,Icon,WhiteSpace} from 'antd-mobile';

class PinFrag extends React.Component {
	constructor(...arg) {
		super(...arg);
	}

    componentDidMount() {
        let {dispatch} = this.props;
        dispatch(actions.requestPinList())
	}

	scroll(divdom, listdom) {
		if (divdom.scrollTop + divdom.offsetHeight > listdom.offsetHeight) {
			//TODO 上拉加载更多
		}
	}

	render() {
		let {PinFrag} = this.props;
		let _this = this;

		return (
			<div style={{height:document.documentElement.clientHeight-98}}>
                <NavBar mode="light" iconName={false} rightContent={[<Icon key="0" type="ellipsis" />]}>首页</NavBar>
      			<div style={{backgroundColor:'#F7F7F7',height:document.documentElement.clientHeight-99 }}>
                    <PinList  scroll={_this.scroll.bind(_this)} data={PinFrag.pinList} />
  				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
    let {PinFrag} = state;
    return {PinFrag}
}
export default connect(mapStateToProps)(PinFrag)