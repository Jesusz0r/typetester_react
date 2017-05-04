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
						'lineHeight': 1,
						'letterSpacing': 0
					}
				},
				{
					'styles': {
						'fontFamily': 'Open Sans',
						'fontSize': 12,
						'fontWeight': '400',
						'fontStyle': 'normal',
						'fontVariant': 'normal',
						'lineHeight': 1,
						'letterSpacing': 0
					}
				},
				{
					'styles': {
						'fontFamily': 'Lato',
						'fontSize': 12,
						'fontWeight': '400',
						'fontStyle': 'normal',
						'fontVariant': 'normal',
						'lineHeight': 1,
						'letterSpacing': 0
					}
				}
			]
		};

		this._changeWeight = this._changeWeight.bind(this);
		this._makeItalic = this._makeItalic.bind(this);
		this._textAlign = this._textAlign.bind(this);
		this._textSize = this._textSize.bind(this);
		this._lineHeight = this._lineHeight.bind(this);
		this._fontSpacing = this._fontSpacing.bind(this);
	}

	render() {
		return (
			<div className="font-container">
				<h1>Font Container</h1>

				<FontComponent
					fonts={this.state.fonts}
					changeWeight={this._changeWeight}
					textAlign={this._textAlign}
					makeItalic={this._makeItalic}
					textSize={this._textSize}
					lineHeight={this._lineHeight}
					fontSpacing={this._fontSpacing}
				/>;
			</div>
		);
	}

	_changeWeight(index, weight) {
		const newState = [].concat(this.state.fonts);
		const newStyle = Object.assign({}, this.state.fonts[index].styles);
		newStyle.fontWeight === weight ? newStyle.fontWeight = '400' : newStyle.fontWeight = weight;
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

	_fontSpacing(e, index) {
		const newState = [].concat(this.state.fonts);
		const newStyle = Object.assign({}, this.state.fonts[index].styles);
		newStyle.letterSpacing = Number(e.target.value);
		newState[index].styles = newStyle;

		this.setState({
			fonts: newState
		});
	}
}

export default FontContainer;