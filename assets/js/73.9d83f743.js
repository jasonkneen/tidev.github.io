(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1992:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"the-webview-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-webview-component"}},[t._v("#")]),t._v(" The WebView Component")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("With Titanium SDK 8.0.0, we now use "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/WKWebView/"}},[t._v("WKWebView")]),t._v(" to implement Ti.UI.WebView (as Apple has deprecated "),s("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/uiwebview",target:"_blank",rel:"noopener noreferrer"}},[t._v("UIWebView"),s("OutboundLink")],1),t._v(").")],1)]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("Despite the fact that Titanium gives us the opportunity to use native UI components, sometimes we still need to make use of web content. Whether it's displaying an existing website, making use of the "),s("code",[t._v("<canvas>")]),t._v(", or handling an RSS feed, leveraging web content is something mobile developers need to be able to do. In order to make use of a platform's native webview component, we need only use "),s("code",[t._v("Ti.UI.WebView")]),t._v(". This API allows us to create, display, and interact with both local and remote web content.")]),t._v(" "),s("p",[t._v("In the following sections we'll see exactly how we can create "),s("code",[t._v("WebViews")]),t._v(" in our apps using the Titanium API, use both local and remote data as the source of our web content, and examine how we can use the properties and functions of the "),s("code",[t._v("Ti.UI.WebView")]),t._v(" to enhance the user experience.")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Using Remote WebContent with WebView")])]),t._v(" "),s("li",[s("p",[t._v("Using Local Web Content with WebView")])]),t._v(" "),s("li",[s("p",[t._v("WebView Properties and Functions")])]),t._v(" "),s("li",[s("p",[t._v("Performance and Interaction Concerns")])])]),t._v(" "),s("h3",{attrs:{id:"using-remote-webcontent-with-webview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-remote-webcontent-with-webview"}},[t._v("#")]),t._v(" Using Remote WebContent with WebView")]),t._v(" "),s("p",[t._v("In its simplest form, a "),s("code",[t._v("WebView")]),t._v(" is created with the "),s("code",[t._v("Ti.UI.createWebView()")]),t._v(" function and added to the view hierarchy just as we would any other view component. Let's look at a simple example. Here we'll display an existing website in our native app using just a few lines of code.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webview "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.appcelerator.com'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(780),alt:"appc"}})]),t._v(" "),s("p",[t._v("As pictured above, we need only specify the "),s("code",[t._v("url")]),t._v(" of a remote website in order to display it in a "),s("code",[t._v("WebView")]),t._v(". And just like other view components, we are free to resize and position the "),s("code",[t._v("WebView")]),t._v(" any way we like. For example, if we wanted to have a smaller "),s("code",[t._v("WebView")]),t._v(" that was only a portion of the visible screen, we could do something like this:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webview "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.appcelerator.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200dp'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(781),alt:"appc_small"}})]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("WebView")]),t._v(" itself is only 200 density independent pixels in height, but the entire webpage is viewable by scrolling vertically. By parceling our web content to a smaller portion of the screen, we are able to use the remaining space for anything we want. We can add native UI components or even more "),s("code",[t._v("WebViews")]),t._v(".")]),t._v(" "),s("p",[t._v("One of the more interesting uses of remote "),s("code",[t._v("WebViews")]),t._v(" is displaying mobile optimized content. This is particularly useful when the content encompasses large amounts of functionality that we won't have to code for ourselves. A great example of this is the "),s("code",[t._v("Ti.Facebook")]),t._v(" module that makes use of Facebook's default login screen via "),s("code",[t._v("WebView")]),t._v(" for authentication. This example, along with a few others, can be found in the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Integrating_Web_Content/WebView_Use_Cases/"}},[t._v("WebView Use Cases")]),t._v(" section of this chapter.")],1),t._v(" "),s("h3",{attrs:{id:"using-local-web-content-with-webview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-local-web-content-with-webview"}},[t._v("#")]),t._v(" Using Local Web Content with WebView")]),t._v(" "),s("p",[t._v("Often times when dealing with web content we'll want to load it from local resources. This allows offline usage and can decrease the load time of the "),s("code",[t._v("WebView")]),t._v(". This web content can include HTML, CSS, and even Javascript libraries. The syntax for loading local web content is identical to that of the remote:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webview "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local.html'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("local.html")]),t._v(" refers to a local HTML file included in our project. The path used by the "),s("code",[t._v("url")]),t._v(" property when referring to local web content is relative to your project's "),s("code",[t._v("Resources")]),t._v(" directory for Titanium projects, or "),s("code",[t._v("app/assets")]),t._v(" and "),s("code",[t._v("app/lib")]),t._v(" directories for Alloy project. This is important to note as you include more complex local web content, as we'll discuss next.")]),t._v(" "),s("p",[t._v("Let's say you not only want to show a local HTML file, but you also want that HTML file to have access to local CSS and Javascript files. All you need to do is remember that all local web content is available relative to your project's "),s("code",[t._v("Resources")]),t._v(" directory for Titanium projects, or "),s("code",[t._v("app/assets")]),t._v(" and "),s("code",[t._v("app/lib")]),t._v(" directories for Alloy project.. You can think of the directory almost as a local web server root path. To illustrate this point, let's take the prior example and expand it to use local CSS and Javascript files.")]),t._v(" "),s("p",[s("strong",[t._v("local.html")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Local HTML"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("local.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("local.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("addParagraphAlert();"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("localtest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      Here some text that will be styled by the included local style sheet. If you click it,\n      the included local JS file will cause an alert to pop up.\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("local.css")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #880000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("local.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addParagraphAlert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localtest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'you clicked the paragraph'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("All of the above files are placed in the "),s("code",[t._v("Resources")]),t._v(" directory of your project. Below we can see what this would look like on an iPhone:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(782),alt:"local_full"}})]),t._v(" "),s("p",[t._v("The included HTML/CSS/JS does not have to be this simplistic, though. With local web content you can include any HTML/CSS/JS that the platform's browser will support. This include graphics libraries for "),s("code",[t._v("<canvas>")]),t._v(" or even using jQuery inside your "),s("code",[t._v("WebViews")]),t._v(". You get the best of both worlds with Titanium: Access to native components along with all the power of the web.")]),t._v(" "),s("p",[t._v("In addition to being able to specify local HTML files, you can also add HTML dynamically to your "),s("code",[t._v("WebViews")]),t._v(" via the "),s("code",[t._v("html")]),t._v(" property. This can be used for adding everything from simple styled text to a full fledged webpage. Here's how you would specify HTML in your own "),s("code",[t._v("WebView")]),t._v(" via "),s("code",[t._v("html")]),t._v(". This would display a very simple paragraph in an unstyled "),s("code",[t._v("WebView")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webview "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<html><body><p>Here is my paragraph</p></body></html>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("One additional, and extremely powerful, bit of functionality available to you with local "),s("code",[t._v("WebViews")]),t._v(" is the ability for your local web content to be able to communicate bidirectionally with your Titanium code via application level events. What this means is that interactions and data from your "),s("code",[t._v("WebViews")]),t._v(" can be shared with your native Titanium code, and vice versa. This will be discussed in more detail in the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Integrating_Web_Content/Communication_Between_WebViews_and_Titanium/"}},[t._v("Communication Between WebViews and Titanium")]),t._v(" section.")],1),t._v(" "),s("h3",{attrs:{id:"webview-properties-and-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webview-properties-and-functions"}},[t._v("#")]),t._v(" WebView Properties and Functions")]),t._v(" "),s("p",[t._v("Now that you've seen how to render "),s("code",[t._v("WebViews")]),t._v(" using both local and remote web content, let's look at some of the ways we can add more style and control to them. This includes functions, properties, and events for basic web browser navigation, data handling, loading control, and scaling.")]),t._v(" "),s("h4",{attrs:{id:"navigation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigation"}},[t._v("#")]),t._v(" Navigation")]),t._v(" "),s("p",[t._v("Let's first look at the functions available to us to manage navigation of the "),s("code",[t._v("WebView")]),t._v(". Just like a typical web browser, the "),s("code",[t._v("WebView")]),t._v(" supports navigation via links. This means that if you want to support multi-page navigation, you need to now the following functions:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("canGoBack()")]),t._v(" - A function that returns a boolean value indicating whether or not the "),s("code",[t._v("WebView")]),t._v(" can go back in its history")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("canGoForward()")]),t._v(" - A function that returns a boolean value indicating whether or not the "),s("code",[t._v("WebView")]),t._v(" can go forward in its history")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("goBack()")]),t._v(" - A function that moves the "),s("code",[t._v("WebView")]),t._v(' back in its history. This would commonly be bound with a UI "back" button.')])]),t._v(" "),s("li",[s("p",[s("code",[t._v("goForward()")]),t._v(" - A function that moves the "),s("code",[t._v("WebView")]),t._v(' forward in its history. This would commonly be bound with a UI "forward" button.')])])]),t._v(" "),s("h4",{attrs:{id:"loading-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-control"}},[t._v("#")]),t._v(" Loading Control")]),t._v(" "),s("p",[t._v("Another familiar set of functionality is the ability to refresh and stop the loading of a "),s("code",[t._v("WebView")]),t._v(". The functions and properties listed below give us visibility into the loading state of the "),s("code",[t._v("WebView")]),t._v(" and the ability to control it.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("loading")]),t._v(" - A boolean property that indicates whether or not the "),s("code",[t._v("WebView")]),t._v(" is currently loading content.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("reload()")]),t._v(" - A function that reloads the "),s("code",[t._v("WebView")]),t._v(", much like a browser refresh.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("repaint()")]),t._v(" - A function that causes the "),s("code",[t._v("WebView")]),t._v(" to repaint its contents.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("stopLoading()")]),t._v(" - A function that stops the loading of a "),s("code",[t._v("WebView")]),t._v(', much like the "stop" button in most browsers.')])])]),t._v(" "),s("h4",{attrs:{id:"data-handling-scaling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-handling-scaling"}},[t._v("#")]),t._v(" Data Handling & Scaling")]),t._v(" "),s("p",[t._v("As covered in the previous sections, passing local and remote data to the "),s("code",[t._v("WebView")]),t._v(" is its core functionality. Additionally, we can pass in basic authentication and handle the initial scaling of that data as well.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("setBasicAuthentication(username, password)")]),t._v(" - A function that passes basic HTTP authentication into the "),s("code",[t._v("WebView")]),t._v(". It takes 2 string parameters, "),s("code",[t._v("username")]),t._v(" and "),s("code",[t._v("password")]),t._v(", that will be used to authenticate.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("html")]),t._v(" - A string property containing the HTML you would like to render in the "),s("code",[t._v("WebView")]),t._v(".")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("scalesPageToFit")]),t._v(" - A boolean property that indicates whether or not you would like to scale the content of the "),s("code",[t._v("WebView")]),t._v(" to fit its dimensions. (Also see notes about the "),s("code",[t._v("viewport")]),t._v(" meta tag in "),s("a",{attrs:{href:"#WebContentForWebViews"}},[t._v("#Web Content For WebViews")]),t._v(".)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("url")]),t._v(" - A URL property to local or remote web content. For remote content, this parameter is the web URL. For local content, this parameter is the path, relative to the project's "),s("code",[t._v("Resources")]),t._v(" directory for Titanium projects, or "),s("code",[t._v("app/assets")]),t._v(" and "),s("code",[t._v("app/lib")]),t._v(" directories for Alloy project., to the local HTML file.")])])]),t._v(" "),s("h4",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("p",[s("code",[t._v("WebView")]),t._v(" also has a few custom events to allow additional control over the lifecycle of a load, as well as any errors that may occur in the underlying native webview.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("beforeload")]),t._v(" - This event is fired before the "),s("code",[t._v("WebView")]),t._v(" starts loading its content. The "),s("code",[t._v("url")]),t._v(" property of the event object contains the source of the content.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("error")]),t._v(" - This event is fired when a "),s("code",[t._v("WebView")]),t._v(" fails to load. Like the "),s("code",[t._v("beforeload")]),t._v(" event, it has the "),s("code",[t._v("url")]),t._v(" property. It also has a "),s("code",[t._v("message")]),t._v(" property, which is a string that contains the details of the error.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("load")]),t._v(" - This event is fired when the "),s("code",[t._v("WebView")]),t._v(" has loaded.")])])]),t._v(" "),s("h3",{attrs:{id:"performance-and-interaction-concerns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-and-interaction-concerns"}},[t._v("#")]),t._v(" Performance and Interaction Concerns")]),t._v(" "),s("p",[t._v("While "),s("code",[t._v("WebViews")]),t._v(" give us the ability to leverage the power of the web in our apps, they do come at a cost. The "),s("code",[t._v("WebView")]),t._v(" is on of the most expensive components to create in terms of resources and performance. Every "),s("code",[t._v("WebView")]),t._v(" loaded requires its own rendering context and will take a moment to load, regardless of how simple its contents are.")]),t._v(" "),s("p",[t._v("For these reasons, it's critical that you are absolutely certain you need a "),s("code",[t._v("WebView")]),t._v(" to create a specific functionality in your app. A good rule of thumb is that if you can recreate web content using Titanium native components, then you should do so. Minimal usage of "),s("code",[t._v("WebViews")]),t._v(" will not likely be a problem, but their resource requirements can quickly become unmanageable if continually used. A prime example of this would be usage of "),s("code",[t._v("WebViews")]),t._v(" in "),s("code",[t._v("Ti.UI.TableViews")]),t._v(". Performance is of utmost concern with "),s("code",[t._v("TableViews")]),t._v(" and including "),s("code",[t._v("WebViews")]),t._v(" in your "),s("code",[t._v("TableViewRows")]),t._v(" is a recipe for sluggish performance.")]),t._v(" "),s("p",[t._v("On final consideration with "),s("code",[t._v("WebViews")]),t._v(" is that they do not play well inside of other scrollable components. This is a limitation of the underlying native components. "),s("code",[t._v("WebViews")]),t._v(" are pretty greedy when it comes to touch interactions and this will often steal those events from any containing views that have their own touch handlers. If you must include "),s("code",[t._v("WebViews")]),t._v(" inside other scrollable components, your best bet will be to disable touch events on your "),s("code",[t._v("WebView")]),t._v(" by setting its "),s("code",[t._v("touchEnabled")]),t._v(" property to "),s("code",[t._v("false")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"best-practices-for-web-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-for-web-content"}},[t._v("#")]),t._v(" Best Practices for Web Content")]),t._v(" "),s("p",[t._v("Content displayed in a web view must be tuned for mobile browsers for best results. In particular, you should investigate the "),s("code",[t._v("viewport")]),t._v(" meta tag options available for controlling the scaling, zooming, and size of the embedded content. For example, if a web view is resized, it may not dynamically relayout its contents. Setting the viewport meta tag correctly can resolve these issues.")]),t._v(" "),s("p",[t._v("For more information, see the following resources:")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring the Viewport"),s("OutboundLink")],1),t._v(" in the Apple Safari Web Content Guide")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://developer.android.com/guide/webapps/targeting.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Targeting Screens from Web Apps"),s("OutboundLink")],1),t._v(" in the Android API Guides")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en/Mobile/Viewport_meta_tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using the viewport meta tag to control layout on mobile browsers"),s("OutboundLink")],1),t._v(" in Mozilla's Developer Documentation")])])]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this section we learned how to create "),s("code",[t._v("Ti.UI.WebViews")]),t._v(" to display local and remote web content. We explored the multitude of functions, properties, and events available to "),s("code",[t._v("WebViews")]),t._v(" that give it extensive control over its functionality and appearance. Finally, we discussed some of the performance and interaction concerns when incorporating "),s("code",[t._v("WebViews")]),t._v(" into your apps.")]),t._v(" "),s("p",[t._v("In the next section we'll learn how we can use Titanium application level events to bidirectionally communicate between embedded Javascript in a "),s("code",[t._v("WebView")]),t._v(" and native Titanium code. This will add a whole new level of interaction between our Titanium code and web content.")])])}),[],!1,null,null,null);e.default=n.exports},780:function(t,e,a){t.exports=a.p+"assets/img/appc.077b2a9b.png"},781:function(t,e,a){t.exports=a.p+"assets/img/appc_small.c6d427ea.png"},782:function(t,e,a){t.exports=a.p+"assets/img/local_full.6721ea71.png"}}]);