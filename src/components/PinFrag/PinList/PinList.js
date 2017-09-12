import React from 'react';
import ReactDOM from 'react-dom';
import {List,RefreshControl} from 'antd-mobile';
import {Link} from 'react-router';
const Item = List.Item;
const Brief = Item.Brief;

import './PinList.scss';
class PinList extends React.Component {
    render() {
        let {data} = this.props;

        return (
            <div ref='mylistdiv' onScroll={()=>this.props.scroll(ReactDOM.findDOMNode(this.refs.mylistdiv),ReactDOM.findDOMNode(this.refs.mylistdiv))}
                 style={{height:document.documentElement.clientHeight-99,overflow:'auto'}}>
                <List ref='mylist'  className="my-list" >
                    {Array.isArray(data) ? data.map(function(item){
                        return(
                            <Link key={item.id} to={`/pindetail/${item.id}`} style={{display:'block'}} >
                                <Item align="top" thumb={item.imgurl} multipleLine wrap>
                                    <span className={item.prog === '拼单中' ?  'pin-prog-success' : 'pin-prog-on'}>&nbsp;{ item.prog }&nbsp;</span>
                                    {item.creator}<img src={item.sex === 'male' ?require('../../../images/male.png') :require('../../../images/female.png') } className="sex"></img>
                                    <Brief>
                                        <div>{item.address}</div>
                                        <div>{item.createtime.substring(0,10)}</div>
                                    </Brief>
                                </Item>
                                <div className="pin-detail">{item.detail}</div>
                            </Link>
                        )
                    }) : ''}

                </List>
            </div>
        )
    }
}
export default PinList;