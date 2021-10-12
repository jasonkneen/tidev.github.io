(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{1513:function(t,s,a){"use strict";a.r(s);var n=a(21),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-platform-displaycaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-platform-displaycaps"}},[t._v("#")]),t._v(" Titanium.Platform.DisplayCaps")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("On iPhone and iPod devices with retina display, the "),a("code",[t._v("density")]),t._v(" property is "),a("code",[t._v("high")]),t._v(" and the "),a("code",[t._v("dpi")]),t._v("\nproperty is "),a("code",[t._v("320")]),t._v(". For other iPhone and iPod devices, "),a("code",[t._v("density")]),t._v(" is "),a("code",[t._v("medium")]),t._v(" and "),a("code",[t._v("dpi")]),t._v(" is "),a("code",[t._v("160")]),t._v(".")]),t._v(" "),a("p",[t._v("On iPad devices with retina display, the "),a("code",[t._v("density")]),t._v(" property is "),a("code",[t._v("high")]),t._v(" and the "),a("code",[t._v("dpi")]),t._v("\nproperty is "),a("code",[t._v("260")]),t._v(". For other iPad devices, "),a("code",[t._v("density")]),t._v(" is "),a("code",[t._v("medium")]),t._v(" and "),a("code",[t._v("dpi")]),t._v(" is "),a("code",[t._v("130")]),t._v(".")]),t._v(" "),a("p",[t._v("Note that Xcode versions prior to 4.3.1 do not have the correct tools to detect the iPad 3\nretina display. Apps must be built with Xcode 4.3.1 or later to detect iPad 3 retina display.")]),t._v(" "),a("p",[t._v("Note that the "),a("code",[t._v("displayCaps")]),t._v(" property begins with a lowercase letter, which differentiates it\nfrom the "),a("code",[t._v("DisplayCaps")]),t._v(" object that it returns. Refer to the example to understand how it should\nbe called.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"system-display-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-display-information"}},[t._v("#")]),t._v(" System Display Information")]),t._v(" "),a("p",[t._v("Output the display properties to the system log.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.Platform.displayCaps.density: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayCaps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("density"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.Platform.displayCaps.dpi: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayCaps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dpi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.Platform.displayCaps.platformHeight: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayCaps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platformHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.Platform.displayCaps.platformWidth: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayCaps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platformWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iphone'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ipad'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.Platform.displayCaps.logicalDensityFactor: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayCaps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logicalDensityFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("osname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.Platform.displayCaps.xdpi: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayCaps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xdpi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.Platform.displayCaps.ydpi: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayCaps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ydpi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);s.default=p.exports}}]);