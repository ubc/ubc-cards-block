const {
	RichText,
} = wp.blockEditor;

const {
	createBlock,
} = wp.blocks;

const { Component } = wp.element;

const { __ } = wp.i18n;

class Title extends Component {
	render() {
		const {
			attributes,
			setAttributes,
			props,
		} = this.props;
		let output = '';

		if ( setAttributes !== 'not_set' ) {
			output = (
				<RichText
					tagName={ attributes.titleTag }
					placeholder={ __( 'Write a Heading' ) }
					value={ attributes.ctaTitle }
					className="uagb-cta__title"
					onChange={ ( value ) => setAttributes( { ctaTitle: value } ) }
					multiline={ false }
					onMerge={ props.mergeBlocks }
					unstableOnSplit={ props.insertBlocksAfter ?
						( before, after, ...blocks ) => {
							setAttributes( { content: before } );
							props.insertBlocksAfter( [
								...blocks,
								createBlock( 'core/paragraph', { content: after } ),
							] );
						} :
						undefined
					}
					onRemove={ () => props.onReplace( [] ) }
				/>
			);
		} else {
			output = (
				<RichText.Content
					tagName={ attributes.titleTag }
					value={ attributes.ctaTitle }
					className="uagb-cta__title"
				/>
			);
		}
		return output;
	}
}

export default Title;

