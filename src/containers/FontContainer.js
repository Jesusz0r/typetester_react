import React, { Component } from 'react';
import FontComponent from '../component/FontComponent';

class FontContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fonts: [
				{
					'styles': {
						'fontFamily': 'Roboto',
						'fontSize': 12,
						'fontWeight': '400',
						'fontStyle': 'normal',
						'fontVariant': 'normal'
					}
				},
				{
					'styles': {
						'fontFamily': 'Open Sans',
						'fontSize': 12,
						'fontWeight': '400',
						'fontStyle': 'normal',
						'fontVariant': 'normal'
					}
				},
				{
					'styles': {
						'fontFamily': 'Lato',
						'fontSize': 12,
						'fontWeight': '400',
						'fontStyle': 'normal',
						'fontVariant': 'normal'
					}
				}
			]
		};

		this._makeBold = this._makeBold.bind(this);
	}

	render() {
		return (
			<div className="font-container">
				<h1>Font Container</h1>

				<FontComponent fonts={this.state.fonts} makeBold={this._makeBold} />;
			</div>
		);
	}

	_makeBold(index) {
		const newState = [].concat(this.state.fonts);
		const newStyle = Object.assign({}, newState[index].styles);
		newStyle.fontWeight === '400' ? newStyle.fontWeight = '700' : newStyle.fontWeight = '400';
		newState[index].styles = newStyle;

		this.setState({
			fonts: newState
		});
	}
}

export default FontContainer;