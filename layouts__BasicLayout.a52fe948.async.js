(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"3b/9":function(e,t,n){e.exports={"ant-select-auto-complete":"ant-select-auto-complete"}},"57a1":function(e,t,n){"use strict";var a=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("U2ji");a(n("dODS"));n("eUFe");var l=a(n("GIK5")),r=n("lD+o"),u=a(n("ZZRV")),o=n("XLjY"),c=a(n("kaFD")),d=a(n("ojHk")),f=a(n("2n1B")),i=a(n("h3zL")),s=function(e){var t=e.theme,n=e.layout,a=i.default.right;return"dark"===t&&"topmenu"===n&&(a="".concat(i.default.right,"  ").concat(i.default.dark)),u.default.createElement("div",{className:a},u.default.createElement(d.default,{className:"".concat(i.default.action," ").concat(i.default.search),placeholder:"\u7ad9\u5185\u641c\u7d22",defaultValue:"umi ui",options:[{label:u.default.createElement("a",{href:"https://umijs.org/zh/guide/umi-ui.html"},"umi ui"),value:"umi ui"},{label:u.default.createElement("a",{href:"next.ant.design"},"Ant Design"),value:"Ant Design"},{label:u.default.createElement("a",{href:"https://protable.ant.design/"},"Pro Table"),value:"Pro Table"},{label:u.default.createElement("a",{href:"https://prolayout.ant.design/"},"Pro Layout"),value:"Pro Layout"}]}),u.default.createElement(l.default,{title:"\u4f7f\u7528\u6587\u6863"},u.default.createElement("a",{target:"_blank",href:"https://pro.ant.design/docs/getting-started",rel:"noopener noreferrer",className:i.default.action},u.default.createElement(r.QuestionCircleOutlined,null))),u.default.createElement(c.default,null),!1,u.default.createElement(f.default,{className:i.default.action}))},m=(0,o.connect)(function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}})(s);t.default=m},"8Qte":function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("cO38")),u=a(n("ZZRV")),o=function(){var e=(0,u.useState)(0),t=(0,r.default)(e,2),n=t[0],a=t[1];return(0,u.useEffect)(function(){document.title="\u4f60\u70b9\u51fb\u4e86 ".concat(n,"\u6b21")}),u.default.createElement(u.Fragment,null,u.default.createElement("h1",null,n),u.default.createElement("button",{type:"button",onClick:function(){return a(n+1)}},"+"))},c=o;t.default=c},G3lK:function(e,t,n){e.exports={headerSearch:"antd-pro-components-header-search-index-headerSearch",input:"antd-pro-components-header-search-index-input",show:"antd-pro-components-header-search-index-show"}},HxMe:function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=l(n("cO38")),u=a(n("ZZRV"));function o(){var e=(0,u.useState)(0),t=(0,r.default)(e,2),n=t[0],a=t[1],l=(0,u.useState)(""),o=(0,r.default)(l,2),c=o[0],d=o[1],f=(0,u.useMemo)(function(){return 2*n},[n]);return u.default.createElement(u.Fragment,null,u.default.createElement("h1",null,n,"-",f),u.default.createElement("button",{type:"button",onClick:function(){return a(n+1)}},"\u589e\u52a0"),u.default.createElement("input",{value:c,onChange:function(e){return d(e.target.value)}}))}},"Iu/F":function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("zAuD")),u=l(n("cO38")),o=a(n("ZZRV")),c=n("Kvv/"),d={green:{foreground:"#000000",background:"green"},red:{foreground:"#ffffff",background:"red"}},f=o.default.createContext(d.green);function i(){var e=(0,o.useState)(d.green),t=(0,u.default)(e,2),n=t[0],a=t[1];return o.default.createElement(f.Provider,{value:n},o.default.createElement(s,{changeTheme:function(){return a(n===d.green?d.red:d.green)}}))}function s(e){return o.default.createElement(c.PageHeaderWrapper,{context:"xxx"},o.default.createElement(f.Consumer,null,function(e){return o.default.createElement("div",null,JSON.stringify(e))}),o.default.createElement(m,{onClick:e.changeTheme}))}function m(e){var t=(0,o.useContext)(f);return o.default.createElement("button",(0,r.default)({type:"button"},e,{style:{background:t.background,color:t.foreground}}),"I am styled by theme context!")}var p=i;t.default=p},Qgui:function(e,t,n){"use strict";n.r(t);n("6Pkr"),n("3b/9"),n("XRnn")},USpT:function(e,t,n){"use strict";n.r(t);var a=n("ZZRV"),l=n("Bn5y"),r=n("iczh"),u=n.n(r),o=n("B1rl"),c=n("1/6Y"),d=n("1kL3"),f=n("a7J8");function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e){"@babel/helpers - typeof";return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var m=c["default"].Option,p=c["default"];function h(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var g=function(e,t){var n,r=e.prefixCls,g=e.className,v=e.children,b=e.dataSource,y=Object(l["a"])(v),E=a["useRef"]();a["useImperativeHandle"](t,function(){return E.current}),1===y.length&&a["isValidElement"](y[0])&&!h(y[0])&&(n=y[0]);var k,O=function(){return n};return k=y.length&&h(y[0])?v:b?b.map(function(e){if(a["isValidElement"](e))return e;switch(s(e)){case"string":return a["createElement"](m,{key:e,value:e},e);case"object":var t=e.value;return a["createElement"](m,{key:t,value:t},e.text);default:throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}}):[],a["useEffect"](function(){Object(f["a"])(!("dataSource"in e),"AutoComplete","`dataSource` is deprecated, please use `options` instead."),Object(f["a"])(!n||!("size"in e),"AutoComplete","You need to control style self instead of setting `size` when using customize input.")},[]),a["createElement"](d["a"],null,function(t){var n=t.getPrefixCls,l=n("select",r);return a["createElement"](p,i({ref:E},Object(o["default"])(e,["dataSource"]),{prefixCls:l,className:u()(g,"".concat(l,"-auto-complete")),mode:c["default"].SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:O}),k)})},v=a["forwardRef"](g);v.Option=m,t["default"]=v},aqTk:function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("cO38")),u=a(n("ZZRV")),o=function(e){console.log("Parent\u6570\u636e\u6709\u53d8\u5316\u90fd\u4f1a\u8fdb\u6765");var t=(0,u.useState)(function(){return e.callback()}),n=(0,r.default)(t,2),a=n[0],l=n[1];return(0,u.useEffect)(function(){console.log("callback\u53d8\u5316\u7684\u65f6\u5019\u624d\u4f1a\u518d\u6b21\u6267\u884csetCount"),l(e.callback())},[e.callback]),u.default.createElement("div",null,a)},c=o;t.default=c},h3zL:function(e,t,n){e.exports={menu:"antd-pro-components-global-header-index-menu",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},kaFD:function(e,t,n){"use strict";var a=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("RI6L");var l=a(n("X85L"));n("cEK2");var r=a(n("ZJCc"));n("cn7g");var u=a(n("y3A3")),o=a(n("43Yg")),c=a(n("/tCh")),d=a(n("scpF")),f=a(n("O/V9")),i=a(n("8aBX")),s=n("lD+o"),m=a(n("ZZRV")),p=n("XLjY"),h=n("+UYe"),g=a(n("6Wvd")),v=a(n("h3zL")),b=function(e){function t(){var e,n;(0,o.default)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return n=(0,d.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(l))),n.onMenuClick=function(e){var t=e.key;if("logout"!==t)h.router.push("/account/".concat(t));else{var a=n.props.dispatch;a&&a({type:"login/logout"})}},n}return(0,i.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,n=void 0===t?{avatar:"",name:""}:t,a=e.menu,o=m.default.createElement(u.default,{className:v.default.menu,selectedKeys:[],onClick:this.onMenuClick},a&&m.default.createElement(u.default.Item,{key:"center"},m.default.createElement(s.UserOutlined,null),"\u4e2a\u4eba\u4e2d\u5fc3"),a&&m.default.createElement(u.default.Item,{key:"settings"},m.default.createElement(s.SettingOutlined,null),"\u4e2a\u4eba\u8bbe\u7f6e"),a&&m.default.createElement(u.default.Divider,null),m.default.createElement(u.default.Item,{key:"logout"},m.default.createElement(s.LogoutOutlined,null),"\u9000\u51fa\u767b\u5f55"));return n&&n.name?m.default.createElement(g.default,{overlay:o},m.default.createElement("span",{className:"".concat(v.default.action," ").concat(v.default.account)},m.default.createElement(r.default,{size:"small",className:v.default.avatar,src:n.avatar,alt:"avatar"}),m.default.createElement("span",{className:v.default.name},n.name))):m.default.createElement(l.default,{size:"small",style:{marginLeft:8,marginRight:8}})}}]),t}(m.default.Component),y=(0,p.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}})(b);t.default=y},mWGW:function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("cO38")),u=a(n("ZZRV")),o={count:0},c=function(e,t){switch(console.log(e,t),t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw new Error}},d=function(){var e=(0,u.useReducer)(c,o),t=(0,r.default)(e,2),n=t[0],a=t[1];return console.log(n,a),u.default.createElement(u.Fragment,null,u.default.createElement("span",null,n.count),u.default.createElement("button",{type:"button",onClick:function(){return a({type:"decrement"})}},"-"),u.default.createElement("button",{type:"button",onClick:function(){return a({type:"increment"})}},"+"))},f=d;t.default=f},maEh:function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("zAuD")),u=l(n("rXjv")),o=l(n("mK77"));n("qgWf");var c=l(n("7L1g"));n("s4M5");var d=l(n("xMvk")),f=a(n("Kvv/")),i=n("Yztb"),s=a(n("ZZRV")),m=n("+UYe"),p=n("XLjY"),h=n("lD+o"),g=l(n("HZnN")),v=l(n("57a1")),b=n("+n12"),y=l(n("mxmt")),E=s.default.createElement(c.default,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:s.default.createElement(d.default,{type:"primary"},s.default.createElement(m.Link,{to:"/user/login"},"Go Login"))}),k=function e(t){return t.map(function(t){var n=(0,o.default)({},t,{children:t.children?e(t.children):[]});return g.default.check(t.authority,n,null)})},O=s.default.createElement(f.DefaultFooter,{copyright:"2019 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1",links:[{key:"Ant Design Pro",title:"Ant Design Pro",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:s.default.createElement(h.GithubOutlined,null),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}]}),C=function(){return(0,b.isAntDesignPro)()?s.default.createElement(s.default.Fragment,null,O,s.default.createElement("div",{style:{padding:"0px 24px 24px",textAlign:"center"}},s.default.createElement("a",{href:"https://www.netlify.com",target:"_blank",rel:"noopener noreferrer"},s.default.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-color-bg.svg",width:"82px",alt:"netlify logo"})))):O},Z=function(e){var t=e.dispatch,n=e.children,a=e.settings,l=e.location,o=void 0===l?{pathname:"/"}:l;(0,s.useEffect)(function(){t&&t({type:"user/fetchCurrent"})},[]);var c=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})},d=(0,b.getAuthorityFromRouter)(e.route.routes,o.pathname||"/")||{authority:void 0};return s.default.createElement(f.default,(0,r.default)({logo:y.default,formatMessage:i.formatMessage,menuHeaderRender:function(e,t){return s.default.createElement(m.Link,{to:"/"},e,t)},onCollapse:c,menuItemRender:function(e,t){return e.isUrl||e.children||!e.path?t:s.default.createElement(m.Link,{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:"\u9996\u9875"}].concat((0,u.default)(e))},itemRender:function(e,t,n,a){var l=0===n.indexOf(e);return l?s.default.createElement(m.Link,{to:a.join("/")},e.breadcrumbName):s.default.createElement("span",null,e.breadcrumbName)},footerRender:C,menuDataRender:k,rightContentRender:function(){return s.default.createElement(v.default,null)}},e,a),s.default.createElement(g.default,{authority:d.authority,noMatch:E},n))},x=(0,p.connect)(function(e){var t=e.global,n=e.settings;return{collapsed:t.collapsed,settings:n}})(Z);t.default=x},ocly:function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("cO38")),u=a(n("ZZRV")),o=function(){var e=(0,u.useRef)(),t=(0,u.useState)(0),n=(0,r.default)(t,2),a=n[0],l=n[1];return(0,u.useEffect)(function(){e.current.focus()},[a]),u.default.createElement(u.Fragment,null,u.default.createElement("input",{type:"text",ref:e,defaultValue:a}),u.default.createElement("button",{type:"button",onClick:function(){return l(a+1)}},"+"))},c=o;t.default=c},ojHk:function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("Qgui");var r=l(n("USpT"));n("KqTZ");var u=l(n("Tqhp")),o=l(n("3CjV")),c=l(n("cO38")),d=l(n("BG4o")),f=n("lD+o"),i=l(n("RYWf")),s=a(n("ZZRV")),m=l(n("iczh")),p=l(n("G3lK")),h=function(e){var t=e.className,n=e.defaultValue,a=e.onVisibleChange,l=e.placeholder,h=(e.open,e.defaultOpen),g=(0,d.default)(e,["className","defaultValue","onVisibleChange","placeholder","open","defaultOpen"]),v=(0,s.useRef)(null),b=(0,i.default)(n,{value:e.value,onChange:e.onChange}),y=(0,c.default)(b,2),E=y[0],k=y[1],O=(0,i.default)(h||!1,{value:e.open,onChange:a}),C=(0,c.default)(O,2),Z=C[0],x=C[1],S=(0,m.default)(p.default.input,(0,o.default)({},p.default.show,Z));return s.default.createElement("div",{className:(0,m.default)(t,p.default.headerSearch),onClick:function(){x(!0),Z&&v.current&&v.current.focus()},onTransitionEnd:function(e){var t=e.propertyName;"width"!==t||Z||a&&a(Z)}},s.default.createElement(f.SearchOutlined,{key:"Icon",style:{cursor:"pointer"}}),s.default.createElement(r.default,{key:"AutoComplete",className:S,value:E,style:{height:28,marginTop:-6},options:g.options,onChange:k},s.default.createElement(u.default,{ref:v,defaultValue:n,"aria-label":l,placeholder:l,onKeyDown:function(e){"Enter"===e.key&&g.onSearch&&g.onSearch(E)},onBlur:function(){x(!1)}})))},g=h;t.default=g},wRzt:function(e,t,n){"use strict";var a=n("fbTi"),l=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("cO38")),u=a(n("ZZRV")),o=l(n("aqTk")),c=function(){var e=(0,u.useState)(0),t=(0,r.default)(e,2),n=t[0],a=t[1],l=(0,u.useState)(""),c=(0,r.default)(l,2),d=c[0],f=c[1],i=(0,u.useCallback)(function(){return 2*n},[n]);return u.default.createElement(u.Fragment,null,u.default.createElement("h3",null,n),u.default.createElement("h3",null,d||"aaa"),u.default.createElement(o.default,{callback:i}),u.default.createElement("div",null,u.default.createElement("button",{type:"button",onClick:function(){return a(n+1)}},"\u589e\u52a0"),u.default.createElement("input",{value:d,onChange:function(e){return f(e.target.value)}})))},d=c;t.default=d}}]);