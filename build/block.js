!function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=l.apply(null,n);r&&e.push(r)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);a(2),a(1);var n=a(0),l=a.n(n);const o=wp.blockEditor.RichText,r=wp.blocks.createBlock,c=wp.element.Component,s=wp.i18n.__;var i=class extends c{render(){const e=this.props,t=e.attributes,a=e.setAttributes,n=e.props;let l="";return l="not_set"!==a?React.createElement(o,{tagName:t.titleTag,placeholder:s("Write a Heading"),value:t.ctaTitle,className:"uagb-cta__title",onChange:e=>a({ctaTitle:e}),multiline:!1,onMerge:n.mergeBlocks,unstableOnSplit:n.insertBlocksAfter?(e,t,...l)=>{a({content:e}),n.insertBlocksAfter([...l,r("core/paragraph",{content:t})])}:void 0,onRemove:()=>n.onReplace([])}):React.createElement(o.Content,{tagName:t.titleTag,value:t.ctaTitle,className:"uagb-cta__title"}),l}};const u=wp.blockEditor.RichText,b=wp.i18n.__,m=wp.blocks.createBlock,p=wp.element.Component;var g=class extends p{render(){const e=this.props,t=e.attributes,a=e.setAttributes,n=e.props;let l="";return l="not_set"!==a?React.createElement(u,{tagName:"p",value:t.description,placeholder:b("Write a Description"),className:"uagb-cta__desc",onChange:e=>a({description:e}),onMerge:n.mergeBlocks,unstableOnSplit:n.insertBlocksAfter?(e,t,...l)=>{a({content:e}),n.insertBlocksAfter([...l,m("core/paragraph",{content:t})])}:void 0,onRemove:()=>n.onReplace([])}):React.createElement(u.Content,{tagName:"p",value:t.description,className:"uagb-cta__desc"}),l}};var d=function(e){let t="";return t+="uagb-cta__block ",t+="uagb-cta__icon-position-"+e.ctaPosition+" ","right"===e.ctaPosition&&(t+="uagb-cta__content-right "),"right"===e.ctaPosition&&"none"!==e.stack&&(t+="uagb-cta__content-stacked-"+e.stack+" "),"below-title"!==e.ctaPosition&&(t+="uagb-cta__button-valign-"+e.buttonAlign+" "),"text"!==e.ctaType&&"button"!==e.ctaType&&(t+="uagb-cta__button-type-none "),[t]};const R=wp.element.Component;var v=class extends R{render(){const e=this.props,t=e.attributes,a=e.setAttributes,n=" uagb-cta__block-link uagb-cta__button-link-wrapper uagb-cta-typeof-"+t.ctaType;let l="_self";t.ctaTarget&&(l="_blank");let o="javascript:void(0)";return"not_set"===a&&(o=t.ctaLink),React.createElement("div",{className:"uagb-cta__link-wrapper uagb-cta__block-link-style"},("button"===t.ctaType||"text"===t.ctaType)&&React.createElement("div",{className:"uagb-cta__button-wrapper"},React.createElement("a",{href:o,className:n,target:l,rel:"noopener noreferrer"},React.createElement("span",{className:"uagb-cta__link-content-inner"},React.createElement("span",null,t.ctaText)))))}};const h={url:"https://via.placeholder.com/400x400",backgroundSize:"cover",backgroundPositionX:"center",backgroundPositionY:"center",backgroundRepeat:"no-repeat"},E=[{label:"Auto",value:"auto"},{label:"Cover",value:"cover"},{label:"Contain",value:"contain"}],k=[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],f=[{label:"Top",value:"top"},{label:"Center",value:"center"},{label:"Right",value:"right"}],y=[{label:"No Repeat",value:"no-repeat"},{label:"Repeat",value:"repeat"},{label:"Repeat X",value:"repeat-x"},{label:"Repeat y",value:"repeat-y"}],_=()=>React.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},React.createElement("polygon",{points:"9,4.5 3.3,10.1 4.8,11.5 9,7.3 13.2,11.5 14.7,10.1 "})),C=()=>React.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},React.createElement("polygon",{points:"9,13.5 14.7,7.9 13.2,6.5 9,10.7 4.8,6.5 3.3,7.9 "})),w=()=>React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"12",viewBox:"0 0 10 12"},React.createElement("g",{fill:"currentColor"},React.createElement("path",{d:"M7 0H3v2H0v2h10V2H7zM7 10H3V6H1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6H7v4z"})));function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){P(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const x=wp.i18n.__,T=wp.element,O=T.Fragment,S=T.Component,H=wp.components,A=H.PanelBody,j=H.SelectControl,I=H.Button,z=wp.blockEditor,$=z.MediaUpload,L=z.MediaUploadCheck;class F extends S{constructor(e){super(...arguments),this.props=e}onUpdateBackgroundProperty(e,t,a){const n=this.props,l=n.bgImages,o=void 0===l?[]:l;(0,n.setAttributes)({bgImages:Object.assign([...o],{[e]:B({},o[e],{[t]:a})})})}onRemoveBackground(e){const t=this.props,a=t.bgImages,n=void 0===a?[]:a;(0,t.setAttributes)({bgImages:n.filter((function(t,a){return a!==e}))})}isFirst(e){const t=this.props.bgImages;return(void 0===t?[]:t).length>0&&0===e}isLast(e){const t=this.props.bgImages,a=void 0===t?[]:t;return a.length>0&&e===a.length-1}onMoveUp(e){const t=this.props,a=t.bgImages,n=void 0===a?[]:a,l=t.setAttributes,o=[...n];if(o.length>1&&!this.isFirst(e)){var r=[o[e],o[e-1]];o[e-1]=r[0],o[e]=r[1]}l({bgImages:o})}onMoveDown(e){const t=this.props,a=t.bgImages,n=void 0===a?[]:a,l=t.setAttributes,o=[...n];if(o.length>1&&!this.isLast(e)){var r=[o[e+1],o[e]];o[e]=r[0],o[e+1]=r[1]}l({bgImages:o})}render(){const e=this.props,t=e.bgImages,a=void 0===t?[]:t,n=e.setAttributes;return React.createElement(A,{title:x("Background Images"),initialOpen:!1},React.createElement(I,{isPrimary:!0,onClick:e=>{e.stopPropagation(),n({bgImages:[...a,h]})}},"Add"),React.createElement("hr",null),a.map(function(e,t){const a=e.url,n=e.backgroundSize,l=e.backgroundPositionX,o=e.backgroundPositionY,r=e.backgroundRepeat;return React.createElement(O,{key:t},React.createElement("div",{className:"ubc-background-image-controll"},React.createElement("div",{className:"ubc-background-image-controll__preview"},React.createElement("div",{className:"ubc-background-image-controll__preview-bottom"},React.createElement(L,null,React.createElement($,{onSelect:e=>{this.onUpdateBackgroundProperty(t,"url",e.url)},allowedTypes:["image"],render:({open:e})=>React.createElement(O,null,React.createElement("div",{className:"ubc-background-image-controll__preview-top"},React.createElement("button",{className:"ubc-background-image-controll__upload",onClick:e},React.createElement("img",{src:a,alt:`Background ${t}`}))),React.createElement(I,{onClick:e,isPrimary:!0},"Upload Image"))})),React.createElement(I,{onClick:()=>{this.onRemoveBackground(t)}},React.createElement(w,null)),React.createElement(I,{onClick:()=>{this.onMoveUp(t)},disabled:this.isFirst(t)},React.createElement(_,null)),React.createElement(I,{onClick:()=>{this.onMoveDown(t)},disabled:this.isLast(t)},React.createElement(C,null)))),React.createElement("div",{className:"ubc-background-image-controll__settings"},React.createElement(j,{label:"Position X",value:l,options:k,onChange:e=>{this.onUpdateBackgroundProperty(t,"backgroundPositionX",e)}}),React.createElement(j,{label:"Position Y",value:o,options:f,onChange:e=>{this.onUpdateBackgroundProperty(t,"backgroundPositionY",e)}}),React.createElement(j,{label:"Size",value:n,options:E,onChange:e=>{this.onUpdateBackgroundProperty(t,"backgroundSize",e)}}),React.createElement(j,{label:"Repeat",value:r,options:y,onChange:e=>{this.onUpdateBackgroundProperty(t,"backgroundRepeat",e)}}))),React.createElement("hr",null))}.bind(this)))}}const M=(e=[])=>{return{background:e.map((function(e){const t=e.url,a=e.backgroundSize,n=e.backgroundPositionX;return`url(${t}) ${e.backgroundPositionY} ${n}/${a} ${e.backgroundRepeat}`})).join(",")}};function D(e){const t=e.attributes,a=t.blockId,n=t.titleColor,l=t.descColor,o=t.titleFontSize,r=t.descFontSize,c=t.ctaFontSize,s=t.ctaBtnVertPadding,i=t.ctaBtnHrPadding,u=t.ctaBorderStyle,b=t.ctaBorderWidth,m=t.ctaBorderRadius,p=t.ctaBtnLinkColor,g=t.ctaLinkHoverColor,d=t.ctaBgColor,R=t.ctaBgHoverColor,v=t.ctaBorderColor,h=t.ctaBorderhoverColor,E=t.blockVerticalPadding,k=t.blockHorizontalPadding;return React.createElement("style",null,`\n\t\t\t\t#ubc-cta-block-${a}{\n\t\t\t\t\tpadding: ${E}px ${k}px;\n\t\t\t\t}\n\t\t\t\t#ubc-cta-block-${a} .uagb-cta__title{\n\t\t\t\t\tcolor: ${n};\n\t\t\t\t\tfont-size: ${o}px;\n\t\t\t\t}\n\t\t\t\t#ubc-cta-block-${a} .uagb-cta__desc{\n\t\t\t\t\tcolor: ${l};\n\t\t\t\t\tfont-size: ${r}px;\n\t\t\t\t}\n\t\t\t\t#ubc-cta-block-${a} .uagb-cta__block-link{\n\t\t\t\t\tfont-size: ${c}px;\n\t\t\t\t\tpadding: ${s}px ${i}px;\n\t\t\t\t\tborder-style: ${u};\n\t\t\t\t\tborder-width: ${b}px;\n\t\t\t\t\tborder-radius: ${m}px;\n\t\t\t\t\tborder-color: ${v};\n\t\t\t\t\tcolor: ${p};\n\t\t\t\t\tbackground-color: ${d};\n\t\t\t\t}\n\t\t\t\t#ubc-cta-block-${a} .uagb-cta__block-link:hover{\n\t\t\t\t\tcolor: ${g};\n\t\t\t\t\tbackground-color: ${R};\n\t\t\t\t\tborder-color: ${h};\n\t\t\t\t}\n\t\t\t`)}function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){W(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const X=wp.i18n.__,Y=wp.blockEditor,q=Y.AlignmentToolbar,G=Y.BlockControls,J=Y.ColorPalette,K=Y.InspectorControls,Q=wp.components,Z=Q.PanelBody,ee=Q.SelectControl,te=Q.RangeControl,ae=Q.TabPanel,ne=Q.ToggleControl,le=Q.TextControl,oe=wp.element,re=oe.Component,ce=oe.Fragment;var se=class extends re{toggleTarget(){const e=this.props.attributes.ctaTarget;(0,this.props.setAttributes)({ctaTarget:!e})}render(){const e=this.props,t=e.className,a=e.setAttributes,n=e.attributes,o=n.textAlign,r=n.titleColor,c=n.descColor,s=n.titleTag,u=n.titleFontSize,b=n.descFontSize,m=n.ctaPosition,p=n.buttonAlign,R=n.ctaType,h=n.ctaText,E=n.ctaLink,k=n.ctaTarget,f=n.ctaFontSize,y=(n.contentWidth,n.ctaBtnLinkColor),_=n.ctaBgHoverColor,C=n.ctaBgColor,w=n.ctaBtnVertPadding,N=n.ctaBtnHrPadding,B=n.ctaBorderStyle,P=n.ctaBorderColor,x=n.ctaBorderhoverColor,T=n.ctaBorderWidth,O=n.ctaBorderRadius,S=n.stack,H=n.ctaLinkHoverColor,A=n.bgImages,j=n.blockId,I=n.blockVerticalPadding,z=n.blockHorizontalPadding;"not_set"===j&&a({blockId:this.props.clientId});const $=M(A),L=React.createElement(Z,{title:X("Button"),initialOpen:!1},React.createElement(ee,{label:X("Type"),value:R,onChange:e=>a({ctaType:e}),options:[{value:"none",label:X("None")},{value:"text",label:X("Text")},{value:"button",label:X("Button")},{value:"all",label:X("Complete Box")}]}),("text"===R||"button"===R)&&React.createElement(ce,null,React.createElement(le,{label:X("Text"),value:h,onChange:e=>a({ctaText:e})}),React.createElement(te,{label:"Font Size",value:f,onChange:e=>{a({ctaFontSize:e})},min:10,max:30})),"none"!==R&&React.createElement(ce,null,React.createElement(le,{label:X("Link"),value:E,onChange:e=>a({ctaLink:e})}),React.createElement(ne,{label:X("Open in new Window"),checked:k,onChange:()=>this.toggleTarget()})),"button"===R&&React.createElement(ce,null,React.createElement("hr",{className:"uagb-editor__separator"}),React.createElement("h2",null,X("Button Padding (px)")),React.createElement(te,{label:X("Vertical Padding"),className:"uagb-margin-control",value:w,onChange:e=>a({ctaBtnVertPadding:e}),min:0,max:40,beforeIcon:"",allowReset:!0}),React.createElement(te,{label:X("Horizontal Padding"),className:"uagb-margin-control",value:N,onChange:e=>a({ctaBtnHrPadding:e}),min:0,max:40,beforeIcon:"",allowReset:!0}),React.createElement("hr",{className:"uagb-editor__separator"}),React.createElement("h2",null,X("Button Border")),React.createElement(ee,{label:X("Style"),value:B,onChange:e=>a({ctaBorderStyle:e}),options:[{value:"none",label:X("None")},{value:"solid",label:X("Solid")},{value:"double",label:X("Double")},{value:"dashed",label:X("Dashed")},{value:"dotted",label:X("Dotted")}]}),"none"!==B&&React.createElement(ce,null,React.createElement(te,{label:X("Width"),value:T,onChange:e=>a({ctaBorderWidth:e}),min:0,max:10,beforeIcon:"",allowReset:!0}),React.createElement(te,{label:X("Rounded Corner"),value:O,onChange:e=>a({ctaBorderRadius:e}),min:0,max:100,beforeIcon:"",allowReset:!0}))),"text"===R&&React.createElement(ae,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:X("Normal"),className:"uagb-normal-tab"},{name:"hover",title:X("Hover"),className:"uagb-hover-tab"}]},e=>{let t;return t="normal"===e.name?Y:Q,React.createElement("div",null,t)}),"button"===R&&React.createElement(ae,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:X("Normal"),className:"uagb-normal-tab"},{name:"hover",title:X("Hover"),className:"uagb-focus-tab"}]},e=>{let t;return t="normal"===e.name?V:W,React.createElement("div",null,t)})),V=React.createElement(ce,null,React.createElement("p",{className:"uagb-setting-label"},X("Text Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:y}}))),React.createElement(J,{value:y,onChange:e=>a({ctaBtnLinkColor:e}),allowReset:!0}),React.createElement("p",{className:"uagb-setting-label"},X("Background Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:C}}))),React.createElement(J,{value:C,onChange:e=>a({ctaBgColor:e}),allowReset:!0}),"none"!==B&&React.createElement(ce,null,React.createElement("p",{className:"uagb-setting-label"},X("Border Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:P}}))),React.createElement(J,{value:P,onChange:e=>a({ctaBorderColor:e}),allowReset:!0}))),W=React.createElement(ce,null,React.createElement("p",{className:"uagb-setting-label"},X("Text Hover Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:H}}))),React.createElement(J,{value:H,onChange:e=>a({ctaLinkHoverColor:e}),allowReset:!0}),React.createElement("p",{className:"uagb-setting-label"},X("Background Hover Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:_}}))),React.createElement(J,{value:_,onChange:e=>a({ctaBgHoverColor:e}),allowReset:!0}),"none"!==B&&React.createElement(ce,null,React.createElement("p",{className:"uagb-setting-label"},X("Border Hover Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:x}}))),React.createElement(J,{value:x,onChange:e=>a({ctaBorderhoverColor:e}),allowReset:!0}))),Y=React.createElement(ce,null,React.createElement("p",{className:"uagb-setting-label"},X("CTA Text Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:y}}))),React.createElement(J,{value:y,onChange:e=>a({ctaBtnLinkColor:e}),allowReset:!0})),Q=React.createElement(ce,null,React.createElement("p",{className:"uagb-setting-label"},X("CTA Text Hover Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:H}}))),React.createElement(J,{value:H,onChange:e=>a({ctaLinkHoverColor:e}),allowReset:!0})),oe=React.createElement(Z,{title:X("Content"),initialOpen:!1},React.createElement("h2",null,X("Heading")),React.createElement(ee,{label:X("Tag"),value:s,onChange:e=>a({titleTag:e}),options:[{value:"h1",label:X("H1")},{value:"h2",label:X("H2")},{value:"h3",label:X("H3")},{value:"h4",label:X("H4")},{value:"h5",label:X("H5")},{value:"h6",label:X("H6")}]}),React.createElement(te,{label:"Font Size",value:u,onChange:e=>{a({titleFontSize:e})},min:14,max:50}),React.createElement("p",{className:"uagb-setting-label"},X("Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:r}}))),React.createElement(J,{value:r,onChange:e=>a({titleColor:e}),allowReset:!0}),React.createElement("hr",{className:"uagb-editor__separator"}),React.createElement("h2",null,X("Description")),React.createElement(te,{label:"Font Size",value:b,onChange:e=>{a({descFontSize:e})},min:10,max:30}),React.createElement("p",{className:"uagb-setting-label"},X("Color"),React.createElement("span",{className:"components-base-control__label"},React.createElement("span",{className:"component-color-indicator",style:{backgroundColor:c}}))),React.createElement(J,{value:c,onChange:e=>a({descColor:e}),allowReset:!0})),re=React.createElement(Z,{title:X("Layout"),initialOpen:!1},React.createElement(te,{label:"Block Vertical Padding",value:I,onChange:e=>{a({blockVerticalPadding:e})},min:0,max:50}),React.createElement(te,{label:"Block Horizontal Padding",value:z,onChange:e=>{a({blockHorizontalPadding:e})},min:0,max:50}),React.createElement(ee,{label:X("Button Position"),value:m,onChange:e=>a({ctaPosition:e}),options:[{value:"right",label:X("Normal")},{value:"below-title",label:X("Stack")}]}),"right"===m&&React.createElement(ee,{label:X("Stack on"),value:S,options:[{value:"none",label:X("None")},{value:"tablet",label:X("Tablet")},{value:"mobile",label:X("Mobile")}],help:X("Note: Choose on what breakpoint the CTA button will stack."),onChange:e=>a({stack:e})}),m&&"right"===m&&React.createElement(ee,{label:X("Verticle Alignment"),value:p,onChange:e=>a({buttonAlign:e}),options:[{value:"top",label:X("Top")},{value:"middle",label:X("Middle")}]})),se=React.createElement(K,null,"all"!==R&&"none"!==R&&re,oe,L,React.createElement(F,{bgImages:A,setAttributes:a})),ie=React.createElement(v,{attributes:n,setAttributes:a}),ue=React.createElement("div",{className:"uagb-cta-text-wrap"},React.createElement(g,{attributes:n,setAttributes:a,props:this.props})),be=React.createElement("div",{className:"uagb-cta__title-wrap"},React.createElement(i,{attributes:n,setAttributes:a,props:this.props})),me=React.createElement("div",{className:l()("uagb-cta__content-wrap",...d(n))},React.createElement("div",{className:"uagb-cta__left-right-wrap"},React.createElement("div",{className:"uagb-cta__content"},"below-title"===m&&React.createElement(ce,null,be,ue,ie),"right"===m&&React.createElement(ce,null,be,ue)),"right"===m&&ie));return React.createElement(ce,null,React.createElement(G,{key:"controls"},React.createElement(q,{value:o,onChange:e=>a({textAlign:e})})),se,React.createElement("div",{className:l()(t,"uagb-cta__outer-wrap"),id:`ubc-cta-block-${this.props.clientId}`,style:$},"all"===R&&React.createElement(ce,null,React.createElement("div",{className:"uagb-cta__block-link-wrap uagb-cta__link-to-all",rel:"noopener noreferrer"},me)),"all"!==R&&me),React.createElement(D,{attributes:U({},n,{blockId:this.props.clientId})}))}};var ie={blockVerticalPadding:{type:"number",default:"0"},blockHorizontalPadding:{type:"number",default:"0"},ctaTitle:{source:"html",selector:"h1,h2,h3,h4,h5,h6",default:"Card Title Here"},description:{source:"html",selector:"p",default:"Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."},textAlign:{type:"string",default:"left"},titleColor:{type:"string"},descColor:{type:"string"},ctaPosition:{type:"string",default:"right"},titleTag:{type:"string",default:"h3"},titleFontSize:{type:"number",default:"20"},descFontSize:{type:"number",default:"16"},blockId:{type:"string",default:"not_set"},buttonAlign:{type:"string",default:"middle"},ctaTarget:{type:"boolean",default:!1},ctaType:{type:"string",default:"button"},ctaText:{type:"string",default:"Read More"},ctaLink:{type:"string",default:"#"},ctaFontSize:{type:"number",default:"16"},contentWidth:{type:"number",default:"70"},ctaBtnLinkColor:{type:"string",default:"#333"},ctaLinkHoverColor:{type:"string",default:""},ctaBgColor:{type:"string",default:"transparent"},ctaBgHoverColor:{type:"string",default:"transparent"},ctaBorderColor:{type:"string",default:"#333"},ctaBorderhoverColor:{type:"string",default:""},ctaBorderStyle:{type:"string",default:"solid"},ctaBtnVertPadding:{type:"number",default:10},ctaBtnHrPadding:{type:"number",default:14},ctaBorderWidth:{type:"number",default:1},ctaBorderRadius:{type:"number",default:0},stack:{type:"string",default:"tablet"},ctaLeftSpace:{type:"number",default:5},ctaRightSpace:{type:"number",default:5},bgImages:{type:"array",default:[]}};const ue=wp.i18n.__,be=wp.blocks.registerBlockType,me=wp.element.Fragment;be("ubc/call-to-action",{title:"UBC Card Block",description:"A title, brief description, a button, and optional background images for you to display a brief overview of your content",icon:"feedback",keywords:[ue("cta"),ue("call to action")],category:"layout",attributes:ie,edit:se,save(e){const t=e.attributes,a=t.ctaPosition,n=t.blockId,o=t.ctaType,r=t.ctaLink,c=t.ctaTarget,s=t.className,u=t.ctaTitle,b=t.description,m=t.bgImages,p=React.createElement(v,{attributes:e.attributes,setAttributes:"not_set"}),R=M(m),h=React.createElement(me,null,""!==b&&React.createElement("div",{className:"uagb-cta-text-wrap"},React.createElement(g,{attributes:e.attributes,setAttributes:"not_set"}))),E=React.createElement(me,null,""!==u&&React.createElement("div",{className:"uagb-cta__title-wrap"},React.createElement(i,{attributes:e.attributes,setAttributes:"not_set"}))),k=React.createElement(me,null,React.createElement("div",{className:l()("uagb-cta__content-wrap",...d(e.attributes))},React.createElement("div",{className:"uagb-cta__left-right-wrap"},"left"==a&&p,React.createElement("div",{className:"uagb-cta__content"},"above-title"==a&&React.createElement(me,null,p,E,h),"below-title"==a&&React.createElement(me,null,E,h,p),("left"==a||"right"==a)&&React.createElement(me,null,E,h)),"right"==a&&p)));let f="";return c&&(f="_blank"),React.createElement(me,null,React.createElement("div",{className:l()(s,"uagb-cta__outer-wrap"),id:`ubc-cta-block-${n}`,style:R},"all"===o&&React.createElement(me,null,React.createElement("a",{href:r,className:"uagb-cta__block-link-wrap uagb-cta__link-to-all",target:f,rel:"noopener noreferrer"},k)),"all"!==o&&k),React.createElement(D,{attributes:e.attributes}))}})}]);