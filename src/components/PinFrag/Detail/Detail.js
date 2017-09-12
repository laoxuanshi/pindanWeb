import React from 'react';
import {List ,Card, WingBlank, WhiteSpace } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import {Link} from 'react-router';

import  './Detail.scss';

class Detail extends React.Component {
	constructor(...arg) {
		super(...arg);
	}
	render() {
		let {data} = this.props;

		return (
			<div size="lg" style={{height:document.documentElement.clientHeight-99,overflow:'auto'}}>
				<WhiteSpace size="lg" />
				<WingBlank>
					<Card>
					<Card.Header
						title={
							<div>
								<div>{data.creator}
								<img src={data.sex === 'male' ?require('../../../images/male.png') :require('../../../images/female.png') } className="sex"></img>
								</div>
								<div className="unvi">extra</div>
							</div>
						}
						thumb={data.creatorAvaUrl}
						extra={
							<div>
								<div>{data.type}</div>
								<div>{data.prog}</div>
							</div>
						}
						/>
					<WhiteSpace size="lg" />
					<Card.Body>
						<div>{data.detail}</div>
					</Card.Body>

					<WhiteSpace size="lg" />

					<Card.Body>
						<div className="ce">
							<img className="content-img" src={data.imgurl}/>
						</div>
						<div>所在城市：{data.city}</div>
						<div>购物地址：{data.address}</div>
						<div>截止时间：{data.endtime}</div>
						<div>参与人员：{data.joiner}</div>
					</Card.Body>
					<Card.Body>
						<div className="parent">
							<div className="child">
								<img src={require('../../../images/share.png')  }></img>
								分享
							</div>
							<div className="child" >
								<img src={require('../../../images/comment.png')  }></img>
								评论
							</div>
							<div className="child" >
								<img src={require('../../../images/chat.png')  }></img>
								聊天
							</div>
						</div>
					</Card.Body>
					<WhiteSpace size="lg" />
					<Card.Body>
						<div>评论</div>
						<List ref='mylist'  className="my-list" >
							{data.comment ? data.comment.map(function(item){
								return(
									<Item align="top" key={item.id} thumb={item.commentorAvaUrl} multipleLine wrap>
										<Brief>
											<div>{item.commentor}</div>
											<div>{item.commentcontent}</div>
										</Brief>
									</Item>
								)
							}) : ''}

						</List>
					</Card.Body>
				</Card>
				</WingBlank>

				<WhiteSpace size="lg" />
			</div>
		)
	}
}
export default Detail;