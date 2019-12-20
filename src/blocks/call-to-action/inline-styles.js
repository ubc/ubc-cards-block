export default function InlineStyles( props ) {
	const {
		blockId,
		titleColor,
		descColor,
		ctaBtnLinkColor,
		ctaLinkHoverColor,
		ctaBgColor,
		ctaBgHoverColor,
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
				}
				#ubc-cta-block-${ blockId } .uagb-cta__desc{
					color: ${ descColor };
				}
				#ubc-cta-block-${ blockId } .uagb-cta__block-link{
					color: ${ ctaBtnLinkColor };
					background-color: ${ ctaBgColor };
				}
				#ubc-cta-block-${ blockId } .uagb-cta__block-link:hover{
					color: ${ ctaLinkHoverColor };
					background-color: ${ ctaBgHoverColor };
				}
			` }
		</style>
	);
}

