import * as admin from 'firebase-admin';
const certificate = require('./ignore/firebase-admin.json');

admin.initializeApp({
    credential: admin.credential.cert(certificate)
});