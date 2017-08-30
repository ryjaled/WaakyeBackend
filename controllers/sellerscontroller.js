import { db } from '../config/database.js';
var timer = require('./timer');

export function addSeller(params, callback){
      console.log(params);
      // console.log(params.username);
      // console.log(params.body);

      var addDoc = db.collection('sellers').add({
         addedAt:timer.setTime(),
         organizationAvatarURL: params.organizationAvatarURL,
         organizationName: params.organizationName,
         orderReference: params.orderReference,
         carbDetail:{
            waakyePrice: params.waakyePrice,
            ricePrice: params.ricePrice,
            gariPrice: params.gariPrice,
            spaghettiPrice: params.spaghettiPrice,
            plantainPrice: params.plantainPrice
         },
         proteinDetail:{
            chickenPrice: params.chickenPrice,
            fishPrice: params.fishPrice,
            welePrice: params.welePrice,
            eggPrice: params.eggPrice,
            meatPrice: params.meatPrice
         },
         sellerPosition: {
         	latitudeCoordinate: params.latitudeCoordinate,
         	longitudeCoordinate: params.longitudeCoordinate
         },
         cityLocation: params.cityLocation,
         sellerDescription: params.sellerDescription,

         sellerID: null

      }).then(ref => {
          console.log('Added with ID: ', ref.id);
           var cityRef = db.collection('sellers').doc(ref.id);
	  	  var updateSingle = cityRef.update({ sellerID: ref.id });
          callback(null, "data now added!");
      });
}


export function findAllSellers(params, callback){
      console.log("Finding all...");
     
      var jsonArray = [];

      db.collection('sellers').get()
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
 	console.log("Finding seller with id: "+uid);

    var docRef = db.collection("sellers").doc(uid);

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




