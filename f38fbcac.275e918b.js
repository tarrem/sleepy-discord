(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{357:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(381)),o={title:"SleepyDiscord::EditWebhookParams"},s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_edit_webhook_params",id:"reference/Classes/struct_sleepy_discord_1_1_edit_webhook_params",isDocsHomePage:!1,title:"SleepyDiscord::EditWebhookParams",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_edit_webhook_params.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_edit_webhook_params",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_edit_webhook_params",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::EditMessageParams",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_edit_message_params"},next:{title:"SleepyDiscord::Embed",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed"}},i=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable content",id:"variable-content",children:[]},{value:"variable embeds",id:"variable-embeds",children:[]},{value:"variable allowedMentions",id:"variable-allowedmentions",children:[]},{value:"variable components",id:"variable-components",children:[]}]}],l={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inherits from ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(c.b)("p",null,"Inherited by ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_interaction_app_command_callback_data"},"SleepyDiscord::InteractionAppCommandCallbackData"),", ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_web_hook_params"},"SleepyDiscord::WebHookParams")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD \n)\n')),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-content"},"variable content"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string content;\n")),Object(c.b)("h3",{id:"variable-embeds"},"variable embeds"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::vector< Embed > embeds;\n")),Object(c.b)("h3",{id:"variable-allowedmentions"},"variable allowedMentions"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"AllowedMentions allowedMentions;\n")),Object(c.b)("h3",{id:"variable-components"},"variable components"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::vector< std::shared_ptr< BaseComponent > > components;\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  3 June 2021 at 00:09:03 UTC"))}p.isMDXComponent=!0},381:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||c;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);