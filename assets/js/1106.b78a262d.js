(window.webpackJsonp=window.webpackJsonp||[]).push([[1106],{2049:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-boilerplates-for-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-boilerplates-for-typescript"}},[t._v("#")]),t._v(" Titanium Boilerplates for TypeScript")]),t._v(" "),a("p",[t._v("This tutorial introduces the first in a series of Titanium boilerplate projects. In this document, we'll cover "),a("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),a("OutboundLink")],1),t._v(" in both Alloy and classic apps.")]),t._v(" "),a("h2",{attrs:{id:"getting-started-with-our-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-our-templates"}},[t._v("#")]),t._v(" Getting started with our templates")]),t._v(" "),a("p",[t._v("All that is required is the TypeScript compiler and a CLI plugin that will compile your "),a("code",[t._v(".ts")]),t._v(" files down to JavaScript.")]),t._v(" "),a("p",[t._v("To get you started quickly with TypeScript, we have prepared two example apps:")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/appcelerator/titanium-boilerplates/tree/master/templates/typescript-alloy-app#readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("typescript-alloy-app"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/appcelerator/titanium-boilerplates/tree/master/templates/typescript-classic-app#readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("typescript-classic-app"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("You can also find them in our new "),a("a",{attrs:{href:"https://github.com/appcelerator/titanium-boilerplates",target:"_blank",rel:"noopener noreferrer"}},[t._v("titanium-boilerplates"),a("OutboundLink")],1),t._v(" repository on GitHub.")]),t._v(" "),a("p",[t._v("These are simple greeter app examples written in TypeScript that is already setup with typings for all Titanium APIs, including Alloy, a base configuration for TypeScript, and linting using TSLint.")]),t._v(" "),a("h2",{attrs:{id:"typescript-support-for-existing-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-support-for-existing-projects"}},[t._v("#")]),t._v(" TypeScript Support for Existing Projects")]),t._v(" "),a("p",[t._v("Enabling TypeScript support in your existing project can be done with the following steps:")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"#install-typescript-compiler"}},[t._v("Install TypeScript compiler")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#create-tsconfig.json"}},[t._v("Create tsconfig.json")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#migrating-your-javascript-files"}},[t._v("Migrating your JavaScript files")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#installing-the-pre-compile-hook"}},[t._v("Installing the pre-compile hook")])])])]),t._v(" "),a("h2",{attrs:{id:"install-typescript-compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-typescript-compiler"}},[t._v("#")]),t._v(" Install TypeScript compiler")]),t._v(" "),a("p",[t._v("First, install the required dependencies via "),a("code",[t._v("npm")]),t._v(" in your project root directory. To save your installed dependencies, create a minimal "),a("code",[t._v("package.json")]),t._v(" with the following content (if your project does not already have one):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "name": "my-typescript-app",\n  "version": "1.0.0",\n  "main": "index.js",\n  "private": true\n}\n')])])]),a("p",[t._v("Now install the TypeScript compiler and the required typings for Titanium and save them to your dev dependencies:")]),t._v(" "),a("p",[a("code",[t._v("npm i typescript @types/titanium -D")])]),t._v(" "),a("h2",{attrs:{id:"create-tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-tsconfig-json"}},[t._v("#")]),t._v(" Create tsconfig.json")]),t._v(" "),a("p",[t._v("Next, create a "),a("code",[t._v("tsconfig.json")]),t._v(" for your project. The configuration slightly differs depending whether you use Alloy or a classic project.")]),t._v(" "),a("p",[t._v("For Alloy projects, the "),a("code",[t._v("tsconfig.json")]),t._v(" looks like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "*": [\n        "*",\n        "app/lib/*"\n      ]\n    },\n    "target": "es5",\n    "module": "commonjs",\n    "lib": [\n      "es2015",\n      "es2015.iterable"\n    ],\n    "downlevelIteration": true,\n    "strict": true,\n    "esModuleInterop": true,\n    "noImplicitAny": false\n  },\n  "include": [\n    "app/**/*"\n  ]\n}\n')])])]),a("p",[t._v("In classic projects, you can omit the "),a("code",[t._v("paths")]),t._v(" compiler options and need to adjust the "),a("code",[t._v("include")]),t._v(" setting to "),a("code",[t._v("Resources/**/*")]),t._v(".")]),t._v(" "),a("p",[t._v("The compiler settings are just reasonable defaults and you can adjust them depending on your needs.")]),t._v(" "),a("h3",{attrs:{id:"alloy-only-copy-alloy-typings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-only-copy-alloy-typings"}},[t._v("#")]),t._v(" ALLOY ONLY: copy Alloy typings")]),t._v(" "),a("p",[t._v("Alloy currently does not provide typings on its own. However, you can copy the typings from the Alloy boilerplate project. Copy the "),a("a",{attrs:{href:"https://github.com/appcelerator/titanium-boilerplates/blob/master/templates/typescript-alloy-app/app/globals.d.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("globals.d.ts"),a("OutboundLink")],1),t._v(" file over to your project’s "),a("code",[t._v("app")]),t._v(" folder.")]),t._v(" "),a("h2",{attrs:{id:"migrating-your-javascript-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-your-javascript-files"}},[t._v("#")]),t._v(" Migrating your JavaScript files")]),t._v(" "),a("p",[t._v("Now you can start migrating your JavaScript files. Don’t worry though – in the first step, you won’t have to touch any of your code. However, it is required that you rename at least one "),a("code",[t._v(".js")]),t._v(" file to "),a("code",[t._v(".ts")]),t._v(". Otherwise the TypeScript compiler would complain that there are no input files.")]),t._v(" "),a("p",[t._v("You didn’t really migrate anything, yet. We recommend reading through "),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#moving-to-typescript-files",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migrating from JavaScript"),a("OutboundLink")],1),t._v(" for further guidelines how to continue from here.")]),t._v(" "),a("h2",{attrs:{id:"installing-the-pre-compile-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-pre-compile-hook"}},[t._v("#")]),t._v(" Installing the pre-compile hook")]),t._v(" "),a("p",[t._v("Finally, the CLI hook triggers the compilation of the TypeScript files. Create a new file "),a("code",[t._v("hooks/pre-compile.js")]),t._v(" in your project and paste the following content to it:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" spawn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child_process'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.typescript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("init")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cli")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build.pre.compile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// explicitly lower priority to make sure this hook runs before the Alloy compiler")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tscPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'..'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.bin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tsc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" tscPath "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compiling TypeScript files'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Executing: node ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        stdio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inherit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        cwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project-dir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("code")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("TypeScript compiler exited with non-zero exit code ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("You can now use TypeScript in your project.")])])}),[],!1,null,null,null);s.default=e.exports}}]);