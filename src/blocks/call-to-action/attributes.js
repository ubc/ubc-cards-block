/**
 * BLOCK: Call To Action - Attributes
 */

const attributes = {
	blockVerticalPadding: {
		type: 'number',
		default: '0',
	},
	blockHorizontalPadding: {
		type: 'number',
		default: '0',
	},
	ctaTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: 'Card Title Here',
	},
	description: {
		source: 'html',
		selector: 'p',
		default: 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	textAlign: {
		type: 'string',
		default: 'left',
	},
	titleColor: {
		type: 'string',
	},
	descColor: {
		type: 'string',
	},
	ctaPosition: {
		type: 'string',
		default: 'below-title',
	},
	titleTag: {
		type: 'string',
		default: 'h3',
	},
	blockId: {
		type: 'string',
		default: 'not_set',
	},
	buttonAlign: {
		type: 'string',
		default: 'middle',
	},
	ctaTarget: {
		type: 'boolean',
		default: false,
	},
	ctaType: {
		type: 'string',
		default: 'button',
	},
	ctaText: {
		type: 'string',
		default: 'Read More',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	contentWidth: {
		type: 'number',
		default: '70',
	},
	ctaBtnLinkColor: {
		type: 'string',
		default: '#000000',
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '#000000',
	},
	ctaBgColor: {
		type: 'string',
		default: '#cd2653',
	},
	ctaBgHoverColor: {
		type: 'string',
		default: '#6d6d6d',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	bgImages: {
		type: 'array',
		default: [],
	},
};

export default attributes;
