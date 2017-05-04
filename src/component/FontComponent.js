import React from 'react';

const FontComponent = (props) => {
	const { fonts } = props;

	const renderFont = () => {
		return fonts.map((font, index) => {
			return (
				<div className="individual-font" key={font.styles.fontFamily}>
					<div className="editor">
						<i onClick={() => props.makeBold(index)}>Bold</i>
						<i onClick={() => props.makeItalic(index)}>Italic</i>
						<i onClick={() => props.textAlign(index, 'center')}>Center</i>
						<i onClick={() => props.textAlign(index, 'left')}>Left</i>
						<i onClick={() => props.textAlign(index, 'right')}>Right</i>
						<i>
							Font Size
							<input type="range" value={font.styles.fontSize} min="12" max="120" onChange={(e) => props.textSize(e, index)}/>
						</i>
						<i>
							Line Height
							<input type="range" value={font.styles.lineHeight} min="1" max="2" step="0.05" onChange={(e) => props.lineHeight(e, index)}/>
						</i>
					</div>

					<h3>{font.styles.fontFamily}</h3>
					<p style={font.styles}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere felis sit amet
						vehicula congue. Aliquam maximus maximus ante vel varius. Suspendisse at urna nec arcu ultrices
						ultricies. Etiam sed libero nec diam viverra maximus. Phasellus hendrerit eros volutpat sodales
						sagittis. Cras eget arcu ac velit elementum scelerisque sed in ante. Morbi ut dolor interdum,
						porta nisi at, rhoncus nisi.
					</p>
				</div>
			);
		});
	};

	return (
		<div>
			{renderFont()}
		</div>
	);
};

export default FontComponent;