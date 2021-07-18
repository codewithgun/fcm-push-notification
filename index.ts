import * as admin from 'firebase-admin';
const certificate = require('./ignore/firebase-admin.json');

admin.initializeApp({
    credential: admin.credential.cert(certificate)
});
const tokens: string[] = [
    'd6PMTKKcIMcZxV_S304r3r:APA91bHHzEXP0h__QYHdai14TeOT-ceOEopVp9M9cydQQK0qeXuItBF2U4BLouP9E9RzoTzdrC-imWMkMpsM31h5qxoxukSli5NJOYoVVdFHqSwW3VbdV0Tt0BlWCrswrap8o1tg2TEz'
];

admin.messaging().sendToDevice(tokens, {
    data: {
        'data1': 'data1'
    }
}).then(console.log).catch(console.error);
