import React from 'react';
import { connect } from 'react-redux';
import { WingBlank, WhiteSpace, NavBar, SearchBar, Icon } from 'antd-mobile'
import actions from '../actions/actions';
import CatList from '../components/SearchFrag/CatList'

class SearchFrag extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let {dispatch} = this.props;
		dispatch(actions.request_catlist())
	}

	render() {
		let {SearchFrag} = this.props;
		return (
			<div style={{height:document.documentElement.clientHeight-98}}>
				<NavBar mode="light" iconName={false} rightContent={[<Icon key="0" type="ellipsis" />]}>搜索</NavBar>
				<div style={{backgroundColor:'#F7F7F7',height:document.documentElement.clientHeight-99 }}>
					<WingBlank>
						<WhiteSpace size="lg" />
						<SearchBar placeholder="请输入拼单名称" maxLength={8} />
						<WhiteSpace size="lg" />
						<div>分类</div>
						<WhiteSpace size="lg" />
						<CatList catdata={SearchFrag.catlist}/>
					</WingBlank>

				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	let {SearchFrag} = state;
	return {SearchFrag}
}

export default connect(mapStateToProps)(SearchFrag)