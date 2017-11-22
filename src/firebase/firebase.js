import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};





// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     let expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   let expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })

// database.ref('expenses').push({
//   description: 'Klára þetta section',
//   note: 'prumpa',
//   amount: '300',
//   createdAt: 5300
// });

// database.ref('notes/-KzTVOhIVvbfKv0I1vB_').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React native angular python haha'
// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data', error);
//   });   

// database.ref().set({
//   name: 'Gunnthor Karl',
//   age: 24,
//   sexy: true,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Reykjavík',
//     country: 'Iceland'
//   }
// }).then( () => {
//   console.log('Data is saved');
// }).catch( (error) => {
//   console.log('This failed', error)
// });

// database.ref().update({
//   'job/company': 'Amazon',
//   stressLevel: 9,
//   'location/city': 'Siglufjörður',
//   sexy: null
// }).then( () => console.log('updated stuff!'))
//   .catch(()=> console.log('error in update!', error))


// database.ref('sexy').remove()
//   .then(() => console.log('remove succeeded'))
//   .catch((error) => console.log('Error remove!', error));