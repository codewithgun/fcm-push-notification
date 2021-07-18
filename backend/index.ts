import * as express from 'express';
import * as cors from 'cors';
import FirebaseAdmin from './firebase-admin';

let firebaseAdmin = new FirebaseAdmin();
const tokens: string[] = [];
const app = express();
app.use(express.json());
app.use(cors());
app.post('/join', function(req, res){
    console.log(req.body);
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});