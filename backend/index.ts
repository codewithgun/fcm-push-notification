import express from 'express';
import cors from 'cors';
import * as FirebaseAdminSdk from 'firebase-admin';

const certificate = require('./../ignore/firebase-admin.json');

const firebaseAdmin = FirebaseAdminSdk.initializeApp({
	credential: FirebaseAdminSdk.credential.cert(certificate),
});

const tokens: string[] = [];
const app = express();
app.use(express.json());
app.use(cors());

// Send can trigger service worker
// firebaseAdmin
// 	.messaging()
// 	.send({
// 		data: {
// 			score: '850',
// 			time: '2:45',
// 		},
// 		token: 'cjWaH3FrfWTKTEsF5ht6qX:APA91bGyYRbGwBUOJTcuzfQm0tFY9nftns2nf9dCquby3C50b4kGTQO8TvB0qsX2dgzjRRotgzHmPCTgo-VIE0HgRGMQSV_HU8l7iFgbNKypyzxypprD8tsNN0E9DAFvAIfyQZuN2sVr'
// 	})
// 	.then(console.log)
// 	.catch(console.error);

app.get('/sendMessage', async function (req, res) {
	firebaseAdmin.messaging().send({
		data: {
			message: 'No message',
		},
		token: tokens[0],
	});
	res.json();
});

app.post('/join', async function (req, res) {
	const { token } = req.body;
	if (!token) {
		res.status(400).json({ error: 'Token required' });
	} else {
		let tokenExists = tokens.find((t) => t == token);
		if (!tokenExists) {
			tokens.push(token);
			// firebaseAdmin.messaging.send({
			// 	data: {
			// 		users: JSON.stringify(tokens),
			// 	},
			// 	topic: 'join',
			// });
			// let result = await firebaseAdmin.messaging.subscribeToTopic(tokens, 'join');
			// console.log(result);
		}
		console.log(tokens);
		res.status(200).json({ data: 'Successfully joined' });
		// firebaseAdmin.messaging.send({
		// 	data: {
		// 		tokens: JSON.stringify(tokens),
		// 	},
		// 	topic: 'join',
		// });
		// Send to multiple tokens at one shot
		// firebaseAdmin.messaging.sendMulticast({
		// 	data: {
		// 		event: 'users',
		// 		tokens: JSON.stringify(tokens),
		// 	},
		// 	tokens,
		// });
	}
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
