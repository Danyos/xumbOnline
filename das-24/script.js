



// let obj={
//     name:"Valod",
//     surname:"Gasparyan",
//     age:17,
//     country:"yerevan"
// }
// alert(JSON.stringify(obj))

// function Hi({name,surname,age}){
//     console.log(name,surname,age)
// }
// Hi(obj)


// function hi2(...ar1){
//     console.log(ar1)
//
// }
// hi2(7,8,58,5,8,65,58,5)

// let obj1={
//     name:"muxi",
//     surname:"Gasparyan",
//     age:17,
//     country:"yerevan"
// }
// let copy={...obj1}
// let copy2=Object.assign({},obj1)
// let x=obj1
// // x.model="Bmw"
// copy.model="Bmw"
// copy2.type="sdfsdcf"
// console.log(x)
// console.log(obj1)
// console.log(copy)
// console.log(copy2)
// let arr=[1,2,3,4,5,6]
// let arr2=arr
// arr2.push(7)
// console.log(arr)
// console.log(arr2)
// let str="defedf"
// let str2=str
// str+="Hiii"
// console.log(str)
// console.log(str2)

// let obj2=Object.assign({},obj1)
//     ...
// let obj2={
//
// }
let arr=[1,2,5,8,56,3]
arr=[4,5,5,5,5,5,5,...arr]
const arr2=[1,2,5,8,56,3]
arr2.unshift(4,5,5,5,5,5,5)
console.log(arr2)
// let obj={
//
//     age:17,
//     country:"yerevan"
// }
// let obj2={
//     name:"Valod",
//     surname:"Gasparyan",
//
// }
// obj={
//     ...obj,
//     ...obj2
// }
// console.log(obj)







// const obj={
//
//     age:17,
//     country:"yerevan"
// }
// const obj2={
//     name:"Valod",
//     surname:"Gasparyan",
//
// }
// for (const obj2Key in obj2) {
//     obj[obj2Key]=obj2[obj2Key]
// }
// console.log(obj)

// const obj={
//     colorName:"colorMania",
//     white:"#FDF5E6",
//     red:"#E12B0F",
//     green:"#52fd00",
//     img:{
//         name:"Valod",
//         surname:"Gasparyan",
//
//     }
// }

// Object.preventExtensions(obj)
// toxec edit, delete
// Object.seal(obj)
// Object.freeze(obj)
// toxec menak edit
// obj.green="#50C878"
// obj.blue="#318CE7"
// delete  obj.red
// obj.img.age="36"
// console.log(obj)


// var a=7
//
//
// console.log(window)

// function asd(){
//     console.log(x)
// }
// let x=7
// asd()

// console.log(b)
// console.log(window)

function findRemainder(dividend, divisor) {
    let result = dividend;//15
    while (result >= divisor) {
        result -= divisor;
    }
    return result;
}
const remainder = findRemainder(15, 3);
console.log(remainder); // 2














