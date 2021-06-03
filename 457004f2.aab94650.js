(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(381)),o={title:"SleepyDiscord::AppCommand::InteractionData"},i={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_app_command_1_1_interaction_data",id:"reference/Classes/struct_sleepy_discord_1_1_app_command_1_1_interaction_data",isDocsHomePage:!1,title:"SleepyDiscord::AppCommand::InteractionData",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_app_command_1_1_interaction_data.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_app_command_1_1_interaction_data",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_app_command_1_1_interaction_data",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::AppCommand",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_app_command"},next:{title:"SleepyDiscord::AppCommand::InteractionData::Option",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_app_command_1_1_interaction_data_1_1_option"}},p=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function InteractionData",id:"function-interactiondata",children:[]},{value:"function InteractionData",id:"function-interactiondata-1",children:[]},{value:"function InteractionData",id:"function-interactiondata-2",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable ID",id:"variable-id",children:[]},{value:"variable name",id:"variable-name",children:[]},{value:"variable options",id:"variable-options",children:[]},{value:"variable customID",id:"variable-customid",children:[]},{value:"variable componentType",id:"variable-componenttype",children:[]}]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inherits from ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-interactiondata"},"function InteractionData"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"InteractionData() =default\n")),Object(c.b)("h3",{id:"function-interactiondata-1"},"function InteractionData"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"InteractionData(\n    json::Value & json\n)\n")),Object(c.b)("h3",{id:"function-interactiondata-2"},"function InteractionData"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"InteractionData(\n    const nonstd::string_view & json\n)\n")),Object(c.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::::, "", ::OPTIONAL_FIELD ,\n    json::pair &::::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::::, "", ::OPTIONAL_FIELD ,\n    json::pair &::::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::EnumTypeHelper > &::::, "", ::OPTIONAL_FIELD \n)\n')),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-id"},"variable ID"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< AppCommand > ID;\n")),Object(c.b)("h3",{id:"variable-name"},"variable name"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string name;\n")),Object(c.b)("h3",{id:"variable-options"},"variable options"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::vector< Option > options;\n")),Object(c.b)("h3",{id:"variable-customid"},"variable customID"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string customID;\n")),Object(c.b)("h3",{id:"variable-componenttype"},"variable componentType"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ComponentType componentType;\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  3 June 2021 at 00:09:03 UTC"))}s.isMDXComponent=!0},381:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);