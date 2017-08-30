const GoogleAuth = require('google-auth-library');
const firebase = require('firebase');
const Firestore = require('@google-cloud/firestore');
// Get project ID from environment
var firestoreId = "waakye-development";

// Initialize Firestore
var firestoreOptions = {
    projectId: firestoreId,
    keyFilename: __dirname + '/keyfile.json'
}

var db = new Firestore(firestoreOptions);

export {db};
