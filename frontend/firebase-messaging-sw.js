importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA04XQbMocvlirJHFSQ2erMg3-Ltx1KcHE",
    authDomain: "testing-1f0ca.firebaseapp.com",
    projectId: "testing-1f0ca",
    storageBucket: "testing-1f0ca.appspot.com",
    messagingSenderId: "1089017061441",
    appId: "1:1089017061441:web:b83e2244190a04bb5da6c0",
    measurementId: "G-5ST3LVNHSM"
});

const messaging = firebase.messaging();
//The below was for closed browser
messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle,
        notificationOptions);
});