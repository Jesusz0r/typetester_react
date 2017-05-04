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
						'fontVariant': 'normal',
						'lineHeight': 1
					}
				},
				{
					'styles': {
						'fontFamily': 'Open Sans',
						'fontSize': 12,
						'fontWeight': '400',
						'fontStyle': 'normal',
						'fontVariant': 'normal',
						'lineHeight': 1
					}
				},
				{
					'styles': {
						'fontFamily': 'Lato',
						'fontSize': 12,
						'fontWeight': '400',
						'fontStyle': 'normal',
						'fontVariant': 'normal',
						'lineHeight': 1
					}
				}
			]
		};

		this._makeBold = this._makeBold.bind(this);
		this._makeItalic = this._makeItalic.bind(this);
		this._textAlign = this._textAlign.bind(this);
		this._textSize = this._textSize.bind(this);
		this._lineHeight = this._lineHeight.bind(this);
	}

	render() {
		return (
			<div className="font-container">
				<h1>Font Container</h1>

				<FontComponent
					fonts={this.state.fonts}
					makeBold={this._makeBold}
					textAlign={this._textAlign}
					makeItalic={this._makeItalic}
					textSize={this._textSize}
					lineHeight={this._lineHeight}
				/>;
			</div>
		);
	}

	_makeBold(index) {
		const newState = [].concat(this.state.fonts);
		const newStyle = Object.assign({}, this.state.fonts[index].styles);
		newStyle.fontWeight === '400' ? newStyle.fontWeight = '700' : newStyle.fontWeight = '400';
		newState[index].styles = newStyle;

		this.setState({
			fonts: newState
		});
	}

	_makeItalic(index) {
		const newState = [].concat(this.state.fonts);
		const newStyle = Object.assign({}, this.state.fonts[index].styles);
		newStyle.fontStyle === 'normal' ? newStyle.fontStyle = 'italic' : newStyle.fontStyle = 'normal';
		newState[index].styles = newStyle;

		this.setState({
			fonts: newState
		});
	}

	_textAlign(index, direction) {
		const newState = [].concat(this.state.fonts);
		const newStyle = Object.assign({}, this.state.fonts[index].styles);
		newStyle.textAlign === direction ? newStyle.textAlign = 'left' : newStyle.textAlign = direction;
		newState[index].styles = newStyle;

		this.setState({
			fonts: newState
		});
	}

	_textSize(e, index) {
		const newState = [].concat(this.state.fonts);
		const newStyle = Object.assign({}, this.state.fonts[index].styles);
		newStyle.fontSize = Number(e.target.value);
		newState[index].styles = newStyle;

		this.setState({
			fonts: newState
		});
	}

	_lineHeight(e, index) {
		const newState = [].concat(this.state.fonts);
		const newStyle = Object.assign({}, this.state.fonts[index].styles);
		newStyle.lineHeight = Number(e.target.value);
		newState[index].styles = newStyle;

		this.setState({
			fonts: newState
		});
	}
}

export default FontContainer;