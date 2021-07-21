(window.webpackJsonp=window.webpackJsonp||[]).push([[909],{1764:function(e,t,i){"use strict";i.r(t);var a=i(21),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"performance-issues"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#performance-issues"}},[e._v("#")]),e._v(" Performance Issues")]),e._v(" "),i("p",[e._v("If you are having issues with the speed of Studio, this document provides information you can use to diagnose the problem.")]),e._v(" "),i("h2",{attrs:{id:"building-workspace-taking-longer-than-expected"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#building-workspace-taking-longer-than-expected"}},[e._v("#")]),e._v(" Building Workspace taking longer than expected")]),e._v(" "),i("p",[e._v("There are several reasons why building a workspace could take a long time to index. We suggest trying the steps below in succession to resolve the issue.")]),e._v(" "),i("h3",{attrs:{id:"studio-is-indexing-extra-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#studio-is-indexing-extra-files"}},[e._v("#")]),e._v(" Studio is indexing extra files")]),e._v(" "),i("p",[e._v("It's possible that you have a large directory of generated or resource files that don't need to be indexed. To exclude items from indexing:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Right-click on a project's folder.")])]),e._v(" "),i("li",[i("p",[e._v("Select Build > Exclude from build.")])])]),e._v(" "),i("h3",{attrs:{id:"studio-is-encountering-an-exception-during-indexing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#studio-is-encountering-an-exception-during-indexing"}},[e._v("#")]),e._v(" Studio is encountering an exception during indexing")]),e._v(" "),i("p",[e._v("Check the Studio log file. It may be a bug, or the index is corrupt.")]),e._v(" "),i("ol",[i("li",[e._v("Help > Studio > View Log File")])]),e._v(" "),i("p",[e._v("If you notice things like , it's likely your index is corrupt. See below.")]),e._v(" "),i("p",[e._v("If you notice issues mentioned in "),i("a",{attrs:{href:"https://jira.appcelerator.org/browse/APSTUD-2260",target:"_blank",rel:"noopener noreferrer"}},[e._v("APSTUD-2260"),i("OutboundLink")],1),e._v(" ( UTFDataFormatException in DiskIndex.readString() ), it is likely your index is corrupt. See "),i("a",{attrs:{href:"#the-index-is-corrupt"}},[e._v("The index is corrupt")]),e._v(" section below.")]),e._v(" "),i("h3",{attrs:{id:"a-validator-or-builder-is-enabled-that-is-taking-a-long-time-to-process-each-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#a-validator-or-builder-is-enabled-that-is-taking-a-long-time-to-process-each-file"}},[e._v("#")]),e._v(" A validator or builder is enabled that is taking a long time to process each file")]),e._v(" "),i("p",[e._v("Validators for JavaScript (like JSLint) can take a "),i("em",[e._v("long")]),e._v(" time to process many files. You may wish to only have them enabled on reconcile only")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Open Preference > Studio > Validation")])]),e._v(" "),i("li",[i("p",[e._v('Disable items on "build" that seem like likely culprits')])]),e._v(" "),i("li",[i("p",[e._v("Select OK")])])]),e._v(" "),i("p",[e._v("Studio will rebuild using the new settings.")]),e._v(" "),i("h3",{attrs:{id:"the-index-is-corrupt"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-index-is-corrupt"}},[e._v("#")]),e._v(" The index is corrupt")]),e._v(" "),i("p",[e._v("Studio indexes your files in order to collect metadata about the project for use in content assist. There are two indexes.")]),e._v(" "),i("h4",{attrs:{id:"local-project-index"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#local-project-index"}},[e._v("#")]),e._v(" Local project index")]),e._v(" "),i("p",[e._v("This stores the contents for your local project")]),e._v(" "),i("p",[e._v("To clear your local project index")]),e._v(" "),i("ol",[i("li",[i("p",[i("strong",[e._v("Project > Clean...")])])]),e._v(" "),i("li",[i("p",[e._v('Either choose your project, or "All Projects"')])])]),e._v(" "),i("h4",{attrs:{id:"global-index"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#global-index"}},[e._v("#")]),e._v(" Global index")]),e._v(" "),i("p",[e._v("This contains information about the core JavaScript libraries, etc.")]),e._v(" "),i("p",[e._v("To clear your global index")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Find your workspace directory on disk")])]),e._v(" "),i("li",[i("p",[e._v("Locate the .metadata folder indside (you may need to show hidden files)")])]),e._v(" "),i("li",[i("p",[e._v("Delete .metadata/.plugins/com.aptana.index.core/*.index (index file/files for the JS, HTML etc.).")])]),e._v(" "),i("li",[i("p",[e._v("Delete .metadata/.plugins/com.aptana.editor.php/*.index (index file/files for PHP).")])]),e._v(" "),i("li",[i("p",[e._v("Restart Studio")])])]),e._v(" "),i("h3",{attrs:{id:"if-that-still-does-not-help"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#if-that-still-does-not-help"}},[e._v("#")]),e._v(" If that still does not help...")]),e._v(" "),i("p",[e._v("There are diagnoses you can perform that will help us understand the issue:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Turn on Show Normally Hidden Processes: "),i("strong",[e._v("Preferences")]),e._v(" > "),i("strong",[e._v("Studio")]),e._v(" > "),i("strong",[e._v("Troubleshooting")]),e._v(" > "),i("strong",[e._v("Show Normally Hidden Processes")])])]),e._v(" "),i("li",[i("p",[e._v("In the same preference page, turn on the following:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Debug Level: All")])]),e._v(" "),i("li",[i("p",[e._v("Debug specific components")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("com.aptana.core/debug/builder")])]),e._v(" "),i("li",[i("p",[e._v("com.aptana.core/debug/builder/indexer")])]),e._v(" "),i("li",[i("p",[e._v("com.aptana.core/debug/builder/participants")])])])])])]),e._v(" "),i("li",[i("p",[e._v("Then, clear the log file: "),i("strong",[e._v("Help")]),e._v(" > "),i("strong",[e._v("Studio")]),e._v(" > "),i("strong",[e._v("Clear Log File")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Restart Studio")])])]),e._v(" "),i("p",[e._v("Attach your findings to "),i("a",{attrs:{href:"https://jira.appcelerator.org/browse/APSTUD-2050",target:"_blank",rel:"noopener noreferrer"}},[e._v("APSTUD-2050"),i("OutboundLink")],1),e._v(' ( "Building Workspace" job takes a while to complete ). You should see entries like:')]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("!ENTRY com.aptana.core 1 0 2012-08-15 14:44:09.007\n!MESSAGE (Build 0.0.0.qualifier) [INFO] com.aptana.core/debug/builder Performing incremental unified build on project 'geolocationClient'\n\n!ENTRY com.aptana.buildpath.core 1 0 2012-08-15 14:44:09.069\n!MESSAGE (Build 0.0.0.qualifier) [INFO] com.aptana.core/debug/builder/participants Executed build participant 'Index Build Participant' on 'file:/Users/ingo/Documents/Aptana%20Workspaces/Aptana%20Studio%203%20Workspace/geolocationClient/LICENSE' in 10.842 ms.\n\n...\n\n!ENTRY com.aptana.core 1 0 2012-08-15 14:44:09.556\n!MESSAGE (Build 0.0.0.qualifier) [INFO] com.aptana.core/debug/builder Finished unified build of 'geolocationClient'. Took 589.057 ms.\n")])])]),i("h2",{attrs:{id:"high-cpu-usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#high-cpu-usage"}},[e._v("#")]),e._v(" High CPU usage")]),e._v(" "),i("p",[e._v("Diagnosing high CPU usage is relatively straightforward, but requires a small amount of setup. However, the information gained here is invaluable to the developers.")]),e._v(" "),i("p",[e._v("In order to do so, we will use a tool called VisualVM. It is included with many Java distributions, so you may not even need to install it.")]),e._v(" "),i("h3",{attrs:{id:"visualvm-installation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#visualvm-installation"}},[e._v("#")]),e._v(" VisualVM installation")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Check to see if it\'s already installed. You may be able to run "visualvm" or "jvisualvm" on the command line.')])]),e._v(" "),i("li",[i("p",[e._v("If not, follow the steps "),i("a",{attrs:{href:"http://visualvm.java.net/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v("which involve downloading a .zip file and running the program inside.")]),e._v(" "),i("ol",[i("li",[e._v("Ubuntu users can use "),i("code",[e._v("apt-get virtualvm")])])])]),e._v(" "),i("li",[i("p",[e._v("It will go through a brief step calibrating your machine.")])])]),e._v(" "),i("h3",{attrs:{id:"find-the-studio-process"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#find-the-studio-process"}},[e._v("#")]),e._v(" Find the Studio process")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Shut down other Java applications other than Studio to make it easiest to find Studio in the list.")])]),e._v(" "),i("li",[i("p",[e._v('Once Visual VM has started, you will see at least two processes in the left-hand column. Studio is likely to be the "Unknown Application".')])]),e._v(" "),i("li",[i("p",[e._v("Double-click on that item.")])])]),e._v(" "),i("p",[e._v("A pane opens showing details about the process")]),e._v(" "),i("h3",{attrs:{id:"start-recording-cpu-usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#start-recording-cpu-usage"}},[e._v("#")]),e._v(" Start recording CPU usage")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Switch to the "Sampler" tab, and click "CPU".')])]),e._v(" "),i("li",[i("p",[e._v('Sort by "Self Time (CPU)" to see if what are the most active threads.')])]),e._v(" "),i("li",[i("p",[e._v("Start replicating the item which provokes CPU usage.")])]),e._v(" "),i("li",[i("p",[e._v('Once you are complete, click the "snapshot" button.')])]),e._v(" "),i("li",[i("p",[e._v("Click on the small disk icon to the left to save the file to disk. Give it a descriptive name.")])]),e._v(" "),i("li",[i("p",[e._v("Attach that file to a JIRA ticket.")])])]),e._v(" "),i("h3",{attrs:{id:"alternate-approaches"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#alternate-approaches"}},[e._v("#")]),e._v(" Alternate approaches")]),e._v(" "),i("p",[e._v("Two other things to try that might highlight the issue")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Turn on "),i("strong",[e._v("Preferences > Studio > Troubleshooting > Show Normally Hidden Processes")])])]),e._v(" "),i("li",[i("p",[e._v("In the same preference page, turn on")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Debug Level: All")])]),e._v(" "),i("li",[i("p",[e._v("Debug specific components")]),e._v(" "),i("ol",[i("li",[e._v("com.aptana.core/debug/shell")])])])])]),e._v(" "),i("li",[i("p",[e._v("Help > Studio > Clear Log File")])]),e._v(" "),i("li",[i("p",[e._v("Cause the CPU usage spike.")])]),e._v(" "),i("li",[i("p",[e._v("Check both the Progress View and the log file to see if any obvious processes are causing the problems.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);