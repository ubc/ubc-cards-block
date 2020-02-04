import React from 'react';
/**
 * BLOCK: Call To Action
 */

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Title from './components/Title';
import Description from './components/Description';
import CtaPositionClasses from './classes';
import CTA from './components/CTA';
import { BGSettings, generateBackgroundStyle } from './components/background-images';
import InlineStyles from './inline-styles';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	TextControl,
} from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';

class UAGBCallToAction extends Component {
	/**
	 * Function Name: toggleTarget.
	 */
	toggleTarget() {
		const { ctaTarget } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { ctaTarget: ! ctaTarget } );
	}

	render() {
		const { className, setAttributes, attributes } = this.props;
		// Setup the attributes.
		const {
			textAlign,
			titleColor,
			descColor,
			titleTag,
			ctaPosition,
			buttonAlign,
			ctaType,
			ctaText,
			ctaLink,
			ctaTarget,
			ctaBtnLinkColor,
			ctaBgHoverColor,
			ctaBgColor,
			stack,
			ctaLinkHoverColor,
			bgImages,
			blockId,
			blockVerticalPadding,
			blockHorizontalPadding,
		} = attributes;

		if ( blockId === 'not_set' ) {
			setAttributes( {
				blockId: this.props.clientId,
			} );
		}

		// Get object of background image style
		const bgStyles = generateBackgroundStyle( bgImages );

		// CTA settings.
		const ctaSettings = (
			<PanelBody title={ __( 'Button' ) } initialOpen={ false }>
				<SelectControl
					label={ __( 'Type' ) }
					value={ ctaType }
					onChange={ ( value ) => setAttributes( { ctaType: value } ) }
					options={ [
						{ value: 'none', label: __( 'None' ) },
						{ value: 'text', label: __( 'Text' ) },
						{ value: 'button', label: __( 'Button' ) },
						{ value: 'all', label: __( 'Complete Box' ) },
					] }
				/>
				{ ( ctaType === 'text' || ctaType === 'button' ) &&
					<Fragment>
						<TextControl
							label={ __( 'Text' ) }
							value={ ctaText }
							onChange={ ( value ) => setAttributes( { ctaText: value } ) }
						/>
					</Fragment>
				}
				{ ( ctaType !== 'none' ) &&
					<Fragment>
						<TextControl
							label={ __( 'Link' ) }
							value={ ctaLink }
							onChange={ ( value ) => setAttributes( { ctaLink: value } ) }
						/>
						<ToggleControl
							label={ __( 'Open in new Window' ) }
							checked={ ctaTarget }
							onChange={ () => this.toggleTarget() }
						/>
					</Fragment>
				}
				{ ( ctaType === 'text' ) && <TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
					activeClass="active-tab"
					tabs={ [
						{
							name: 'normal',
							title: __( 'Normal' ),
							className: 'uagb-normal-tab',
						},
						{
							name: 'hover',
							title: __( 'Hover' ),
							className: 'uagb-hover-tab',
						},
					] }>
					{
						( tabName ) => {
							let ctaTextTab;
							if ( 'normal' === tabName.name ) {
								ctaTextTab = ctaTxtColor;
							} else {
								ctaTextTab = ctaTxtHoverColor;
							}
							return <div>{ ctaTextTab }</div>;
						}
					}
				</TabPanel>
				}

				{ ( ctaType === 'button' ) &&
					<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
						activeClass="active-tab"
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal' ),
								className: 'uagb-normal-tab',
							},
							{
								name: 'hover',
								title: __( 'Hover' ),
								className: 'uagb-focus-tab',
							},
						] }>
						{
							( tabName ) => {
								let tabout;
								if ( 'normal' === tabName.name ) {
									tabout = ctaNormalSettings;
								} else {
									tabout = ctaHoverSettings;
								}
								return <div>{ tabout }</div>;
							}
						}
					</TabPanel>
				}
			</PanelBody>
		);

		const ctaNormalSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( 'Text Color' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={ { backgroundColor: ctaBtnLinkColor } } ></span></span></p>
				<ColorPalette
					value={ ctaBtnLinkColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( 'Background Color' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={ { backgroundColor: ctaBgColor } } ></span></span></p>
				<ColorPalette
					value={ ctaBgColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBgColor: colorValue } ) }
					allowReset
				/>
			</Fragment>
		);

		const ctaHoverSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( 'Text Hover Color' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={ { backgroundColor: ctaLinkHoverColor } } ></span></span></p>
				<ColorPalette
					value={ ctaLinkHoverColor }
					onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( 'Background Hover Color' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={ { backgroundColor: ctaBgHoverColor } } ></span></span></p>
				<ColorPalette
					value={ ctaBgHoverColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBgHoverColor: colorValue } ) }
					allowReset
				/>
			</Fragment>
		);

		const ctaTxtColor = (
			<Fragment>
				<p className="uagb-setting-label">{ __( 'CTA Text Color' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={ { backgroundColor: ctaBtnLinkColor } } ></span></span></p>
				<ColorPalette
					value={ ctaBtnLinkColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ) }
					allowReset
				/>
			</Fragment>
		);

		const ctaTxtHoverColor = (
			<Fragment>
				<p className="uagb-setting-label">{ __( 'CTA Text Hover Color' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={ { backgroundColor: ctaLinkHoverColor } } ></span></span></p>
				<ColorPalette
					value={ ctaLinkHoverColor }
					onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
					allowReset
				/>
			</Fragment>
		);

		// Typography settings.
		const TypographySettings = (
			<PanelBody title={ __( 'Content' ) } initialOpen={ false }>
				<h2>{ __( 'Heading' ) }</h2>
				<SelectControl
					label={ __( 'Tag' ) }
					value={ titleTag }
					onChange={ ( value ) => setAttributes( { titleTag: value } ) }
					options={ [
						{ value: 'h1', label: __( 'H1' ) },
						{ value: 'h2', label: __( 'H2' ) },
						{ value: 'h3', label: __( 'H3' ) },
						{ value: 'h4', label: __( 'H4' ) },
						{ value: 'h5', label: __( 'H5' ) },
						{ value: 'h6', label: __( 'H6' ) },
					] }
				/>
				<p className="uagb-setting-label">{ __( 'Color' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={ { backgroundColor: titleColor } } ></span></span></p>
				<ColorPalette
					value={ titleColor }
					onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
					allowReset
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( 'Description' ) }</h2>
				<p className="uagb-setting-label">{ __( 'Color' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={ { backgroundColor: descColor } } ></span></span></p>
				<ColorPalette
					value={ descColor }
					onChange={ ( colorValue ) => setAttributes( { descColor: colorValue } ) }
					allowReset
				/>
			</PanelBody>
		);

		const layouts = (
			<PanelBody title={ __( 'Layout' ) } initialOpen={ false }>
				<RangeControl
					label="Block Vertical Padding"
					value={ blockVerticalPadding }
					onChange={ ( value ) => {
						setAttributes( {
							blockVerticalPadding: value,
						} );
					} }
					min={ 0 }
					max={ 50 }
				/>
				<RangeControl
					label="Block Horizontal Padding"
					value={ blockHorizontalPadding }
					onChange={ ( value ) => {
						setAttributes( {
							blockHorizontalPadding: value,
						} );
					} }
					min={ 0 }
					max={ 50 }
				/>
				<SelectControl
					label={ __( 'Button Position' ) }
					value={ ctaPosition }
					onChange={ ( value ) => setAttributes( { ctaPosition: value } ) }
					options={ [
						{ value: 'right', label: __( 'Normal' ) },
						{ value: 'below-title', label: __( 'Stack' ) },
					] }
				/>
				{ ( ctaPosition === 'right' ) &&
					<SelectControl
						label={ __( 'Stack on' ) }
						value={ stack }
						options={ [
							{ value: 'none', label: __( 'None' ) },
							{ value: 'tablet', label: __( 'Tablet' ) },
							{ value: 'mobile', label: __( 'Mobile' ) },
						] }
						help={ __( 'Note: Choose on what breakpoint the CTA button will stack.' ) }
						onChange={ ( value ) => setAttributes( { stack: value } ) }
					/>
				}

				{ ( ctaPosition && ctaPosition === 'right' ) && <SelectControl
					label={ __( 'Verticle Alignment' ) }
					value={ buttonAlign }
					onChange={ ( value ) => setAttributes( { buttonAlign: value } ) }
					options={ [
						{ value: 'top', label: __( 'Top' ) },
						{ value: 'middle', label: __( 'Middle' ) },
					] }
				/>
				}
			</PanelBody>
		);
		// Global Controls.
		const inspectControl = (
			<InspectorControls>
				{ ( ctaType !== 'all' ) && ( ctaType !== 'none' ) && layouts }
				{ TypographySettings }
				{ ctaSettings }
				<BGSettings
					bgImages={ bgImages }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
		);

		// Get icon/Image components.
		const isCta = <CTA attributes={ attributes } setAttributes={ setAttributes } />;
		// Get description components.
		const desc = (
			<div className="uagb-cta-text-wrap">
				{ <Description attributes={ attributes } setAttributes={ setAttributes } props={ this.props } /> }
			</div>
		);

		// Get Title components.
		const titleText = (
			<div className="uagb-cta__title-wrap">
				{ <Title attributes={ attributes } setAttributes={ setAttributes } props={ this.props } /> }
			</div>
		);

		const output = (
			<div className={ classnames(
				'uagb-cta__content-wrap',
				...CtaPositionClasses( attributes ),
			) }>
				<div className="uagb-cta__left-right-wrap">

					<div className="uagb-cta__content">

						{ ctaPosition === 'below-title' &&
							<Fragment>
								{ titleText }
								{ desc }
								{ isCta }
							</Fragment>
						}

						{ ( ctaPosition === 'right' ) &&
							<Fragment>
								{ titleText }
								{ desc }
							</Fragment>
						}

					</div>

					{ ( ctaPosition === 'right' ) &&
								isCta
					}
				</div>
			</div>
		);

		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ textAlign }
						onChange={ ( value ) => setAttributes( { textAlign: value } ) }
					/>
				</BlockControls>

				{ inspectControl }
				<div
					className={ classnames(
						className,
						'uagb-cta__outer-wrap'
					) }
					id={ `ubc-cta-block-${ this.props.clientId }` }
					style={ bgStyles }
				>
					{ ( ctaType === 'all' ) &&
						<Fragment>
							<div className="uagb-cta__block-link-wrap uagb-cta__link-to-all" rel="noopener noreferrer" >
								{ output }
							</div>
						</Fragment>
					}
					{ ( ctaType !== 'all' ) && output }
				</div>
				<InlineStyles attributes={ {
					...attributes,
					blockId: this.props.clientId,
				} } />
			</Fragment>
		);
	}
}

export default UAGBCallToAction;
