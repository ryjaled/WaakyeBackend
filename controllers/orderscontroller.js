import { db } from '../config/database.js';
var timer = require('./timer');

export function addOrder(params, callback){
      console.log(params);
      // console.log(params.username);
      var orderObj = JSON.parse(params.ordereredItems);
      var totalCost = 0;
      
      for (var i = 0; i < orderObj.length; i++) { 
         totalCost += parseInt(orderObj[i].egg)+parseInt(orderObj[i].waakye)
      } 
      // console.log(totalCost);


      var addDoc = db.collection('orders').add({
         createdAt:timer.setTime(),
          orderReference: params.orderRef,
          customerDetail:{
            cid: params.cid,
            firstName: params.firstName,
            lastName: params.lastName
          },
          Detail:{
            numberOfOrders:"2",
            ordereredItems:orderObj,
            totalCostOfOrder: totalCost
          }, 
          Status:"Unsettled",
          lastModified:timer.setTime(),
          transactionComplete: false

      }).then(ref => {
          console.log('Added with ID: ', ref.id);
          callback(null, "data now added!");
      });
}



export function updateOrderStatus(params, callback){

	var statusOfOrder = null;

	if (params.status == "Unsettled"){
		statusOfOrder = "Settled";
	} else{
		statusOfOrder = "Unsettled";
	}



	console.log("Updating order status");
 	var cityRef = db.collection('orders').doc(params.oid);
	var updateSingle = cityRef.update({ status: statusOfOrder, lastModified: timer.setTime() });

}





export function findAllOrders(params, callback){
      console.log("Finding all...");
     
      var jsonArray = [];

      db.collection('orders').get()
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
 	console.log("Finding order with id: "+uid);

    var docRef = db.collection("orders").doc(uid);

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




