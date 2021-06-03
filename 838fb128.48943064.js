(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{222:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),c=(t(0),t(381)),i={title:"SleepyDiscord::json::OptionalTypeHelper"},l={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper",isDocsHomePage:!1,title:"SleepyDiscord::json::OptionalTypeHelper",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper.md",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_optional_type_helper",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::json::NullableTypeHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_nullable_type_helper"},next:{title:"SleepyDiscord::json::PairImpl",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_pair_impl"}},a=[{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[]},{value:"function fromType",id:"function-fromtype",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function isType",id:"function-istype",children:[]}]}],p={toc:a};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null," ",Object(c.b)("a",{parentName:"p",href:"#detailed-description"},"More...")),Object(c.b)("h2",{id:"detailed-description"},"Detailed Description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"template <class Optional ,\ntemplate< class... > class TypeHelper>\nstruct SleepyDiscord::json::OptionalTypeHelper;\n")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-totype"},"function toType"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Optional toType(\n    const Value & value\n)\n")),Object(c.b)("h3",{id:"function-fromtype"},"function fromType"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Value fromType(\n    const Optional & value,\n    Value::AllocatorType & allocator\n)\n")),Object(c.b)("h3",{id:"function-empty"},"function empty"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"static inline bool empty(\n    const Optional & value\n)\n")),Object(c.b)("h3",{id:"function-istype"},"function isType"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"static inline bool isType(\n    const Value & value\n)\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  3 June 2021 at 00:09:04 UTC"))}s.isMDXComponent=!0},381:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,y=u["".concat(i,".").concat(f)]||u[f]||d[f]||c;return t?o.a.createElement(y,l(l({ref:n},p),{},{components:t})):o.a.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);