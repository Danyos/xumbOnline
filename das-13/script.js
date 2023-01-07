// let arr=[1,2,3,4,5,6,7,8,9,10,45,88,21,35,77,24]
// let max=arr[0]
// arr.forEach(res=>{
//     if(res>max){
//         max=res
//     }
// })
//
// console.log(max)
// const numbers = [2,11,33,45,1,4,557,333,23,456,40,3,4454];
//
// let bigNumber = numbers[0];
//     numbers.forEach(function (num)
//      {
//         if(bigNumber < num)
//         {
//             bigNumber = num;
//              // return true
//
//         }
// // return false
//     })
//
//     console.log(bigNumber);
// const number = [-2,11,33,-45,1,-4,-7,3,-26,40,-3,54,]
//
// let result = number.reduce(function (previousValue, currentValue)
// {
//     if(currentValue < 0)
//     {
//         previousValue.push(currentValue);
//     }
//     return previousValue
// },[])
// console.log(result)


// const number = [-2,11,33,-45,1,-4,-7,3,-26,40,-3,54]
//
// let result = 0;
// let count = 0;
//
// number.forEach(function (num)
// {
//     if(num < 0)
//     {
//         result+=num
//       count++
//     }
// })
//
// result=result/count
// console.log(result);
//
//


// let minres=Math.min(...arr)
// // console.log(minres)
// console.log(arr)
// function randNumber(arg=10){
//     let arr=[]
//     for (let i=0;i<arg;i++){
//         arr.push(Math.round(Math.random()*999) - Math.round(Math.random()*999))
//     }
//     return arr
// }
// let result = 0;
// let count = 0;
//
// randNumber().forEach(function (num)
// {
//     if(num < 0)
//     {
//         console.log(num)
//         result+=num
//       count++
//     }
// })
// result=result/count
// console.log(result)
//


//
// let arr=[1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
//
// console.log(arr.flat(Infinity))
// for (let i=0;i<arr.length;i++){
//   if(!Array.isArray(arr[i])){
//       console.log(arr[i])
//       continue
//   }
//     for (let j=0;j<arr[i].length;j++){
//         if(!Array.isArray(arr[i][j])){
//             console.log(arr[i][j])
//             continue
//         }
//
//     }
// }


// let arr=[100,2000,400,500,5000,1000,200]
// let sortres=arr.sort((a,b)=>a-b)
// console.log(sortres)


//
// let maknish="bmw"
// let model="x5"
// let tiv="2019"
//
// let txtapanak = [{
//     id: 1,
//     pasport: 10,
//     idNumber: "45",
//     status: true,
//     images: [],
//     file: {
//         doc: "barev.pdf"
//     }
// },
//     {
//         id: 2,
//         pasport: 20,
//         idNumber: "45",
//         status: true,
//         images: [],
//         file: {
//             doc: "hajox.pdf"
//         }
//     },
// ]
// let a = "pasport"
// txtapanak['info']="Barev"
// txtapanak['pasport']="AF2115414"
// delete txtapanak.idNumber

// txtapanak.a="Al1111111"
// txtapanak[a]="Al1111111"
// txtapanak.pasport+= +txtapanak.idNumber
// txtapanak.forEach(res => {
//     console.log(res.file.doc)
// })
// console.log(txtapanak)
//
// let x=txtapanak.find(res=>res.id===2)
// console.log(x)
//
// const price=[
//     {
//         id:1,
//         name:"Valod",
//         payment_way:"visa",
//         price:"1500$"
//     }, {
//         id:2,
//         name:"Vazgen",
//         payment_way:"paypal",
//         price:"1400$"
//     }, {
//         id:3,
//         name:"grish",
//         payment_way:"bitcoin",
//         price:"1700$"
//     }, {
//         id:4,
//         name:"Karo",
//         payment_way:"visa",
//         price:"100$"
//     }, {
//         id:5,
//         name:"Serob",
//         payment_way:"bitcoin",
//         price:"500$"
//     }, {
//         id:6,
//         name:"Serob",
//         payment_way:"Idram",
//         price:"1500$"
//     },{
//         id:7,
//         name:"Serob",
//         payment_way:"bitcoin",
//         price:"1500$"
//     },{
//         id:8,
//         name:"Serob",
//         payment_way:"Mounytoun",
//         price:"1500$"
//     }
// ]
// console.log(Object.keys(price[0]))
// tnayin gumarnery stadartvorel u pahel nor obj mej ynst irenc gumari
// orinak
// {
//     bitcoin:"yndhanur gumar",
//         visa:"yndhanur gumar",
//     paypal:"yndhanur gumar",
//     idram:"yndhanur gumar",
// Mounytoun:"yndhanur gumar"
//
// }



// let arr=["a","c","k","c","e","f","c","c","d","c","f","c","c","d","e","f"]
// hashvel te vor antamic qani hat ka veradarcneq object orinak

// a__1
// c__5
// d__44









// https://code.mu/en/javascript/book/prime/objects/intro/






