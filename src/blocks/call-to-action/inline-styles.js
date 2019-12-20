export default function InlineStyles( props ) {
	const {
		blockId,
		titleColor,
		descColor,
		titleFontSize,
		descFontSize,
		ctaFontSize,
		ctaBtnVertPadding,
		ctaBtnHrPadding,
		ctaBorderStyle,
		ctaBorderWidth,
		ctaBorderRadius,
		ctaBtnLinkColor,
		ctaLinkHoverColor,
		ctaBgColor,
		ctaBgHoverColor,
		ctaBorderColor,
		ctaBorderhoverColor,
		blockVerticalPadding,
		blockHorizontalPadding,
	} = props.attributes;
	return (
		<style>
			{ `
				#ubc-cta-block-${ blockId }{
					padding: ${ blockVerticalPadding }px ${ blockHorizontalPadding }px;
				}
				#ubc-cta-block-${ blockId } .uagb-cta__title{
					color: ${ titleColor };
					font-size: ${ titleFontSize }px;
				}
				#ubc-cta-block-${ blockId } .uagb-cta__desc{
					color: ${ descColor };
					font-size: ${ descFontSize }px;
				}
				#ubc-cta-block-${ blockId } .uagb-cta__block-link{
					font-size: ${ ctaFontSize }px;
					padding: ${ ctaBtnVertPadding }px ${ ctaBtnHrPadding }px;
					border-style: ${ ctaBorderStyle };
					border-width: ${ ctaBorderWidth }px;
					border-radius: ${ ctaBorderRadius }px;
					border-color: ${ ctaBorderColor };
					color: ${ ctaBtnLinkColor };
					background-color: ${ ctaBgColor };
				}
				#ubc-cta-block-${ blockId } .uagb-cta__block-link:hover{
					color: ${ ctaLinkHoverColor };
					background-color: ${ ctaBgHoverColor };
					border-color: ${ ctaBorderhoverColor };
				}
			` }
		</style>
	);
}

