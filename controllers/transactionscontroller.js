import { db } from '../config/database.js';
var timer = require('./timer');


// export function addTransaction(params, callback){
//       console.log(params);
//       // console.log(params.username);
//       // console.log(params.body);

//       var addDoc = db.collection('transactions').add({
//          createdAt:timer.setTime(),
//          orderReference: params.orderReference
//           actorID: params.actorID,
//           orderID: params.orderID.
//           verified: "unverified",
//           lastModified:params.lastEdited

//       }).then(ref => {
//           console.log('Added transaction with ID: ', ref.id);
//           callback(null, "data now added!");
//       });
// }


export function addTransaction(params, callback){
      console.log(params);
      // console.log(params.username);
      // console.log(params.body);

      var addDoc = db.collection('transactions').add({
         createdAt:timer.setTime(),
         orderReference: 'params.orderReference',
          actorID: 'params.actorID',
          orderID: 'params.orderID',
          paymentType: 'params.paidBy',
          verified: "pending",
          lastModified: 'params.lastEdited',
          transactionID: 'null'

      }).then(ref => {
          console.log('Added transaction with ID: ', ref.id);
          var cityRef = db.collection('transactions').doc(ref.id);
	  	  var updateSingle = cityRef.update({ transactionID: ref.id });
	  	  callback(null, "data now added!");
      });
      
      
}



export function updateTransaction(params, callback){

	var statusOfOrder = null;

	if (params.status == "unverified"){
		statusOfOrder = "verfied";
	} else{
		statusOfOrder = "unverified";
	}



	console.log("Updating transaction status");
 	var cityRef = db.collection('transactions').doc(params.tid);
	var updateSingle = cityRef.update({ status: statusOfOrder, lastModified: timer.setTime() });

}

export function updateTransactionOrder(params, callback){


}



export function findAllTransactions(params, callback){
      console.log("Finding all...");
     
      var jsonArray = [];

      db.collection('transactions').get()
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
 	console.log("Finding transaction with id: "+uid);

    var docRef = db.collection("transactions").doc(uid);

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

