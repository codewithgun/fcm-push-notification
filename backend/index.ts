import * as express from 'express';
import * as cors from 'cors';
import FirebaseAdmin from './firebase-admin';

let firebaseAdmin = new FirebaseAdmin();
const tokens: string[] = [];
const app = express();
app.use(express.json());
app.use(cors());
app.post('/join', function (req, res) {
	const { token } = req.body;
	if (!token) {
		res.status(400).json({ error: 'Token required' });
	} else {
		let tokenExists = tokens.find((t) => t == token);
		if (!tokenExists) {
			tokens.push(token);
			firebaseAdmin.messaging.send({
				data: {
					users: JSON.stringify(tokens),
				},
				topic: 'join',
			});
		}
		console.log(tokens);
		res.status(200).json({ data: 'Successfully joined' });
		firebaseAdmin.messaging.sendMulticast({
			data: {
				event: 'join',
				token,
			},
			tokens,
		});
	}
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
