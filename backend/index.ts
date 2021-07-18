import * as express from 'express';
import FirebaseAdmin from './firebase-admin';

let firebaseAdmin = new FirebaseAdmin();
firebaseAdmin.messaging.sendToDevice('d6PMTKKcIMcZxV_S304r3r:APA91bHHzEXP0h__QYHdai14TeOT-ceOEopVp9M9cydQQK0qeXuItBF2U4BLouP9E9RzoTzdrC-imWMkMpsM31h5qxoxukSli5NJOYoVVdFHqSwW3VbdV0Tt0BlWCrswrap8o1tg2TEz', {
    data: {
        'hello': 'world'
    }
}).then(console.log).catch(console.error);
const app = express();

