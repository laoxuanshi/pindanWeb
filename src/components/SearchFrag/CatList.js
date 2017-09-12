import React from 'react';
import { Grid  } from 'antd-mobile';
import {Link} from 'react-router';

import './CatList.scss'

class CatList extends React.Component {
	constructor() {
		super();
	}

	render() {
		let {catdata} = this.props;

		return (
			<Grid data={catdata} columnNum={3} />
		)
	}
}
export default CatList;