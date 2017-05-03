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
						'fontWeight': 400,
						'fontStyle': 'normal',
						'fontVariant': 'normal'
					}
				},
				{
					'styles': {
						'fontFamily': 'Open Sans',
						'fontSize': 12,
						'fontWeight': 400,
						'fontStyle': 'normal',
						'fontVariant': 'normal'
					}
				},
				{
					'styles': {
						'fontFamily': 'Lato',
						'fontSize': 12,
						'fontWeight': 400,
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
		const newState = this.state.fonts.filter((currFont) => {
			return currFont.styles.fontFamily !== this.state.fonts[index].styles.fontFamily;
		});

		const newFontStyles = this.state.fonts[index];
		console.log(newFontStyles);
		newFontStyles.styles.fontWeight === 400 ? newFontStyles.styles.fontWeight = 700 : newFontStyles.styles.fontWeight = 400;
		newState.push(newFontStyles);

		this.setState({
			fonts: newState
		});
	}
}

export default FontContainer;