import { TabBar, Icon } from 'antd-mobile';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';
import PinFrag from './PinFrag';
import MessageFrag from './MessageFrag';
import SearchFrag from './SearchFrag';
import MyFrag from './MyFrag';

let obj = {};

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'selectedTab' in obj ? obj.selectedTab : 'pin',
            hidden: false
        };
    }

    renderContent(pageText) {
        if (pageText == '拼单') {
            return (
                <PinFrag actions={actions} />
            );
        } else if (pageText == '消息') {
            return (
                <MessageFrag actions={actions} />
            )
        } else if (pageText == '搜索') {
            return (
                <SearchFrag actions={actions} />
            )
        } else if (pageText == '我的') {
            return (
                <MyFrag  actions={actions} />
            )
        }
    }

    render() {
        return (
            <TabBar  unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={this.state.hidden} >
                <TabBar.Item title="拼单"  key="拼单" icon={ <Icon type={require('../images/index.svg')}></Icon>  }
                    selectedIcon={ <Icon type={require('../images/index-fill.svg')}></Icon> } selected={this.state.selectedTab === 'pin'}
                    onPress={() => { obj.selectedTab = 'pin'; this.setState({ selectedTab: 'pin' });  }} >
                    {this.renderContent('拼单')}
                </TabBar.Item>
                <TabBar.Item icon={ <Icon type={require('../images/message.svg')}></Icon> } selectedIcon={ <Icon type={require('../images/message-fill.svg')}></Icon> }
                    title="消息" key="消息" selected={this.state.selectedTab === 'message'}
                    onPress={() => { obj.selectedTab = 'message'; this.setState({ selectedTab: 'message',  }); }}  >
                    {this.renderContent('消息')}
                </TabBar.Item>
                <TabBar.Item icon={ <Icon type={require('../images/search.svg')}></Icon> } selectedIcon={ <Icon type={require('../images/search-fill.svg')}></Icon> }
                    title="搜索"  key="搜索" selected={this.state.selectedTab === 'search'}
                    onPress={() => { obj.selectedTab = 'search'; this.setState({ selectedTab: 'search'  }); }} >
                    {this.renderContent('搜索')}
                </TabBar.Item>

                <TabBar.Item icon={ <Icon type={require('../images/user.svg')}></Icon> } selectedIcon={ <Icon type={require('../images/user-fill.svg')}></Icon> 	}
                     title="我的" key="我的" selected={this.state.selectedTab === 'myinfo'}
                     onPress={() => { obj.selectedTab = 'myinfo'; this.setState({ selectedTab: 'myinfo' }); }} >
                    {this.renderContent('我的')}
                </TabBar.Item>
            </TabBar>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Index);