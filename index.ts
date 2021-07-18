import * as admin from 'firebase-admin';
import express from 'express';

const app = express();
const certificate = require('./ignore/firebase-admin.json');
admin.initializeApp({
    credential: admin.credential.cert(certificate)
});
const deviceToken: string[] = [];

admin.messaging().sendToDevice(deviceToken, {
    data: {
        'data1': 'data1'
    }
}).then(console.log).catch(console.error);
