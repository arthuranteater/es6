// Review ES6

// -----------------------********* Let, Const *********-----------------------

// USE CONST when you are not reassigning the variable

// 1 Q: What do you think is going to happen here?

// function buildArr(num) {
//     const arr = []
//     for (let i = 0; i < num + 1; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// console.log(buildArr(10))


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


// Note: arrow functions change this key word reference, and doesn't allow calling the function above definition

// For those of you interested in learning more...the keyword this has to be binded using call, apply, or bind or it defaults to window in browser or the object if that ist's inside.
// You might have remembered seeing it in JQuery or VanillaJS, referencing the DOM element. That's doing so because this is binded to the element using apply behind the scenes.

// https://medium.com/byte-sized-react/what-is-this-in-react-25c62c31480


// -----------------------********* Node Importing *********-----------------------

// 3 Q: find the kids.js file in the assets folder, import the kids.js file to access it


// Note: There new importing/exporting with ES6 not supported by Node. These use the keywords export and default. Since these are not supported by Node. I won't be reviewing this yet.

// 4 Q: write a console.log for the Jshaun kid (the whole object)


// -----------------------********* Destructuring *********-----------------------

// 5 Q: pull coolkids out using destructuring and console.log for the Jshaun kid


// 6 Q: destructure the import then console.log Jshaun


// -----------------------********* Template Literals *********-----------------------

// 7 Q: using template literals (backticks) log Jshaun was born in the year 2001. \n He enjoys storing objects and singing songs.



// -----------------------********* Rest, Spread *********-----------------------

// 8 Q: write arrow function that takes 2 arguments: a name and any number of hobbies to add to a kid using the rest operator



// 9 Q: refactor the previous function to use spread operator


// -----------------------********* Map, Filter, Reduce *********-----------------------

// 10 Q: refactor the previous function to use map


// 11 Q: use filter and map to add voter: true as key value pair under name if over 18


// 11 Q: use reduce to find the avg age of the kids


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

// -----------------------********* Async. Await *********-----------------------

// const init = async (pass, token, pass2, token2) => {
//     let a = await verify(pass, token)
//     let b = await verify2(pass2, token2)
//     let c = a + b
//     return c
// }

// console.log(init('123', '123', '444', '444'))

// init('123', '124', '444', '444').then(res => console.log('res', res)).catch(err => console.error(err))

// -----------------------********* Promise Example *********-----------------------

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

// -----------------------********* Other Cool Stuff *********-----------------------

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