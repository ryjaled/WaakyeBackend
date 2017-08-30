import { db } from '../config/database.js';
var timer = require('./timer');


 export function addUser(params, callback){
      console.log(params);
      console.log(params.username);
      console.log(params.body);

      var data = {
          createdAt:timer.setTime(),
          avatarURL: params.url,
          firstname: params.firstName,
          lastname: params.lastName,
          fullname: params.fullName,
          lastSeen: params.lastSeen,
          mobileNumber: params.mobileNumber,
          mobileMoneyNumber: params.mobileMoneyNumber,
          mobileMoneyNetwork: params.mobileMoneyNetwork,
          email: params.email,
          totalOrdersMade: params.totalOrdersMade,
          lastModified:timer.setTime()
      };

      var setDoc = db.collection('users').doc(params.uid).set(data);

      callback(null, "data now added!");
 
    }


 export function findAllUsers(params, callback){
      console.log("Finding all...");
     
      var jsonArray = [];

      db.collection('users').get()
      .then(documentSet => {
          documentSet.forEach(doc => {
            jsonArray.push(doc.data());
            console.log("Find All Controller success");
          });
         callback(null, jsonArray);
      })
      .catch(err => {
          // Error fetching documents
          console.log('Controller Error', err);
          callback(err, null);
      });

 
    }



 export function findById(uid, callback){
 	console.log("Finding user with uid: "+uid);

    var docRef = db.collection("users").doc(uid);

      docRef.get().then(function(doc) {
        if (doc) {
            console.log("Document data:", doc.data());
            callback(null, doc.data());
        } else {
            console.log("No such document!");
            callback(null, "No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
        callback("Does Not Exist!", null);
      });


}

