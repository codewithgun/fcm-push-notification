importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');

firebase.initializeApp({
	apiKey: 'AIzaSyCPFnMFMdWnX3D1f8xwp4nIF9bt96_gwoY',

	authDomain: 'test-project-27ad3.firebaseapp.com',

	projectId: 'test-project-27ad3',

	storageBucket: 'test-project-27ad3.appspot.com',

	messagingSenderId: '868281081163',

	appId: '1:868281081163:web:2092510b21b5a497419cce',
});

const messaging = firebase.messaging();
//The below was for closed browser
messaging.onBackgroundMessage(function (payload) {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	const notificationTitle = 'Background Message Title';
	const notificationOptions = {
		body: 'Background Message body.',
		icon: '/firebase-logo.png',
	};
	self.registration.showNotification(notificationTitle, notificationOptions);
});
