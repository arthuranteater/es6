// Review ES6

// -----------------------********* Let, Const *********-----------------------

// USE CONST when you are not reassigning the variable

// 1 Q: What doe you think is going to happen here?

// function buildArr(num) {
//     const arr = []
//     for (let i = 0; i < num + 1; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// console.log(buildArr(10))

// 1 A: 

// arr can't be reassigned, but when you are adding a value to an array or object it can use const because the object is not be reassigned!!

// use const 99.9% of the time

// Note: main difference between var and const: var is globally scoped, const is bracket scoped.


// -----------------------********* Arrow Functions *********-----------------------

// 2 Q: refactor the following to an arrow functions

// function congrats() {
//     console.log('You refactored me! Good Work!')
// }
// congrats()
// function greetings(name) {
//     console.log('Hello to everyone except' + name)
// }
// greetings('Evan')
// function callMe(name, numba, reason) {
//    return 'call' + name + 'at' + numba + 'to go' + reason
// }
// console.log(callMe('Joe', '777777', 'figure skating'))

// 2 A: 

// const congrats = () => {
//     console.log('You refactored me! Good Work!')
// }
// congrats()
// const greetings = name => {
//     console.log('Hello to everyone except' + name)
// }
// greetings('Evan')
// const callMe = (name, numba, reason) => 'call' + name + 'at' + numba + 'to go' + reason
// console.log(callMe('Joe', '777777', 'figure skating'))

// Note: arrow functions change this key word reference, and doesn't allow calling the function above definition

// For those of you interested in learning more...the keyword this has to be binded using call, apply, or bind or it defaults to window in browser or the object if that ist's inside.
// You might have remembered seeing it in JQuery or VanillaJS, referencing the DOM element. That's doing so because this is binded to the element using apply behind the scenes.

// https://medium.com/byte-sized-react/what-is-this-in-react-25c62c31480


// -----------------------********* Node Importing *********-----------------------

// 3 Q: find the kids.js file in the assets folder, import the kids.js file to access it

// 3 A:

// const kids = require('../../../assets/datajs/kids.js')

// Note: There new importing/exporting with ES6 not supported by Node. These use the keywords export and default. Since these are not supported by Node. I won't be reviewing this yet.

// 4 Q: write a console.log for the Jshaun kid (the whole object)

// 4 A: 

// console.log(kids.kids.coolkids[0])

// -----------------------********* Destructuring *********-----------------------

// 5 Q: pull coolkids out using destructuring and console.log for the Jshaun kid

// 5 A: 

// const { coolkids } = kids.kids
// console.log(coolkids[0])

// 6 Q: destructure the import then console.log Jshaun

// 6 A:

const { kids } = require('../../../assets/datajs/kids.js')
// console.log(kids.coolkids[0])

// -----------------------********* Template Literals *********-----------------------

// 7 Q: using template literals (backticks) log Jshaun was born in the year 2001. \n He enjoys storing objects and singing songs.

// 7 A:

// console.log(`${kids.coolkids[0].name} was born in the year ${kids.coolkids[0].yob}.
// He enjoys ${kids.coolkids[0].hobbies}.`)

// -----------------------********* Rest, Spread *********-----------------------

// 8 Q: write arrow function that takes 2 arguments: a name and any number of hobbies to add to a kid using the rest operator

// 8 A: 

// const addHobbies = (name, ...hobbies) => {
//     const allkids = kids.coolkids.concat(kids.supercoolkids)
//     allkids.forEach(function (kiddo) {
//         if (name === kiddo.name) {
//             kiddo.hobbies = kiddo.hobbies.concat(hobbies)
//             console.log(kiddo)
//         }
//     })
// }
// addHobbies('Jshaun', 'surfing', 'jetskiing')

// 9 Q: refactor the previous function to use spread operator

// 9 A: 

// const addHobbies = (name, ...hobbies) => {
//     const allkids = [...kids.coolkids, ...kids.supercoolkids]
//     allkids.forEach(function (kiddo) {
//         if (name === kiddo.name) {
//             kiddo.hobbies = [...kiddo.hobbies, ...hobbies]
//             console.log(kiddo)
//         }
//     })
// }
// addHobbies('Jshaun', 'surfing', 'jetskiing')

// -----------------------********* Map, Filter, Reduce *********-----------------------

// 10 Q: refactor the previous function to use map

// 10 A: 

// const addHobbies = (name, ...hobbies) => {
//     [...kids.coolkids, ...kids.supercoolkids].map(kiddo => {
//         name === kiddo.name ? (kiddo.hobbies = [...kiddo.hobbies, ...hobbies], console.log(kiddo)) : null
//     })
// }
// addHobbies('Jshaun', 'surfing', 'jetskiing')

// 11 Q: use filter and map to add voter: true as key value pair under name if over 18

// 11 A: 

// const addVoters = () => {
//     [...kids.coolkids, ...kids.supercoolkids].filter(kiddo => kiddo.age > 18).map(kiddo => {
//         kiddo.voter = true
//         console.log(kiddo)
//     })
// }
// addVoters()

// 11 Q: use reduce to find the avg age of the kids

// 11 A: 

// const avgAge = () => {
//     return Math.round([...kids.coolkids, ...kids.supercoolkids].map(kiddo => kiddo.age).reduce((acc, cur, i) => (acc + cur)) / [...kids.coolkids, ...kids.supercoolkids].length)
// }
// console.log(avgAge())

// -----------------------********* Promises *********-----------------------

//simple promise

// const verify = (token, pass) => {
//     return new Promise((resolve, reject) => {
//         if (pass === token) {
//             setTimeout(() =>
//                 resolve(pass)
//                 , 2000)
//         } else {
//             const reason = new Error(`${token} doesn't equal ${pass}`)
//             reject(reason)
//         }
//     })
// }

//verify('123', '123').then(res => console.log(res)).catch(err => console.error(err))

// const verify2 = (token, pass) => {
//     return new Promise((resolve, reject) => {
//         if (pass === token) {
//             setTimeout(() =>
//                 resolve(pass)
//                 , 1000)
//         } else {
//             const reason = new Error(`${token} doesn't equal ${pass}`)
//             reject(reason)
//         }
//     })
// }

//verify2('155', '155').then(res => console.log(res)).catch(err => console.error(err))

//async/await

// const init = async (pass, token, pass2, token2) => {
//     let a = await verify(pass, token)
//     let b = await verify2(pass2, token2)
//     let c = a + b
//     return c
// }

// console.log(init('123', '123', '444', '444'))

// init('123', '124', '444', '444').then(res => console.log('res', res)).catch(err => console.error(err))


// const addToEmList = (subsArr) => {
//     return new Promise((resolve, reject) => {
//         emList = []
//         subsArr.map(sub => {
//             decryptEmail(sub.Email).then(em => {
//                 emList.push(`${sub.Name} < ${em} > `)
//             }).catch(err => {
//                 console.error(`decryptEmail: `, err)
//             })
//         })
//         if (emList.length === subsArr.length) {
//             resolve(emList)
//         } else {
//             const reason = new Error(`Unable to add Subs: ${subsArr} to emList`)
//             reject(reason)
//         }
//     })
// }

// EC

// Explain the following 

// function increment() {
//     let counter = 0
//     return function () {
//         console.log(`called ${counter}`)
//         counter++
//     }
// }

// let count = increment()
// console.log(count())
// console.log(count())
// console.log(count())

// Explain the following 

// (function() {
// 	alert('Hello World');
// })();