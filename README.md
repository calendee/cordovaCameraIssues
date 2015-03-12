# cordovaCameraIssues
Sample app demonstrating issues with Cordova Camera plugin

## Bounty
I'm offering $250 to the first person to solve my issues with the Cordova Camera plugin.  The fix must work in my real app as well as the sample app in this repo. It must solve both of the Bounty Issues described below. It must work in apps using Cordova 3.8.0 using the Camera plugin (forked if necessary).

I will be the sole judge of the "fix".  Whomever provides an update Camera plugin link that I can build with and test against and confirm all works properly will be the winner.

Your code must then be submitted as a PR to the official Cordova plugin repo.

### Bounty Issues
#### Base App (light memory load)
- On various devices and versions, opening the camera sometimes has a black viewfinder. The camera shows no image.  However, you CAN take a picture and the resultant image will appear.
- On various devices and versions, the viewfinder works just fine and you can take a picture.  However most loads of the camera afterwards have the black viewfinder.

#### Heavy App (higher memory load)
- On various devices and versions, opening the camera results in 3 issues/errors:
 - Xcode : "Snapshotting a view that has not been rendered results in an empty snapshot. Ensure your view has been rendered at least once before snapshotting or snapshot after screen updates"
 - Xcode : "Received memory warning"
 - Xcode crashes the app with : "Terminated due to Memory Pressure"

## Instructions 

### Base App

```sh
ionic start cordovaCameraIssues https://github.com/calendee/cordovaCameraIssues
cd cordovaCameraIssues
bower install ngCordova
cordova plugin add org.apache.cordova.camera
ionic platform add ios
$ Now, Run on device via `ionic run ios` or run from Xcode
```
### Heavy Memory App

Checkout the "memoryHog" branch.
Copy the "app.js" code into the app generated above.
```sh
# Now, Run on device via `ionic run ios` or run from Xcode
```
This should put about 40MB in memory.  However, the Xcode tools just show the app running at about 19MB.

## General Issues

**NOTE** : Most of these memory issues were not occurring in Cordova 3.7.0.  The black viewfinder issues were specific to iOS 8 on some iPhone 5S's.  Now, they appear on iPhone 4S, iPod Touch, and iPhone 5S (ios 7 & 8).

- iOS 7 : Camera opens with black viewfinder.  Image capture DOES work though
- iOS 8 : Camera works properly first time. Subsequent camera instances open with black viewfinder.  Image capture does work
- In other apps with larger memory footprint, opening camera frequently results in issues described here:
 - https://issues.apache.org/jira/browse/CB-8542
 - https://issues.apache.org/jira/browse/CB-7641
 - Terminated Due to Memory Pressure
 - Snapshotting a view that has not been rendered results in an empty snapshot. Ensure your view has been rendered at least once before snapshotting or snapshot after screen updates.

## Feedback

Please provide feedback on how this sample runs for you on any/all devices you have access to.
Please open a ticket and provide the following information:

- Cordova CLI version  ( `cordova --version`)
- iOS Device Type and Version ( iPhone 5S 7.1.2, etc)
- Any error output from Xcode, command line
- Results of 3 or more attempts to capture an image (Works fine once, works fine always, Black viewfinder all the time, got error XXXXX) - the more detail the better