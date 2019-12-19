import {
	defaultAttrs,
	sizeOptions,
	positionXOptions,
	positionYOptions,
	backgroundRepeatOptions,
} from './constants';

import { TrashIcon, ArrowUpIcon, ArrowDownIcon } from './icons';

const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;

const {
	PanelBody,
	SelectControl,
	Button,
} = wp.components;

const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

class BGSettings extends Component {
	constructor( props ) {
		super( ...arguments );
		this.props = props;
	}

	// Find background image by index and update specified property
	onUpdateBackgroundProperty( index, property, value ) {
		const { bgImages = [], setAttributes } = this.props;
		setAttributes( {
			bgImages: Object.assign( [ ...bgImages ], {
				[ index ]: {
					...bgImages[ index ],
					[ property ]: value,
				},
			} ),
		} );
	}

	onRemoveBackground( index ) {
		const { bgImages = [], setAttributes } = this.props;
		setAttributes( {
			bgImages: bgImages.filter( function( item, currentIndex ) {
				return currentIndex !== index;
			} ),
		} );
	}

	isFirst( index ) {
		const { bgImages = [] } = this.props;
		return bgImages.length > 0 && index === 0;
	}

	isLast( index ) {
		const { bgImages = [] } = this.props;
		return bgImages.length > 0 && index === bgImages.length - 1;
	}

	onMoveUp( index ) {
		const { bgImages = [], setAttributes } = this.props;
		const backgroundImage = [ ...bgImages ];
		if ( backgroundImage.length > 1 && ! this.isFirst( index ) ) {
			[ backgroundImage[ index - 1 ], backgroundImage[ index ] ] = [ backgroundImage[ index ], backgroundImage[ index - 1 ] ];
		}
		setAttributes( {
			bgImages: backgroundImage,
		} );
	}

	onMoveDown( index ) {
		const { bgImages = [], setAttributes } = this.props;
		const backgroundImage = [ ...bgImages ];
		if ( backgroundImage.length > 1 && ! this.isLast( index ) ) {
			[ backgroundImage[ index ], backgroundImage[ index + 1 ] ] = [ backgroundImage[ index + 1 ], backgroundImage[ index ] ];
		}
		setAttributes( {
			bgImages: backgroundImage,
		} );
	}

	render() {
		const { bgImages = [], setAttributes } = this.props;
		return (
			<PanelBody title={ __( 'Background Images' ) } initialOpen={ false } >
				<Button
					isPrimary
					onClick={ ( e ) => {
						e.stopPropagation();
						setAttributes( {
							bgImages: [
								...bgImages,
								defaultAttrs,
							],
						} );
					} }
				>
					Add
				</Button>
				<hr />
				{ bgImages.map( function( bgImage, index ) {
					const {
						url,
						backgroundSize,
						backgroundPositionX,
						backgroundPositionY,
						backgroundRepeat,
					} = bgImage;
					const ALLOWED_MEDIA_TYPES = [ 'image' ];
					return (
						<Fragment key={ index }>
							<div className="ubc-background-image-controll">
								<div className="ubc-background-image-controll__preview">
									<div className="ubc-background-image-controll__preview-top">
										<img src={ url } alt={ `Background ${ index }` } />
									</div>
									<div className="ubc-background-image-controll__preview-bottom">
										<MediaUploadCheck>
											<MediaUpload
												onSelect={ ( media ) => {
													this.onUpdateBackgroundProperty( index, 'url', media.url );
												} }
												allowedTypes={ ALLOWED_MEDIA_TYPES }
												render={ ( { open } ) => (
													<Button onClick={ open } isPrimary>
														Upload Image
													</Button>
												) }
											/>
										</MediaUploadCheck>
										<Button onClick={ () => {
											this.onRemoveBackground( index );
										} }>
											<TrashIcon />
										</Button>
										<Button
											onClick={ () => {
												this.onMoveUp( index );
											} }
											disabled={ this.isFirst( index ) }
										>
											<ArrowUpIcon />
										</Button>
										<Button
											onClick={ () => {
												this.onMoveDown( index );
											} }
											disabled={ this.isLast( index ) }
										>
											<ArrowDownIcon />
										</Button>
									</div>
								</div>
								<div className="ubc-background-image-controll__settings">
									<SelectControl
										label="Position X"
										value={ backgroundPositionX }
										options={ positionXOptions }
										onChange={ ( position ) => {
											this.onUpdateBackgroundProperty( index, 'backgroundPositionX', position );
										} }
									/>
									<SelectControl
										label="Position Y"
										value={ backgroundPositionY }
										options={ positionYOptions }
										onChange={ ( position ) => {
											this.onUpdateBackgroundProperty( index, 'backgroundPositionY', position );
										} }
									/>
									<SelectControl
										label="Size"
										value={ backgroundSize }
										options={ sizeOptions }
										onChange={ ( size ) => {
											this.onUpdateBackgroundProperty( index, 'backgroundSize', size );
										} }
									/>
									<SelectControl
										label="Repeat"
										value={ backgroundRepeat }
										options={ backgroundRepeatOptions }
										onChange={ ( repeat ) => {
											this.onUpdateBackgroundProperty( index, 'backgroundRepeat', repeat );
										} }
									/>
								</div>
							</div>
							<hr />
						</Fragment>
					);
				}.bind( this ) ) }
			</PanelBody>
		);
	}
}

const generateBackgroundStyle = ( bgImages = [] ) => {
	const arrayOfBackgroundImageAsString = bgImages.map( function( bg ) {
		const {
			url,
			backgroundSize,
			backgroundPositionX,
			backgroundPositionY,
			backgroundRepeat,
		} = bg;
		return `url(${ url }) ${ backgroundPositionY } ${ backgroundPositionX }/${ backgroundSize } ${ backgroundRepeat }`;
	} );
	return { background: arrayOfBackgroundImageAsString.join( ',' ) };
};

export {
	BGSettings,
	generateBackgroundStyle,
};
