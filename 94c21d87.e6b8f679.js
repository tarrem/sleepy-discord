(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(381)),i={title:"SleepyDiscord::BaseAudioSource"},o={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_base_audio_source",id:"reference/Classes/struct_sleepy_discord_1_1_base_audio_source",isDocsHomePage:!1,title:"SleepyDiscord::BaseAudioSource",description:"Inherited by SleepyDiscord::BasicAudioSourceForContainers",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_base_audio_source.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_base_audio_source",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_base_audio_source",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::BaseAudioOutput",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_base_audio_output"},next:{title:"SleepyDiscord::BaseComponent",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_base_component"}},u=[{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"enum SpeakingFlag",id:"enum-speakingflag",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function BaseAudioSource",id:"function-baseaudiosource",children:[]},{value:"function BaseAudioSource",id:"function-baseaudiosource-1",children:[]},{value:"function isOpusEncoded",id:"function-isopusencoded",children:[]},{value:"function ~BaseAudioSource",id:"function-baseaudiosource-2",children:[]},{value:"function read",id:"function-read",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable type",id:"variable-type",children:[]},{value:"variable speakingFlag",id:"variable-speakingflag",children:[]}]}],l={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inherited by ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_basic_audio_source_for_containers"},"SleepyDiscord::BasicAudioSourceForContainers")),Object(c.b)("h2",{id:"public-types-documentation"},"Public Types Documentation"),Object(c.b)("h3",{id:"enum-speakingflag"},"enum SpeakingFlag"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Enumerator"),Object(c.b)("th",{parentName:"tr",align:null},"Value"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Microphone"),Object(c.b)("td",{parentName:"tr",align:null},"1u << 0u"),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Soundshare"),Object(c.b)("td",{parentName:"tr",align:null},"1u << 1u"),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Priority"),Object(c.b)("td",{parentName:"tr",align:null},"1u << 2u"),Object(c.b)("td",{parentName:"tr",align:null})))),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-baseaudiosource"},"function BaseAudioSource"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline BaseAudioSource()\n")),Object(c.b)("h3",{id:"function-baseaudiosource-1"},"function BaseAudioSource"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline explicit BaseAudioSource(\n    AudioSourceType typ\n)\n")),Object(c.b)("h3",{id:"function-isopusencoded"},"function isOpusEncoded"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual bool isOpusEncoded()\n")),Object(c.b)("h3",{id:"function-baseaudiosource-2"},"function ~BaseAudioSource"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"virtual ~BaseAudioSource() =default\n")),Object(c.b)("h3",{id:"function-read"},"function read"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline virtual void read(\n    AudioTransmissionDetails & ,\n    int16_t *& ,\n    std::size_t & \n)\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_audio_source#function-read"},"SleepyDiscord::AudioSource::read"),", ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_audio_source#function-read"},"SleepyDiscord::AudioSource::read")),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-type"},"variable type"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"const AudioSourceType type;\n")),Object(c.b)("h3",{id:"variable-speakingflag"},"variable speakingFlag"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"SpeakingFlag speakingFlag = Microphone;\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  3 June 2021 at 00:09:03 UTC"))}s.isMDXComponent=!0},381:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||c;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);