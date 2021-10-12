(window.webpackJsonp=window.webpackJsonp||[]).push([[1134],{2102:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"video-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-apis"}},[t._v("#")]),t._v(" Video APIs")]),t._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),a("p",[t._v("In this chapter, you'll learn how you can embed videos within your apps. You'll see how to play both local files and how to stream remote videos.")]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("p",[t._v("You can use the "),a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer-object.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Titanium.Media.VideoPlayer")]),a("OutboundLink")],1),t._v(" to play videos in your Titanium app. This object is returned when you call "),a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.createVideoPlayer-method.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Titanium.Media.createVideoPlayer()")]),a("OutboundLink")],1),t._v(". It provide useful methods, such as "),a("code",[t._v("play()")]),t._v(", "),a("code",[t._v("pause()")]),t._v(", and "),a("code",[t._v("stop()")]),t._v(".")]),t._v(" "),a("p",[t._v("You can play local video files by calling the "),a("code",[t._v("setMedia()")]),t._v(" method or by setting the "),a("code",[t._v("media")]),t._v(" property. Either accepts a File or Blob object. You can play a remote video by calling the "),a("code",[t._v("setUrl()")]),t._v(" method or by setting the "),a("code",[t._v("url")]),t._v(" property. Either accepts the URL of the media to play. (There's also a deprecated contentURL property, but you should use "),a("code",[t._v("url")]),t._v(" instead.) Finally, you can set the "),a("code",[t._v("autoplay")]),t._v(" property to "),a("code",[t._v("true")]),t._v(" to automatically play the video when the VideoPlayer is rendered.")]),t._v(" "),a("p",[t._v("The VideoPlayer is treated like a regular Titanium View. Thus, you can overlay images and views over the VideoPlayer by adding them to the view hierarchy. Like this:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" activeMovie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Media"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createVideoPlayer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create a label")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" movieLabel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLabel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Do not try this at home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  font"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fontSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fontFamily"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helvetica Neue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add label to view")]),t._v("\nactiveMovie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("movieLabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"fullscreen-and-embedded-players"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fullscreen-and-embedded-players"}},[t._v("#")]),t._v(" Fullscreen and embedded players")]),t._v(" "),a("p",[t._v("On Android, the VideoPlayer must be used fullscreen. It cannot be embedded into a smaller view. This is because on Android, the VideoPlayer is not technically a proxy for a native view object like it is on iOS. Instead, creating the VideoPlayer fires an Intent which launches the native video player Activity. It's for this reason that on Android, you don't call "),a("code",[t._v("win.add(videoPlayer)")]),t._v(". If you did so, your app would throw an error and crash.")]),t._v(" "),a("p",[t._v("On iOS, you can embed the video player within a window or view; it doesn't have to be shown full size. Simply set "),a("code",[t._v("height")]),t._v(" and "),a("code",[t._v("width")]),t._v(" properties on the VideoPlayer. To display the player fullscreen, you can set "),a("code",[t._v("videoPlayer.fullscreen=true")]),t._v(".")]),t._v(" "),a("p",[t._v('You can control the way in which the video playback controls are shown for the player. You can "embed" the within the player, which removes them from the player\'s surrounding chrome giving more space to your video. You do so by setting the '),a("code",[t._v("movieControlStyle")]),t._v(" property, like this")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" activeMovie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Media"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createVideoPlayer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../movie.mp4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  movieControlStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Media"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VIDEO_CONTROL_EMBEDDED")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"movie-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movie-events"}},[t._v("#")]),t._v(" Movie events")]),t._v(" "),a("p",[t._v("The VideoPlayer supports quite a few events that you can use to control the playback experience. See the "),a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer-object",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Ti.Media.VideoPlayer")]),a("OutboundLink")],1),t._v(" API docs page for full information. But here are a few of the events you might monitor:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("complete")]),t._v(" – fired when the playback ends or the user exits playback, use the "),a("code",[t._v("e.reason")]),t._v(" property to determine the actual stop condition, such as "),a("code",[t._v("Ti.Media.VIDEO_FINISH_REASON_PLAYBACK_ENDED")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("load")]),t._v(" – fired when the movie finishes loading")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fullscreen")]),t._v(" – fired when the movie changes to or from fullscreen, use the "),a("code",[t._v("e.entering")]),t._v(" property to determine if the player is entering or leaving fullscreen mode")])])]),t._v(" "),a("p",[t._v("A technique you should consider is stopping the movie when the video it's embedded in closes. You can do that simply with code like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("win.addEventListener('close', function() {\n  activeMovie.stop();\n});\n")])])]),a("h3",{attrs:{id:"hands-on-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hands-on-practice"}},[t._v("#")]),t._v(" Hands-on practice")]),t._v(" "),a("h4",{attrs:{id:"goal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[t._v("#")]),t._v(" Goal")]),t._v(" "),a("p",[t._v("In this activity, you will write a simple app to stream a movie from a remote URL.")]),t._v(" "),a("h4",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Create a new Titanium Mobile app. Delete all of the code from the app.js file.")])]),t._v(" "),a("li",[a("p",[t._v("Define a window with a black background. Optionally, set the orientation of the window to landscape.")])]),t._v(" "),a("li",[a("p",[t._v("Define a VideoPlayer with these characteristics:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("backgroundColor = black")])]),t._v(" "),a("li",[a("p",[t._v("default video controls (not embedded)")])]),t._v(" "),a("li",[a("p",[t._v("scalingMode = fill the screen")])]),t._v(" "),a("li",[a("p",[t._v("fullscreen")])]),t._v(" "),a("li",[a("p",[t._v("Play the "),a("a",{attrs:{href:"http://assets.appcelerator.com.s3.amazonaws.com/video/media.m4v",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://assets.appcelerator.com.s3.amazonaws.com/video/media.m4v"),a("OutboundLink")],1),t._v(" movie. Depending on your Android environment, that movie might not play well (due to encoding issues from the creation process). If you have playback troubles, you can play "),a("a",{attrs:{href:"http://assets.appcelerator.com.s3.amazonaws.com/video/media.3gp",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://assets.appcelerator.com.s3.amazonaws.com/video/media.3gp"),a("OutboundLink")],1),t._v(" on Android instead.")])])])]),t._v(" "),a("li",[a("p",[t._v("Add the branching logic so that on iOS you add the VideoPlayer to the window object.")])]),t._v(" "),a("li",[a("p",[t._v("Add the code to play the video stream and open the window.")])]),t._v(" "),a("li",[a("p",[t._v("Build and test your app in the simulator/emulator or on device.")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Simulator / emulator rotation")]),t._v(" "),a("p",[t._v("Rotate the iPhone simulator by pressing Command and either the left or right arrow key. Rotate the Android emulator by pressing Control+F12.")])]),t._v(" "),a("h3",{attrs:{id:"windows-development-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-development-considerations"}},[t._v("#")]),t._v(" Windows development considerations")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),a("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),a("p",[t._v("In order to enable camera and audio recording for Windows Phone, you need to provide appropriate Capabilities in your "),a("code",[t._v("tiapp.xml.")]),t._v(" Windows Phone users are prompted to grant or deny permission when your application attempt to use it.")]),t._v(" "),a("h4",{attrs:{id:"grant-access-to-video-stream-and-audio-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-access-to-video-stream-and-audio-stream"}},[t._v("#")]),t._v(" Grant access to video stream and audio stream")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("windows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Capabilities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DeviceCapability")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("microphone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DeviceCapability")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("webcam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Capabilities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("windows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"grant-access-to-music-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-access-to-music-library"}},[t._v("#")]),t._v(" Grant access to music library")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("windows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Capabilities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Capability")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("musicLibrary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Capabilities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("windows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("For more information about audio configuration in "),a("code",[t._v("tiapp.xml")]),t._v(", see "),a("a",{attrs:{href:"#%21/guide/tiapp.xml_and_timodule.xml_Reference-section-29004921_tiapp.xmlandtimodule.xmlReference-Windows-specificsection"}},[t._v("Windows-specific section")]),t._v(" in "),a("a",{attrs:{href:"#%21/guide/tiapp.xml_and_timodule.xml_Reference"}},[t._v("tiapp.xml and timodule.xml Reference")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"references-and-further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[t._v("#")]),t._v(" References and further reading")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/7.2_video.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Finished code"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.VideoPlayer-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs: Ti.Media.VideoPlayer"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://developer.apple.com/library/ios/#documentation/Miscellaneous/Conceptual/iPhoneOSTechOverview/MediaLayer/MediaLayer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Docs: Supported video formats"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://developer.android.com/guide/appendix/media-formats.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Developer Docs: Supported media formats"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://msdn.microsoft.com/windows/uwp/audio-video-camera/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 10 Mobile: Audio, video, and camera"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("In this chapter, you learned how you can embed videos within your apps. You saw how to play both local files and how to stream remote videos.")])])}),[],!1,null,null,null);e.default=n.exports}}]);