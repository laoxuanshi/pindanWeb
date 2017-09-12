import React from 'react';
import { List, Badge } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import { Link} from 'react-router';
import './UserInfo.scss';

class UserInfo extends React.Component {
	constructor() {
		super();
	}

	render() {
		let {data} = this.props;
		return (
			<div>
				<div className='head'>
					<img className='bg' src={require('../../../images/bg.jpg')  }></img>
					<img className='userImage' src={data.userAvaUrl }></img>
				</div>

				<List ref='mylist'  className="my-list" >
					<Item arrow="horizontal" onClick={() => {}}>基本资料</Item>
                    <div style={{ height:'0.5rem' }}> </div>
                    <Item arrow="horizontal" onClick={() => {}}>正在进行</Item>
                    <Item arrow="horizontal" onClick={() => {}}>我发起的</Item>
                    <Item arrow="horizontal" onClick={() => {}}>我参与的</Item>
                    <div style={{ height:'0.5rem' }}> </div>
                    <Item arrow="horizontal" onClick={() => {}}>设置</Item>
				</List>

			</div>
		)
	}
}
export default UserInfo