import React from 'react';
import { List, Badge } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import {Link} from 'react-router';

import './MessageList.scss'

class MessageList extends React.Component {
	constructor() {
		super();
	}

	render() {
		let {data} = this.props;
		return (
			<List ref='mylist'  className="my-list" >
				<Item style={{backgroundColor:'#F4F4F4'}}  key='1' thumb={require('../../images/push.png')  } extra={<Badge  text={data ? data.recommendNum: 0}  overflowCount={20} />} multipleLine wrap>
					推荐
				</Item>

				<Item style={{backgroundColor:'#F4F4F4'}}  key='2' thumb={require('../../images/reply.png')  }  extra={<Badge  text={data ? data.commentNum :0}  overflowCount={20} />} multipleLine wrap>
					评论
				</Item>

				<Item style={{backgroundColor:'#F4F4F4'}}  key='3' thumb={require('../../images/state.png')  }  extra={<Badge  text={data ? data.pinNum:0}  overflowCount={20} />} multipleLine wrap>
					拼单状态
				</Item>

			</List>
		)
	}
}
export default MessageList;