const { __ } = wp.i18n

import classnames from "classnames"

class CallToAction extends React.Component {

	render() {

		const { attributes,setAttributes } = this.props

		let ctaBtnClass = "uagb-cta__block-link uagb-cta__button-link-wrapper uagb-cta-typeof-"+ attributes.ctaType

		let target ="_self"
		let rel ="noopener noreferrer"
		if( attributes.ctaTarget ){
			target ="_blank"
		}

		var link = "javascript:void(0)" 
		if( setAttributes == "not_set" ){
			link = attributes.ctaLink
		}
		return (			
			<div className = "uagb-cta__link-wrapper uagb-cta__block-link-style">
				
				{  (attributes.ctaType === "button" || attributes.ctaType === "text") && ( 
					<div className = "uagb-cta__button-wrapper">
						<a href = {link} className = { ctaBtnClass } target= {target} rel= {rel} >
							<span className = "uagb-cta__link-content-inner">    
								<span >{attributes.ctaText}</span>
							</span>
						</a>
					</div>
				)
				}
			</div>            
		)
	}
}

export default CallToAction
