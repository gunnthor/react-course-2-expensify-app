// OBJECT DESTRUCTURING

// const person = {
//  name : 'Gunnthor',
//  age: '24',
//  location: {
//   city: 'Reykjavík',
//   temp: 5
//  } 
// };

// const {name = 'placebo effect ', age} = person
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);
// const {city, temp : temperature} = person.location

// if(city && temperature) console.log(`It's ${temperature} in ${city}`)

// const book = {
//   title: 'Lord of the rings: Fellowship of the ring',
//   author: 'J.R.R. Tolkien',
//   publisher: {
//     name: 'Someone i dont care about'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); //Penguin, Self-Published

//
// ARRAY DESTRUCTURING
//

const address = ['Aflagrandi 21', 'Reykjavík', 'Gullbringusýsla', '107'];

const [street, city, state, zip] = address
// EÐA BETRA: const[, city, state]

console.log(`You are in ${city} ${state}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = item

console.log(`A medium ${itemName} costs ${medium}.`)