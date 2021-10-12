(window.webpackJsonp=window.webpackJsonp||[]).push([[1135],{2101:function(t,s,e){"use strict";e.r(s);var a=e(21),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dealing-with-soap-web-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-soap-web-services"}},[t._v("#")]),t._v(" Dealing with SOAP Web Services")]),t._v(" "),e("h2",{attrs:{id:"objective"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),e("p",[t._v("In this chapter, you will examine how you can interact with SOAP web services in Titanium.")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("p",[t._v('In some enterprise settings, "Simple" Object Access Protocol (SOAP) is the format for XML data returned by a web service. SOAP web services are very much possible in Titanium, though they are the least simple option.')]),t._v(" "),e("h3",{attrs:{id:"avoid-soap-if-you-can"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avoid-soap-if-you-can"}},[t._v("#")]),t._v(" Avoid SOAP if you can")]),t._v(" "),e("p",[t._v("Although you can use SOAP web services (this may be your only option, especially if you are dealing with a 3rd party or legacy interface), it is recommended to avoid using SOAP web services in a Titanium application. SOAP retains the disadvantages of XML:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The overhead of XML over the wire")])]),t._v(" "),e("li",[e("p",[t._v("The need to translate from an XML format to a JavaScript object format")])])]),t._v(" "),e("p",[t._v("And compounds them because SOAP is even more verbose (much more XML being transported over the wire), and the results are even more difficult to parse. Some programming languages provide high-level tools, WSDL parsers, and other mechanisms to work around the complexities of a SOAP format, but JavaScript has historically never had any of those types of tools. This remains the case today, and as such, there are very few high-level libraries and tools to support SOAP in JavaScript.")]),t._v(" "),e("h3",{attrs:{id:"the-low-tech-approach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-low-tech-approach"}},[t._v("#")]),t._v(" The low-tech approach")]),t._v(" "),e("p",[t._v("The approach taken by a number of Titanium projects we have worked on is to stay very low-tech and POST manually-created SOAP envelopes (XML strings) to a web service endpoint. If you understand how HTTP and SOAP work together, you can manually construct a SOAP envelope to send to your server, with the appropriate contents:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Network"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHTTPClient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" doc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseXML"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//manually parse the SOAP XML document")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" soapRequest "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmlns:SOAP-ENC=\\"http://schemas.xmlsoap.org/soap/encoding/\\" \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmlns:xsd=\\"http://www.w3.org/2001/XMLSchema\\" \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmlns:xs=\\"http://www.w3.org/2001/XMLSchema\\" \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmlns:wsse=\\"http://schemas.xmlsoap.org/ws/2002/12/secext\\"> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<SOAP-ENV:Body id=\\"_0\\"> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<GetUserDetailsReq> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Request> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<SessionToken xsi:type=\\"ns:IVRSessionToken\\">XXXX</SessionToken> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</Request> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</GMGetUserDetailsReq> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</SOAP-ENV:Body> \\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</SOAP-ENV:Envelope>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://someserver.com/someendpoint.asmx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("xml"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" soapRequest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Bear in mind the above SOAP envelope is completely made up and derived from another service. In order to use your own SOAP web services in this fashion, you will need to understand what the contents of a SOAP request to your server actually looks like as an HTTP request. Here, other third party tools can help, particularly ones that let you inspect the raw HTTP requests and responses for your web service. On the Mac, you might consider using "),e("a",{attrs:{href:"http://ditchnet.org/soapclient/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SOAP Client"),e("OutboundLink")],1),t._v(". The Eclipse Web Tools project also has a bit of SOAP "),e("a",{attrs:{href:"http://www.eclipse.org/webtools/ws/",target:"_blank",rel:"noopener noreferrer"}},[t._v("oriented tooling"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),e("p",[t._v("In this chapter, you learned that you can interact with SOAP web services in Titanium, but that SOAP involves extra overhead and larger data payloads compared to JSON or XML.")])])}),[],!1,null,null,null);s.default=n.exports}}]);