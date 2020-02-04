const {
	RichText,
} = wp.blockEditor;

const { __ } = wp.i18n;

const {
	createBlock,
} = wp.blocks;

const { Component } = wp.element;

class Description extends Component {
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
					tagName="p"
					value={ attributes.description }
					placeholder={ __( 'Write a Description' ) }
					className="uagb-cta__desc"
					onChange={ ( value ) => setAttributes( { description: value } ) }
					onMerge={ props.mergeBlocks }
					unstableOnSplit={
						props.insertBlocksAfter ?
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
					tagName="p"
					value={ attributes.description }
					className="uagb-cta__desc"
				/>
			);
		}
		return output;
	}
}

export default Description;

