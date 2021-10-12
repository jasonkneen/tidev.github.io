(window.webpackJsonp=window.webpackJsonp||[]).push([[1102],{2045:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"icloud-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icloud-services"}},[t._v("#")]),t._v(" iCloud Services")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Titanium applications running on iOS devices can backup data to Apple's iCloud service. By default, iOS schedules to backup application data to iCloud once a day if the device is plugged in, inactive and has an internet connection. Only files saved in the"),a("code",[t._v("applicationDataDirectory")]),t._v(" and "),a("code",[t._v("applicationSupportDirectory")]),t._v("directories are saved unless you specifically set the "),a("code",[t._v("remoteBackup")]),t._v(" property on the file to false. Files in the Resources (app bundle), Cache and tmp directories are not backed up. If you want to backup a file to iCloud, make sure it is in the data directory.")]),t._v(" "),a("p",[t._v("To use iCloud's backup feature, you need to setup a distribution profile with iCloud services enabled, then package your application using the distribution profile.")]),t._v(" "),a("h3",{attrs:{id:"apple-best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apple-best-practices"}},[t._v("#")]),t._v(" Apple best practices")]),t._v(" "),a("p",[t._v("Apple recommends that only files created by users or data that cannot be recreated by the application should be backed up, to save time uploading data and iCloud storage space. Use the application's data directory (called the "),a("code",[t._v("Document")]),t._v(" directory in the iOS filesystem) to store user data and critical files.")]),t._v(" "),a("p",[t._v("If a file can be downloaded or recreated by the application, the application should disable backing up that file. Apple recommends using the application support directory (called the "),a("code",[t._v("Library/Application Support")]),t._v(" directory in the iOS filesystem) to store downloaded content and data that the application can recreate. Since, by default, files in the application support directory are backed up, you need to explicitly disable backing them up if needed.")]),t._v(" "),a("h2",{attrs:{id:"setup-a-distribution-profile-with-icloud-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-a-distribution-profile-with-icloud-services"}},[t._v("#")]),t._v(" Setup a Distribution Profile with iCloud Services")]),t._v(" "),a("p",[t._v("To use the iCloud service, you need to create a Distribution Profile, which requires a Distribution Certificate and an App ID with iCloud services enabled. If you have created a Distribution Profile before, the only difference is you need to create an Explicit App ID with the iCloud services enabled.")]),t._v(" "),a("h3",{attrs:{id:"register-an-app-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-an-app-id"}},[t._v("#")]),t._v(" Register an App ID")]),t._v(" "),a("p",[t._v("You need to register an App ID for your application.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Log in to the "),a("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple Developer Member Center"),a("OutboundLink")],1),t._v(" as the Team Agent or Admin.")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v("Certificates, Identifiers & Profiles")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v("Identifiers")]),t._v(", then click the add ("),a("strong",[t._v("+")]),t._v(") button near the top-right corner.")])]),t._v(" "),a("li",[a("p",[t._v("Under "),a("strong",[t._v("App ID Description")]),t._v(", enter a value in the "),a("strong",[t._v("Name")]),t._v(" field.")])]),t._v(" "),a("li",[a("p",[t._v("Select the "),a("strong",[t._v("App ID Prefix")]),t._v(" to use. (You cannot use a Wildcard App ID for an application with push notifications.)")])]),t._v(" "),a("li",[a("p",[t._v("In the the "),a("strong",[t._v("App ID Suffix")]),t._v(" section, select "),a("strong",[t._v("Explicit App ID")]),t._v(" and enter your application's ID. This is the value of the "),a("code",[t._v("<id>")]),t._v(" element in your project's "),a("code",[t._v("tiapp.xml")]),t._v(" file.")])]),t._v(" "),a("li",[a("p",[t._v("Under "),a("strong",[t._v("App Services")]),t._v(", check the "),a("strong",[t._v("iCloud")]),t._v(" checkbox.")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v("Continue")]),t._v(", "),a("strong",[t._v("Submit")]),t._v(", and "),a("strong",[t._v("Done")]),t._v(" to complete the process.")])])]),t._v(" "),a("p",[t._v("After creating your App ID, follow the directions from "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(" to create your Distribution Certificate and Distribution Profile, then use the certificate and profile to package your application.")],1),t._v(" "),a("h2",{attrs:{id:"disable-icloud-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-icloud-backup"}},[t._v("#")]),t._v(" Disable iCloud backup")]),t._v(" "),a("p",[t._v("By default, files in the "),a("code",[t._v("applicationDataDirectory")]),t._v("and"),a("code",[t._v("applicationSupportDirectory")]),t._v("directories are backed up to iCloud unless you set the "),a("code",[t._v("remoteBackup")]),t._v("property of the file to false. The file needs to exist before setting the property. Setting the "),a("code",[t._v("remoteBackup")]),t._v(" property to false also disables backing up the file using iTunes. iTunes backs up the application data locally.")]),t._v(" "),a("p",[t._v("For example, to disable backing up the entire application support directory, you need to recursively set the property on every file in the folder and its subfolders.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("walk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("folder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dir_files "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDirectoryListing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dir_files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir_files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remoteBackup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nativePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Subfolder not a file")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nativePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastIndexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" nativePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("walk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("walk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationSupportDirectory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Database files created using the Titanium.Database API are not stored in the data or application support directories. To disable backing up a database file, use the "),a("a",{attrs:{href:"#!/api/Titanium.Database.DB-property-file"}},[a("code",[t._v("file")])]),t._v(" property after opening a database to access the database file, then set the "),a("code",[t._v("remoteBackup")]),t._v(" property on the database file to false.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foostore'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remoteBackup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h2",{attrs:{id:"perform-a-manual-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perform-a-manual-backup"}},[t._v("#")]),t._v(" Perform a manual backup")]),t._v(" "),a("p",[t._v("If you do not want to wait for iOS to backup your files, you can manually perform a backup. To perform a manual backup to iCloud, on the iOS device:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open "),a("strong",[t._v("Settings.")])])]),t._v(" "),a("li",[a("p",[t._v("Navigate to "),a("strong",[t._v("iCloud")]),t._v(" > "),a("strong",[t._v("Storage & Backup.")])])]),t._v(" "),a("li",[a("p",[t._v("Make sure "),a("strong",[t._v("iCloud Backup")]),t._v(" is switched on.")])]),t._v(" "),a("li",[a("p",[t._v("Tap "),a("strong",[t._v("Backup Now")]),t._v(".")])])]),t._v(" "),a("p",[t._v("To check how much space the backup uses:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open "),a("strong",[t._v("Settings.")])])]),t._v(" "),a("li",[a("p",[t._v("Navigate to "),a("strong",[t._v("iCloud")]),t._v(" > "),a("strong",[t._v("Storage & Backup")]),t._v(" > "),a("strong",[t._v("Manage Storage")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Tap "),a("strong",[t._v("This Device")]),t._v(".")])])]),t._v(" "),a("p",[t._v("The device displays an itemized list of how much iCloud storage space each application uses.")]),t._v(" "),a("h2",{attrs:{id:"test-restoring-an-icloud-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-restoring-an-icloud-backup"}},[t._v("#")]),t._v(" Test restoring an iCloud backup")]),t._v(" "),a("p",[t._v('To test restoring an iCloud backup, you need to reset your device and erase the application settings and content. After the reset, during the "Set Up iPhone" step of the iOS Setup Assistant, select to '),a("strong",[t._v("Restore from iCloud Backup")]),t._v(" and choose a previous device backup to start restoring your device.")]),t._v(" "),a("p",[t._v("Before proceeding make sure have a current backup of your device. See the previous section to perform a manual backup.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open "),a("strong",[t._v("Settings")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Navigate to "),a("strong",[t._v("General")]),t._v(" > "),a("strong",[t._v("Reset")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Tap "),a("strong",[t._v("Erase all settings and content")]),t._v(". A dialog appears asking you to confirm your selection. After confirming, the device will reset.")])]),t._v(" "),a("li",[a("p",[t._v("After the device resets, the iOS Setup Assistant appears. Follow the initial steps to select your language, region, etc.")])]),t._v(" "),a("li",[a("p",[t._v('Once you have come to the "Set Up iPhone" step, tap '),a("strong",[t._v("Restore from iCloud Backup")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v('In the "Choose backup" step, select the backup to use to restore your device.')])])]),t._v(" "),a("p",[t._v("iOS will start restoring your device based on the backup chosen.")]),t._v(" "),a("h2",{attrs:{id:"further-reading-and-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading-and-references"}},[t._v("#")]),t._v(" Further reading and references")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/icloud/documentation/data-storage/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Data Storage Guidelines"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/PerformanceTuning/PerformanceTuning.html#//apple_ref/doc/uid/TP40007072-CH8-SW9",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS App Programming Guide: App Backup Best Practices"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://support.apple.com/kb/HT1766",target:"_blank",rel:"noopener noreferrer"}},[t._v("Back up and restore your iOS device with iCloud or iTunes"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://support.apple.com/kb/ht2109",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transfer content from an iPhone, iPad, or iPod touch to a new device"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=n.exports}}]);