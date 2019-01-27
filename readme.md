
Warning: Still a WIP (even this readme).

## Try it out here:

- PWA (recommended version, can be used from any device with a web browser): https://wavex-app.firebaseapp.com
- Native Android: https://play.google.com/store/apps/details?id=com.wavex.app&hl=en
- Windows 10: (Microsoft Store link here)
- Windows 7, 8, MacOS: (possible electron version here)

Note on supported browsers: Edge, Chrome, Firefox, Samsung Internet, Safari (experience may be broken right now on iOS Safari, working on this)

Non supported browsers: IE11, Kinda Safari mobile

# Wavex

Hello! Wavex is a demo PWA (totally functional though, and I use it all the time) that demonstrates a real world way to efficiently build high quality, cross platform apps using the web that feel "native" on each device. Wavex is built with [Stencil](https://stenciljs.com/) (no Angular, React, Vue etc), [Ionic 4](https://beta.ionicframework.com) and [Capacitor](https://capacitor.ionicframework.com/).

Wavex is currently available as a PWA, and has been submitted as an Android app to the Google Play STore and as a UWP PWA for Windows 10 devices in the Microsoft store. (I will update this when it is live on those platforms).

## How did I build this? 

As stated above I used Stencil, Ionic 4 and Capacitor to build this app. By choosing the combination of Stencil and Ionic 4 I was able to easily achieve great "cold start" (no cache yet) performance for the user (around 3.5 seconds to interactive on a Moto 4G running in a 3g environment using the PWA) and a great looking UI while also enjoying a simple dev experience. You can read more about these two technologies at the links above.

## Cross Platform

The main platform for this app is the PWA version. You can make a VERY strong argument that this means it is cross platform out of the box since all you need is a web browser to access it but alas, most people think of Cross Platform as including "native" apps for platforms too.

For the native Android version of this app I took advantage of the Capacitor project from Ionic. Capacitor brings many advantages to the cross platform game including simplicity over other solutions (like Cordova), ease of use, baked in PWA support and easy to use plugins. I mainly chose Capacitor because of its baked in support for PWAs as the main platform for this app is the PWA and Capacitor respects this while also making it easy to package this PWA as a native Android app.

On the Windows 10 side of things, we at Microsoft have made it extremely easy to submit your PWA to the Microsoft Store so that people can run your PWA just like they would any normal UWP app on Windows 10. This app also takes advantage of some of the WinRT APIs that we allow you to access through your PWA when it is running as a UWP app from the store. You can read more about this [here](https://developer.microsoft.com/en-us/windows/pwa).



