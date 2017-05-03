import React from 'react';

const FontComponent = (props) => {
	const { fonts } = props;

	const renderFont = () => {
		return fonts.map((font, index) => {
			return (
				<div className="individual-font" key={font.styles.fontFamily} style={font.styles}>
					<div className="editor">
						<i onClick={() => props.makeBold(index, font.styles.fontFamily)}>Editor</i>
					</div>

					<h3>{font.styles.fontFamily}</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere felis sit amet
						vehicula congue. Aliquam maximus maximus ante vel varius. Suspendisse at urna nec arcu ultrices
						ultricies. Etiam sed libero nec diam viverra maximus. Phasellus hendrerit eros volutpat sodales
						sagittis. Cras eget arcu ac velit elementum scelerisque sed in ante. Morbi ut dolor interdum,
						porta nisi at, rhoncus nisi.</p>
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