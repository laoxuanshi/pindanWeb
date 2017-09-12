import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';

class App extends React.Component {
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		state: state
	}
}
export default connect(mapStateToProps)(App)