import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FontContainer from './containers/FontContainer';

import styles from './styles/main.scss';

class App extends Component {
	render() {
		return (
			<nav id="header">
				<h1>Hello World!</h1>
				<FontContainer />
			</nav>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));