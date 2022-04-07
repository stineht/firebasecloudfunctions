
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
const db= admin.firestore()

var dayjs = require('dayjs')




//henter melding fra firestore
exports.hentMelding= functions.https.onRequest((request,response) =>{
admin.firestore().doc('meldinger/9GryHeionmO4w7oxHcIg').get()
.then(snapshot =>{
    const data=snapshot.data()
    response.send(data)
})
.catch(error => {
    console.log(error)
})
})

//henter collection fra firestore
exports.hentCollection= functions.https.onRequest((request,response) =>{
    admin.firestore().collection('meldinger').get()
    .then(snapshot =>{
        const data=snapshot.docs.map(doc =>doc.data());
        response.send(data)
    })
    .catch(error => {
        console.log(error)
    })
    })


    
//legger til melding i firestore
exports.leggTilMelding = functions.https.onRequest(async (request, response) => {
    
    const melding = "Det er onsdag";
    const tidlaget =dayjs().format("HH:mm:ss");
  
    const writeResult = await admin.firestore().collection('meldinger').add({melding: melding, tidlaget:tidlaget});
  
    response.json({result: `Message with ID: ${writeResult.id} added.`});


  });

  
  
//sender tilbake ny data som blir laget
  exports.sendTilbakeEndringer = functions.firestore.document('meldinger/{documentId}')
  .onCreate(async(snap, context) => {

      const nyMelding= snap.data();
      

    await  db.collection('logging').add({description : "ny melding laget"}) 
    console.log(nyMelding)
   
  });



