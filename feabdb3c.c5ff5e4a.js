(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{374:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(383)),s={title:"include/sleepy_discord/rate_limiter.h"},c={unversionedId:"reference/Files/rate__limiter_8h",id:"reference/Files/rate__limiter_8h",isDocsHomePage:!1,title:"include/sleepy_discord/rate_limiter.h",description:"Namespaces",source:"@site/docs/reference/Files/rate__limiter_8h.md",slug:"/reference/Files/rate__limiter_8h",permalink:"/sleepy-discord/docs/reference/Files/rate__limiter_8h",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/permissions.h",permalink:"/sleepy-discord/docs/reference/Files/permissions_8h"},next:{title:"sleepy_discord/sd_error.cpp",permalink:"/sleepy-discord/docs/reference/Files/sd__error_8cpp"}},l=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Source code",id:"source-code",children:[]}],o={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"namespaces"},"Namespaces"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(i.b)("h2",{id:"classes"},"Classes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"class"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Classes/class_sleepy_discord_1_1_route"},"SleepyDiscord::Route")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"struct"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_rate_limiter"},"SleepyDiscord::RateLimiter")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"struct"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_rate_limiter_1_1_rate_limit"},"SleepyDiscord::RateLimiter::RateLimit")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"class"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Classes/class_sleepy_discord_1_1_rate_limiter_1_1_handle_await_after_request"},"SleepyDiscord::RateLimiter::HandleAwaitAfterRequest")))))),Object(i.b)("h2",{id:"source-code"},"Source code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include "client.h"\n\nnamespace SleepyDiscord {\n\n    class Route {\n    public:\n        using Bucket = std::string;\n        Route(const std::string route, const std::initializer_list<std::string>& _values = {});\n        Route(const char* route);\n        inline const std::string& url() {\n            return _url;\n        }\n        const Bucket bucket(RequestMethod method);\n        inline operator const std::string&() {\n            return url();\n        }\n\n    private:\n        const std::string path;\n        std::string _url;\n        const std::initializer_list<std::string>& values;\n\n        //for the snowflake part, discord class should do\n        std::unordered_map<std::string, Snowflake<User>::RawType>\n            majorParameters = {\n            { "channel.id", {} },\n            { "guild.id"  , {} },\n            { "webhook.id", {} }\n        };\n    };\n\n    //note: all rate limiter data needs to be handled in a sync manner\n    template<class Client>\n    struct RateLimiter {\n        std::atomic<bool> isGlobalRateLimited = { false };\n        std::atomic<time_t> nextRetry = { 0 };\n        void limitBucket(const Route::Bucket& bucket, const std::string& xBucket, time_t timestamp)  {\n            std::lock_guard<std::mutex> lock(mutex);\n            buckets[bucket] = xBucket;\n            limits[xBucket].nextTry = timestamp;\n        }\n        \n        const time_t getLiftTime(Route::Bucket& bucket, const time_t& currentTime) {\n            if (isGlobalRateLimited && currentTime < nextRetry)\n                    return nextRetry;\n            isGlobalRateLimited = false;\n            std::lock_guard<std::mutex> lock(mutex);\n            auto actualBucket = buckets.find(bucket);\n            if (actualBucket != buckets.end()) {\n                auto rateLimit = limits.find(actualBucket->second);\n                if (rateLimit != limits.end()) {\n                    if (currentTime < rateLimit->second.nextTry)\n                        return rateLimit->second.nextTry;\n                    limits.erase(rateLimit);\n                }\n                buckets.erase(actualBucket);\n            }\n            return 0;\n        }\n        //isLimited also returns the next Retry timestamp\n\n        struct RateLimit {\n        public:\n            void doWaitingRequest()  {\n                if (awaitingRequest.empty())\n                    return;\n                RateLimiter& rateLimiter = awaitingRequest.front().client.rateLimiter;\n\n                std::lock_guard<std::mutex> lock(rateLimiter.mutex);\n                awaitingRequest.remove_if([](typename Client::Request& request){\n                    request.client.postTask(request);\n                    return true;\n                });\n            }\n        private:\n            friend RateLimiter;\n            std::list<typename Client::Request> awaitingRequest;\n            time_t nextTry = 0; // to do for v8, make this seconds\n            static constexpr int defaultLimit = 1;\n            int limit = defaultLimit;\n            int remaining = defaultLimit;\n            Timer expireTimer;\n        };\n\n        class HandleAwaitAfterRequest {\n        public:\n            HandleAwaitAfterRequest(RateLimiter::RateLimit& limit)\n                : rateLimit(limit) {}\n            ~HandleAwaitAfterRequest() {\n                rateLimit.doWaitingRequest();\n            }\n        private:\n            RateLimiter::RateLimit& rateLimit;\n        };\n\n    private:\n        std::unordered_map<Route::Bucket, std::string> buckets;\n        std::unordered_map<std::string, RateLimit> limits;\n        std::mutex mutex;\n    };\n}\n')),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  4 September 2021 at 02:04:50 UTC"))}u.isMDXComponent=!0},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?a.a.createElement(b,c(c({ref:t},o),{},{components:n})):a.a.createElement(b,c({ref:t},o))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var o=2;o<i;o++)s[o]=n[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);