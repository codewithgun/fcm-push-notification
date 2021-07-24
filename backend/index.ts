import * as express from 'express';
import * as cors from 'cors';
import FirebaseAdmin from './firebase-admin';

let firebaseAdmin = new FirebaseAdmin();
const tokens: string[] = [];
const app = express();
app.use(express.json());
app.use(cors());

// Send can trigger service worker
// firebaseAdmin.messaging.send({
//     data : {
//         hello: 'world'
//     },
//     token: 'd6PMTKKcIMcZxV_S304r3r:APA91bHHzEXP0h__QYHdai14TeOT-ceOEopVp9M9cydQQK0qeXuItBF2U4BLouP9E9RzoTzdrC-imWMkMpsM31h5qxoxukSli5NJOYoVVdFHqSwW3VbdV0Tt0BlWCrswrap8o1tg2TEz'
// });

app.post('/join', function (req, res) {
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
			firebaseAdmin.messaging.subscribeToTopic(tokens, 'join').then(console.log).catch(console.error);
		}
		console.log(tokens);
		res.status(200).json({ data: 'Successfully joined' });
		firebaseAdmin.messaging.send({
			data: {
				tokens: JSON.stringify(tokens),
			},
			topic: 'join',
		});
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
