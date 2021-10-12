(window.webpackJsonp=window.webpackJsonp||[]).push([[1051],{1965:function(e,t,o){"use strict";o.r(t);var a=o(21),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"distributing-android-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distributing-android-apps"}},[e._v("#")]),e._v(" Distributing Android apps")]),e._v(" "),o("h2",{attrs:{id:"objective"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),o("p",[e._v("In this section, you will learn about the Google Play program requirements and the steps you must take to publish an app to Google Play.")]),e._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),o("p",[e._v("The diagram below illustrates the steps involved in publishing to Google Play. Though, if you look carefully you'll see that two of the steps verify the work you do in other steps. The steps are:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Register with Google Play")])]),e._v(" "),o("li",[o("p",[e._v("Generate a keypair and certificate")])]),e._v(" "),o("li",[o("p",[e._v("Verify your keystore")])]),e._v(" "),o("li",[o("p",[e._v("Build and sign your app")])]),e._v(" "),o("li",[o("p",[e._v("Verify your app is signed correctly and ready to be uploaded")])]),e._v(" "),o("li",[o("p",[e._v("Upload the app and publish it to Google Play")])])]),e._v(" "),o("h3",{attrs:{id:"register-with-google-play"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#register-with-google-play"}},[e._v("#")]),e._v(" Register with Google Play")]),e._v(" "),o("p",[e._v("To publish apps in Google Play, you will need a Google account. This could be your personal Gmail account or you could register a new account for your company. Then, you must sign up for the Android developer program by visiting "),o("a",{attrs:{href:"https://play.google.com/apps/publish/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("play.google.com"),o("OutboundLink")],1),e._v('. Google charges a one-time $25 fee, which in their words, "encourage[s] higher quality products on the market (e.g. less spammy products)."')]),e._v(" "),o("p",[e._v("To sell apps (charge, not give them for free), you'll need to register for a Google Checkout account as well. Visit "),o("a",{attrs:{href:"https://play.google.com/apps/publish",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://play.google.com/apps/publish"),o("OutboundLink")],1),e._v(", click on Edit profile, and then click \"Setup a Merchant Account at Google Checkout.\" You'll need to supply various bits of business information, including banking and legal details. Setup and approval is relatively quick. Once you're registered, you'll be able to set prices for your app in various currencies and participate in Google's In-App Billing program.")]),e._v(" "),o("h3",{attrs:{id:"generate-a-keypair-and-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-keypair-and-certificate"}},[e._v("#")]),e._v(" Generate a keypair and certificate")]),e._v(" "),o("p",[e._v("You'll need to digitally sign your app before uploading it to Google Play. To do this, you'll need to generate a keypair and certificate. You'll do this once for each app you publish by using the "),o("code",[e._v("keytool")]),e._v(" command, which is supplied with the JDK. In generic form, the syntax is:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("keytool -genkeypair -v -keystore path/file_name -alias alias_name -keyalg RSA -sigalg SHA1withRSA -validity 10000\n")])])]),o("p",[e._v("There are two bits in that you'll need to supply. The first is the "),o("code",[e._v("path/file_name")]),e._v(" which you use to specify the keystore in which your keypair and certificate will be stored. Each keystore file can store many unrelated certificates. So typically, you'd put the keystore file in your home (your user) directory so that it's reasonably secure and backed up with the rest of your data. The "),o("code",[e._v("alias_name")]),e._v(" is the label that identifies which keys you're storing (and which you'll be retrieving later). Set that something specific to your app.")]),e._v(" "),o("p",[e._v("For example, if you were to execute the "),o("code",[e._v("keytool")]),e._v(" command from your home directory for an app named HelloWorld, you might enter:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("keytool -genkeypair -v -keystore android.keystore -alias helloworld -keyalg RSA -sigalg SHA1withRSA -validity 10000\n")])])]),o("p",[e._v("The key algorithm ("),o("code",[e._v("keyalg")]),e._v(") must be RSA for Google Play and the validity period must be 10000 (days) or longer. That works out to 25 years or so, which is the validity period that Google Play system requires. They want to make sure you can provide upgrades to your app for a very long time.")]),e._v(" "),o("p",[e._v("The self-signed certificate algorithm ("),o("code",[e._v("sigalg")]),e._v(") must be SHA-1 ("),o("code",[e._v("SHA1withRSA)")]),e._v(" if you are running your application on devices running Android 4.3.x and prior. Android 4.4 and later supports both SHA-1 ("),o("code",[e._v("SHA1withRSA)")]),e._v(" and SHA-256 ("),o("code",[e._v("SHA256withRSA)")]),e._v(". If you do not supply the "),o("code",[e._v("sigalg")]),e._v(" option, the default value varies with the JDK version you are using. For JDK 1.6, the default algorithm is SHA-1 ("),o("code",[e._v("SHA1withRSA")]),e._v("), and for JDK 1.7, the default algorithm is SHA-256 ("),o("code",[e._v("SHA256withRSA")]),e._v(").")]),e._v(" "),o("p",[e._v("You will be prompted for your name, company name, and locality information, which is used to build the certificate. You'll also be prompted for a password. Make sure you record or remember that password! You'll need to use this same certificate to sign your code each time you update your app. If you don't have that password, you won't be able to release an update. Check out Google Play sometime. You're sure to find \"new\" apps that should have been upgrades. In many cases, those are from developers who forgot their keystore passwords and had to release a whole new version. In doing so, their old users never get update notifications and the app probably loses some of its userbase.")]),e._v(" "),o("h3",{attrs:{id:"verify-your-keystore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verify-your-keystore"}},[e._v("#")]),e._v(" Verify your keystore")]),e._v(" "),o("p",[e._v("Because the certificate is so crucial to publishing (and later updating) your app, we teach \"verification\" as a separate step. Once you've generated your keypair and certificate, you should verify your keystore to ensure that the algorithm is correct, validity period is sufficient, and that you remember your alias and password correctly. Again, you'll do so with the "),o("code",[e._v("keytool")]),e._v(" command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("keytool -list -v -keystore path/file_name\n")])])]),o("p",[e._v("You'll be prompted for your password. The command will list each of the aliases contained in the file and its associated certificate information. Make sure that contact info is correct and make sure the certificate is valid for 25 years or more from the date it was created.")]),e._v(" "),o("h3",{attrs:{id:"build-and-sign-your-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-and-sign-your-app"}},[e._v("#")]),e._v(" Build and sign your app")]),e._v(" "),o("p",[e._v("Once you've generated your certificate, you can build and sign your app. To package your application for distribution, first select the project in the "),o("strong",[e._v("Project Explorer")]),e._v(" view, then in the global tool bar, select "),o("strong",[e._v("Publish")]),e._v(" from the "),o("strong",[e._v("Launch Mode")]),e._v(" drop-down list and "),o("strong",[e._v("Android App Store")]),e._v(" from the "),o("strong",[e._v("Target")]),e._v(" drop-down list. If the "),o("strong",[e._v("Launch Automatically")]),e._v(" option is enabled under the "),o("strong",[e._v("Target")]),e._v(" drop-down list, the application will be automatically launched after the device is selected. If not, you need to click the "),o("strong",[e._v("Launch")]),e._v(" button to start the build process.")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("Distribute")]),e._v(" wizard appears asking you to fill in key pieces of information:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Distribution Location")]),e._v("**😗* Path where the bulit Android application will be copied to.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Keystore Location")]),e._v(": Path to your keystore file that is used to sign your application. Click the "),o("strong",[e._v("New")]),e._v(" button to create a new keystore.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Keystore Password")]),e._v("**😗* Password to your keystore.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Key Alias")]),e._v(": Alias associated with your application's certificate.")])])]),e._v(" "),o("p",[e._v("Click the "),o("strong",[e._v("Publish")]),e._v(" button once you have entered all of the above information. Studio builds your application and generates both an APK file and AAB file in the specified location.")]),e._v(" "),o("p",[e._v('Note that an Android App Bundle (AAB) file will only be built by Titanium 9.0.0 and higher. You cannot install and run an AAB file on an Android device. This is a "publishing" format that only the Google Play app store supports. Once uploaded, Google will then generate multiple APK files from that one AAB file split by CPU architecture and image density, allowing for smaller downloads from the app store to the respective Android device.')]),e._v(" "),o("p",[e._v("After you publish an application for the first time, the next subsequent invocation of the "),o("strong",[e._v("Distribute")]),e._v(" wizard may not ask you for the same exact information and uses your previous settings.")]),e._v(" "),o("h3",{attrs:{id:"build-and-sign-your-app-using-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-and-sign-your-app-using-the-cli"}},[e._v("#")]),e._v(" Build and sign your app using the CLI")]),e._v(" "),o("p",[e._v("To use the Titanium CLI to package your Android application, after you have created your keystore, run the following command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("appc run -p android -T dist-playstore "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-K "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEYSTORE_FILE"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -P "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEYSTORE_PASSWORD"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -L "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEYSTORE_ALIAS"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -O "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUT_DIRECTORY"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),o("p",[e._v("If you omit any of the optional parameters, you will be prompted by the CLI to enter these values.")]),e._v(" "),o("h3",{attrs:{id:"verify-your-app-is-signed-correctly-and-ready-to-be-uploaded"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verify-your-app-is-signed-correctly-and-ready-to-be-uploaded"}},[e._v("#")]),e._v(" Verify your app is signed correctly and ready to be uploaded")]),e._v(" "),o("p",[e._v("You can verify that the APK file was created and digitally signed correctly. You'll do so with another Android SDK command-line tool. At the command prompt, enter:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("jarsigner -verify -verbose path/yourapp.apk\n")])])]),o("p",[e._v("where "),o("code",[e._v("path/yourapp.apk")]),e._v(" is the path and file name associated with your app's APK file. You should see the \"jar verified\" message at the end of a long list of APK file contents. Now you're ready to publish your app.")]),e._v(" "),o("h3",{attrs:{id:"upload-the-app-and-publish-it-to-google-play"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-the-app-and-publish-it-to-google-play"}},[e._v("#")]),e._v(" Upload the app and publish it to Google Play")]),e._v(" "),o("p",[e._v("Visit "),o("a",{attrs:{href:"https://play.google.com/apps/publish",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://play.google.com/apps/publish"),o("OutboundLink")],1),e._v(" and log onto your Google Play account. Click Upload Application to begin the publishing process. Be prepared with the following required assets:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Minimum of two (2) screenshots of your app")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("In one of these sizes: 320 x 480, 480 x 800, or 480 x 854")])]),e._v(" "),o("li",[o("p",[e._v("24-bit PNG or JPEG (no alpha)")])]),e._v(" "),o("li",[o("p",[e._v("Full bleed, no border in art")])]),e._v(" "),o("li",[o("p",[e._v("You may upload screenshots in landscape orientation. The thumbnails will appear to be rotated, but the actual images and their orientations will be preserved.")])])])]),e._v(" "),o("li",[o("p",[e._v("One (1) high resolution app icon – 512 x 512, 32-bit PNG or JPEG")])]),e._v(" "),o("li",[o("p",[e._v("Title (your app's name)")])]),e._v(" "),o("li",[o("p",[e._v('Description, 4000 characters max. Make this "SEO friendly" as it will help drive downloads of your app.')])]),e._v(" "),o("li",[o("p",[e._v("Promo text, 80 characters max. This is the brief summary that appears in some listings pages. Be as SEO friendly as you can in the space permitted.")])]),e._v(" "),o("li",[o("p",[e._v("Application Type and Category, which you'll choose from Google Plays's predefined lists.")])]),e._v(" "),o("li",[o("p",[e._v("Content Rating – you'll choose from High, Medium, Low, and Everyone. This rating helps filter inappropriate apps from those who don't want to see such content.")])]),e._v(" "),o("li",[o("p",[e._v("Contact information – you'll need to provide some way for customers to reach you. This information will be shown to potential buyers.")])])]),e._v(" "),o("p",[e._v("You should read, and then you'll have to check the boxes indicating you agree to the Google Play's terms and conditions. There are many additional assets you could provide, such as videos and larger promotional graphics. You can set a price and currency options for your app if you've set up a Google Checkout account.")]),e._v(" "),o("h4",{attrs:{id:"capturing-screenshots"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#capturing-screenshots"}},[e._v("#")]),e._v(" Capturing screenshots")]),e._v(" "),o("p",[e._v("As noted above, you'll need at least two screenshots to publish your app. You can do this by running your app in the Android emulator and clicking the \"Take screenshot\" button (which has a camera icon) from the emulator's toolbar.")]),e._v(" "),o("h3",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"http://play.google.com/about/developer-content-policy.html#showlanguages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Play Developer Program Policies"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://support.google.com/googleplay/android-developer/bin/answer.py?hl=en&answer=1078870",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Play for Developers: Graphic Assets for your Application"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://play.google.com/apps/publish",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Play"),o("OutboundLink")],1)])])]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("In this section, you learned how to publish your Android app. You learned how to generate the keypair and certificate required to sign your app. You saw how to build and sign your distribution-ready APK and AAB files. And finally, you examined Google Play requirements and learned how you'd upload and publish your app.")])])}),[],!1,null,null,null);t.default=r.exports}}]);