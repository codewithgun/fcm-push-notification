import * as admin from 'firebase-admin';

const certificate = require('./../ignore/firebase-admin.json');

export default class FirebaseAdmin {
    deviceToken: string[] = [];
    messaging: admin.messaging.Messaging;
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(certificate)
        });
        this.messaging = admin.messaging();
    }
}
