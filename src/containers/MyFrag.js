import React from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon } from 'antd-mobile'
import actions from '../actions/actions';
import UserInfo from '../components/MyFrag/UserInfo/UserInfo';

class MyFrag extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {dispatch} = this.props;
        dispatch(actions.request_UserInfo())
    }

    render() {
        let {MyFrag} = this.props;

        return (
            <div style={{height:document.documentElement.clientHeight-98}}>
                <NavBar mode="light" iconName={false} rightContent={[<Icon key="0" type="ellipsis" />]}>我的</NavBar>
                <div style={{backgroundColor:'#F7F7F7',height:document.documentElement.clientHeight-99 }}>
                    <UserInfo data={MyFrag.userinfo}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let {MyFrag} = state;
    return {MyFrag}
}
export default connect(mapStateToProps)(MyFrag)