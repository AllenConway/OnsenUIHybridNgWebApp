# OnsenuiHybridNgWebapp

##Setup
1. ng build –prod –base-href
This is required to output the ng files to the www folder that Cordova uses when running from emulator

Building an OnsenUI app
-----------------------
Install VSCode
	
Install Monaca Localkit (requires a free account, link to GitHub)
	https://monaca.io/localkit.html
Toggle terminal in VSCode (Ctrl+`)
1. Install Cordova
	npm install -g cordova
2. Install Cordova Tools Extension for VSCode (AKA "TACO" Tools for Adobe Apache Cordova" when using FULL VS)
	Ctrl+Shift+P
	Install Extension
	cordova -> install
3. Create a Cordova project from the command line (do not create the directly folder containing the project: Cordova will do this so use a command line outside VS Code)
cordova create OnsenUIHybridNgWebApp io.onsen.OnsenUIHybridWebApp “OnsenUIHybridNgWebApp”
https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command
4. Now open in VS Code and add platforms to the app based on what you're deploying
	cordova platform add android
	cordova platform add ios
xx. Open Monaca
	Press Open In and select Visual Studio Code
	press preview
	Make changes in VSCode - see updates real time
	stop prview mode
5. Configure debugger to be a Cordova Project
                    Click ‘Add Configuration’ and select ‘Cordova’
	Note: this adds a launch.json file with all t he settings needed
	without running on a mac (ios), or having android sdk toolkit installed, you can only open in browser
	open in the browser, click on the \cordova-simulate tab to change device behavor
                   At this point you can run the app using the debugger (Simulate Android in browser) and you will be testing the barebones Cordova project (not yet OnsenUI)
6. Create an Angular-cli project in the same directory, but this will create a sub-folder which we will cut and move files to root directory of Cordova app
Ng new onsenui-hybrid-ng-webapp –routing
Move all files except project.json, project-lock.json, and node_modules to root of Cordova project
Update angular.json to build to www instead of dist
The angular app in order to run in Cordova will need to be built via ng build –prod
6. Make the project an OnsenUI project
                   

7. Run with an Android emulator
	If you try to run without setting up the Android SDK and environmental variables you'll get the following:
		"Error: Failed to find 'ANDROID_HOME' environment variable. Try setting it manually."
	Install Java Development Kit and Android Studio (follow tutorials online)
	Open SDK Manager from configure menu in Android Studio, make sure SDK Tools are updated for Android version needed
		see: https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#setting-environment-variables
    setup environmental varibales
		ANDROID_HOME: C:\Users\allenc\AppData\Local\Android\Sdk
		JAVA_HOME: C:\Progra~1\Java\jdk1.8.0_152 Note: (Progra~1 = Program Files)
		PATH: (Edit and add 2 entries: C:\Users\allenc\AppData\Local\Android\Sdk\platform-tools and C:\Users\allenc\AppData\Local\Android\Sdk\tools)
	Create a basic project in Android Studio
		Accept Licenses
		Download Missing Packages Prompted
	Go to Tools -> Android -> AVD Manager
		If there are missing emulators stating !Download, select and download
		Add a new emulator that is correct and download the needed files (I did a Pixel XL on Android 7.1.1 Nougat)
	Go back to VSCode and "Run Android on emulator"
		this time it works, on 1st attempt Gradle (how Cordova for Android projects are built) will download, unzip and start


This project is using the [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
