(window.webpackJsonp=window.webpackJsonp||[]).push([[669],{1464:function(e,t,a){"use strict";a.r(t);var n=a(21),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-geolocation-android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-geolocation-android"}},[e._v("#")]),e._v(" Titanium.Geolocation.Android")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This module is used for manually configuring geolocation settings on Android.")]),e._v(" "),a("p",[e._v("Manual configuration is recommended for applications that have more demanding\ngeolocation needs (for example, driving directions). However, for basic geolocation\ninformation, "),a("em",[e._v("simple mode")]),e._v(" geolocation may be sufficient. For information on simple\nmode, see "),a("type-link",{attrs:{type:"Titanium.Geolocation"}},[e._v("Titanium.Geolocation")]),e._v(".")],1),e._v(" "),a("p",[e._v("Manual configuration involves managing "),a("em",[e._v("providers")]),e._v(" and "),a("em",[e._v("rules")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("Location providers")]),e._v(", such as GPS, provide location updates.")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Location rules")]),e._v(" filter the results returned by location providers.")])])]),e._v(" "),a("p",[e._v("Configuring geolocation manually involves three steps:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Enabling manual mode.")])]),e._v(" "),a("li",[a("p",[e._v("Enabling location providers.")])]),e._v(" "),a("li",[a("p",[e._v("Adding location rules (optional).")])])]),e._v(" "),a("p",[e._v("As with the other modes, you register for location updates using the main\n"),a("type-link",{attrs:{type:"Titanium.Geolocation"}},[e._v("Titanium.Geolocation")]),e._v(" module. Location updates are generated as long as\nan event listener is registered for the "),a("code",[e._v("location")]),e._v(" event.  When you are not\nusing location updates, you should remove any registered event listeners.")],1),e._v(" "),a("p",[e._v("In manual mode, the application is responsible for dynamically updating the settings\nto acheive its required accuracy while limiting battery usage. For example, an\napplication might do any of the following:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If the application isn't getting updates frequently enough, it can adjust its\nprovider settings to provide more updates, or relax its location rules to allow\nless accurate updates through.")])]),e._v(" "),a("li",[a("p",[e._v("If the application isn't receiving accurate enough updates from one provider, it\ncan add another provider to try to improve results.")])]),e._v(" "),a("li",[a("p",[e._v("If the application is getting sufficiently accurate results from the network\nprovider, it can disable the GPS provider to save power.")])])]),e._v(" "),a("h3",{attrs:{id:"enabling-manual-configuration-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-manual-configuration-mode"}},[e._v("#")]),e._v(" Enabling Manual Configuration Mode")]),e._v(" "),a("p",[e._v("To enable manual configuration mode, set the "),a("type-link",{attrs:{type:"Titanium.Geolocation.Android.manualMode"}},[e._v("manualMode")]),e._v("\nproperty to "),a("code",[e._v("true")]),e._v(". In manual configuration mode, the location providers and location\nrules set through this module control the generation of location updates.")],1),e._v(" "),a("p",[e._v("When "),a("code",[e._v("manualMode")]),e._v(" is "),a("code",[e._v("true")]),e._v(", the following configuration settings in the\n"),a("type-link",{attrs:{type:"Titanium.Geolocation"}},[e._v("Titanium.Geolocation")]),e._v(" module are ignored:")],1),e._v(" "),a("ul",[a("li",[a("type-link",{attrs:{type:"Titanium.Geolocation.accuracy"}},[e._v("Geolocation.accuracy")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.Geolocation.frequency"}},[e._v("Geolocation.frequency")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.Geolocation.preferredProvider"}},[e._v("Geolocation.preferredProvider")])],1)]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("manualMode")]),e._v(" is "),a("code",[e._v("false")]),e._v(", the "),a("code",[e._v("accuracy")]),e._v(", "),a("code",[e._v("frequency")]),e._v(" and "),a("code",[e._v("preferredProvider")]),e._v("\nsettings from "),a("type-link",{attrs:{type:"Titanium.Geolocation"}},[e._v("Titanium.Geolocation")]),e._v(" are used to configure location updates.\nAny location providers and location rules set in "),a("type-link",{attrs:{type:"Titanium.Geolocation.Android"}},[e._v("Titanium.Geolocation.Android")]),e._v("\nare retained, but they have no effect.")],1),e._v(" "),a("h3",{attrs:{id:"location-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-providers"}},[e._v("#")]),e._v(" Location Providers")]),e._v(" "),a("p",[e._v('Android supports three kinds of location providers: GPS, network, and the\n"passive" location provider, which provides only cached information.')]),e._v(" "),a("p",[e._v("Each location provider represents a different tradeoff between accuracy and\nbattery power. For most accurate results, you can use a combination of location\nproviders. Your application can also dynamically change providers to optimize\nbattery life (for example, if the network provider is providing good enough\nlocation updates, you can disable the GPS provider).")]),e._v(" "),a("p",[e._v("Location providers are represented by the\n"),a("type-link",{attrs:{type:"Titanium.Geolocation.Android.LocationProvider"}},[e._v("LocationProvider")]),e._v(" object.\nTo specify a location provider, create a new provider object, then register it\nwith "),a("type-link",{attrs:{type:"Titanium.Geolocation.Android.createLocationProvider"}},[e._v("addLocationProvider")]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" gpsProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createLocationProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("PROVIDER_GPS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    minUpdateTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    minUpdateDistance"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nTi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("addLocationProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("gpsProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("As shown above, when you create a location provider, you can specify two\nproperties to limit update frequency:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("minUpdateTime")]),e._v(". Limits the frequency of location updates to no more\nthan one per "),a("code",[e._v("minUpdateTime")]),e._v(" seconds.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("minUpdateDistance")]),e._v(". Don't send location updates until the location changes\nat least "),a("code",[e._v("minUpdateDistance")]),e._v(" meters.")])])]),e._v(" "),a("p",[e._v("Only one provider of each type (GPS, network, passive) can be registered at a\ntime. Adding a new location provider with the same "),a("code",[e._v("name")]),e._v(" value replaces any\nexisting provider with the same "),a("code",[e._v("name")]),e._v(".")]),e._v(" "),a("p",[e._v("Once a location provider is added, changes made to the location provider object itself\n(such as changing its "),a("code",[e._v("minUpdateTime")]),e._v(" value) change the active configuration of the\nlocation system.")]),e._v(" "),a("h3",{attrs:{id:"location-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-rules"}},[e._v("#")]),e._v(" Location Rules")]),e._v(" "),a("p",[a("em",[e._v("Location Rules")]),e._v(" filter the results returned by location providers. You use\nlocation rules to reduce the number of location update events, and ensure that\nthe events you do receive are as accurate and recent as your application requires.")]),e._v(" "),a("p",[e._v("You are not required to set any location rules. However, by reducing the number of\nlocation events that are passed from the native code\nto the JavaScript layer, location rules can improve both performance and battery\nlife.")]),e._v(" "),a("p",[e._v("Location rules are represented by the\n"),a("type-link",{attrs:{type:"Titanium.Geolocation.Android.LocationProvider"}},[e._v("LocationRule")]),e._v(" object. To\nspecify a location rule, create a new rule object, then register it with\n"),a("type-link",{attrs:{type:"Titanium.Geolocation.Android.createLocationProvider"}},[e._v("addLocationRule")]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" gpsRule "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createLocationRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("PROVIDER_GPS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Updates should be accurate to 100m")]),e._v("\n    accuracy"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Updates should be no older than 5m")]),e._v("\n    maxAge"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("300000")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// But  no more frequent than once per 10 seconds")]),e._v("\n    minAge"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nTi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("addLocationRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("gpsRule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Each rule can specify any combination of the following criteria:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("provider")]),e._v(". If specified, this rule only applies to updates generated\nby the specified provider. If not specified, this rule applies to all updates.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("accuracy")]),e._v(". Minimum accuracy required for a location update. Accuracy is\nexpressed as the maximum allowable error, in meters. Updates with reported\naccuracy values greater than this are filtered out.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("minAge")]),e._v(". Controls the frequency of location updates. Do not forward an update unless\nat least "),a("code",[e._v("minAge")]),e._v(" milliseconds have passed since the last good location\nupdate.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("maxAge")]),e._v(". Controls the freshness of location updates. Do not forward an update\nunless it is newer than "),a("code",[e._v("maxAge")]),e._v(" milliseconds.")])])]),e._v(" "),a("p",[e._v("You can specify as many location rules as you like. The order in which location rules\nare added is not significant. For a "),a("code",[e._v("location")]),e._v(" event to be generated, the location\nupdate must pass all of the active rules.")]),e._v(" "),a("p",[e._v("Note that some combinations of rules may make it very difficult to get location\nupdates. In particular, very low values for either "),a("code",[e._v("accuracy")]),e._v(" or "),a("code",[e._v("maxAge")]),e._v(" may prevent\nresults from getting through.")]),e._v(" "),a("ApiDocs")],1)}),[],!1,null,null,null);t.default=o.exports}}]);