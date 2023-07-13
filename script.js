
// function checkUser(user){
//     if(user==='Baktygul'){
//         return 'user admin true welcome, Baktygul'
//     } else{
//         return ' false not correct user'
//     }
// }
// console.log(checkUser('Baktygul'))


// function february(day) {
//     if (day<='28'){
//         return `today is ${day} of february`
//     }
//     else {
//         return `on february only 28 day, your day is ${day} of another month`
//     }
//
// }
// console.log(february(29))


// function equal(num){
//     if (num===50){
//         return `${num} is equals of 50`
//     } else {
//         return `${num} is not correct`
//     }
// }
// console.log(equal(50))


// function greetinUser(user,age){
//     if(age>=18){
//         return `${user} ${age} old, welcome`
//     }else {
//         return `${user} ${age} old, rejected`
//     }
// }
// console.log(greetinUser('Alex', 19))


// function checkLength(user) {
//    if (user.length < 3) {
//        return `${user } name is too short (min 3)`
//    }
//    if (user.length > 5) {
//        return `${user }name is too long (max 5)`
//     } else {
//        return `${user } name is accepted`
//     }
// }
// console.log(checkLength('ffff'))


//
// function checkNumber(age){
//     if ( typeof age === 'string'){
//         return `"${age}" must be a number`
//     }
//     if (age<20){
//         return 'age must be over 20'
//     }
//     else{
//         return 'correct'
//     }
//
// }
// console.log(checkNumber('ff'))



// function checkString(age){
//     if(typeof age==='number'){
//         return `"${age}" must be a string`
//     }
//     if(age<23){
//         return `${age } must be older then 23`
//     }
//     else {
//         return 'correct'
//     }
// }
// console.log(checkString('23'))


// function checkDay(day) {
//     if (day<=0 || day>7) {
//         return 'max days of weeks 7'
//         }else if(day===1){
//             return 'today is monday'
//         }else if(day===2){
//             return 'today is tuesday'
//         }else if(day===3){
//             return 'today is wednesday'
//         }else if (day===4){
//             return 'today is thursday'
//         }else if(day===5){
//             return 'today is friday'
//         }else if (day===6 || day===7){
//             return 'today is weekend'
//         }
//     }
// console.log(checkDay(7))

/////////////////////////////////////////////////////////////////////////////////////

/////// 1 \\\\\\\\

// function checkWord(str){
//     str=str.trim()
//     str=str.slice(str.indexOf(' ')+1)+' '+str.slice(0, str.indexOf(' '))
//     str=str.slice(0, str.lastIndexOf('o'))+'a'
//     return `${str}`
// }
// console.log(checkWord(' hello world '))

//////// 2 \\\\\\\\\

// function checkLength(str){
//     if(str.length % 2 === 0) {
//         return `${str.length} (четное)`
//     }else{
//         return `${str.length} (не четное)`
//     }
// }
// console.log(checkLength('eggg'))

//////// 3 \\\\\\\\

// function checkSpace(str){
//     str = str.replaceAll(' ','')
//     str = str[0].toUpperCase()+str
//         .slice(1,5)+str[5]
//         .toUpperCase()+str
//         .slice(6,10)+str[10]
//         .toUpperCase()+str
//         .slice(11,15)+str[15]
//         .toUpperCase()+str
//         .slice(16,18)+str[18]
//         .toUpperCase()+str
//         .slice(19,22)
//     return `${str}`
// }
// console.log(checkSpace('lorem ipsum dolor sit amet'))

////////// 4 \\\\\\\\

// function priceDiscount(price, discount){
//     price=price-(price*discount/100)
//     return `${price}`
// }
// console.log(priceDiscount(500,10))

/////////// 5 \\\\\\\\

// function checkString(str) {
//     if (str.length !== 0) {
//         if (typeof str === 'number') {
//             return 'must be a string'
//         } else if (str.length >= 4 && str.length <= 10) {
//             if (str.length % 2 === 0) {
//                 return `${str}`
//             }else{
//                 return 'odd number'
//             }
//         }else{
//             return 'string must match in length'
//         }
//     } else {
//         return 'must not be empty'
//     }
// }
// console.log(checkString('fgfg'))
















