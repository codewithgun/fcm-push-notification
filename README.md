# FCM-push notification
## Server push configuration
Install firebase-admin, which is for server-side.
```
npm install firebase-admin
```
Generate `private key` for the project.
1. Navigate to https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk
2. Select the project
3. Go to `Service accounts` tab
4. Click `Generate new private key` to generate private key
5. Download and store the json file

Create an `index.js` in your project, and paste the following code into it.
```
import * as admin from 'firebase-admin';
const certificate = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(certificate)
});
```

### Client configuration
Install the required `products` or `libraries`.
1. Navigate to https://firebase.google.com/docs/web/setup
2. Select `With npm` tab if you are using npm or yarn, else select `From the CDN` tab
3. Import the core SDK. Eg: `<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>`
4. Go to https://firebase.google.com/docs/web/setup#libraries-cdn, expand `using bundler with modules` if your are using npm else expand `from the CDN`.
5. Look for `Cloud Messaging` and import it.

Generate public key
1. Navigate to https://console.firebase.google.com/u/0/project/_/settings/cloudmessaging
2. Select your project
3. Go to `Cloud Messaging` tab
4. Click `Generate key pair`
5. Copy the generated `key pair` for later use

## References
- https://github.com/firebase/quickstart-js/tree/master/messaging