// {
//     iphone:[2,3,5,6],
//     samsung:[1,4],
//     nokia:[7],
// }

let position={
    super_user:[1,7],
    admin:[2,4],
    modulator:[6]
}

let x=[
    {
        id:1,
        name:"Valodya",
        surname:"poghosyan",
        phone:"Samsung",
        price:"20000$",
        frend:[2,4,7]
    },  {
        id:2,
        name:"Gago",
        surname:"poghosyan",
        phone:"Iphone",
        price:"15400$",
        frend:[1]
    },
    {
        id:3,
        name:"Gaspar",
        surname:"poghosyan",
        phone:"Iphone",
        price:"11000$",
        frend:[4,5]
    },
    {
        id:4,
        name:"Ando",
        surname:"poghosyan",
        phone:"Samsung",
        price:"1000$",
        frend:[1,3]
    },
    {
        id:5,
        name:"Karo",
        surname:"poghosyan",
        phone:"Iphone",
        price:"5000$",
        frend:[3,6]
    },
    {
        id:6,
        name:"Grish",
        surname:"poghosyan",
        phone:"Iphone",
        price:"14000$",
        frend:[5,7]
    },
    {
        id:7,
        name:"Mxo",
        surname:"poghosyan",
        phone:"Nokia",
        price:"2700$",
        frend:[6,1]
    }
]

// tnayin
// 1. tpel irenc amboxch gumarnery
// 2. tpel anun u ir ynkernery
// 3. tpel adminerin ev super_usernerin

// 4
let obj={
    name:"Mxo",
    surname:"poghosyan",

}
let obj2={
    phone:"Nokia",
    price:"2700$",

}
console.log(obj)
console.log(obj2)
// {
//     name:"Mxo",
//     surname:"poghosyan",
//     phone:"Nokia",
//     price:"2700$",
//
// }
//



// gago>>>grish,karo,mxo
// valod>> grish,karo,mxo










// let higt=x.sort((a,b)=>parseInt(a.price) - parseInt(b.price))
// let higt=x.sort((a,b)=>b.name-a.name)

// console.table(higt)




// console.table(x)
//
// let answer = x.reduce(function (previousValue,currentValue) {
//     if (previousValue[currentValue.phone ] === undefined ){
//
//         previousValue[currentValue.phone] = [currentValue.id]
//
//     } else {
//
//        previousValue[currentValue.phone].push(currentValue.id)
//     }
//     return previousValue
// },{})
// console.log(answer)
//answer= {
//     Iphone: [2, 3, 5, 6]
//     Nokia:[7]
//     Samsung:[1, 4]
// }
// let y=Object.keys(answer)//[Iphone,Nokia,Samsung]

// y.forEach(res=>{
//     console.log(answer[res])
// })

// for (const answerKey in answer) {
//     console.log(answerKey)
//   answer[answerKey].forEach(res=>{
//
//       let f=x.find(r=>r.id===res)
//       console.log(f.name)
//   })
// }
// let arr=[88,77,66,55,44,33,22,11]
//
//
// for (let arrKey of arr) {
//     console.log(arrKey)
//
// }
// for (let i=0;i<arr.length;i++){
//     console.log(i)
// }





//   iphone
// Gago
// Gaspar
// Grish
// Grish
//    Nokia
// Mxo
//    Samsung
// valod
 // ando