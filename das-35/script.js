// function hi(){
//
//     return function (){
//         return false
//     }
// }

// console.log(hi())


// let hiHi=hi() //
// console.log(hiHi)

// console.log(hiHi())
// let arr=[7,8,9,1,10,11,12,13,15,18,19,21,32]
// function data(func,arr) {
//     let resArr=[]
//     arr.forEach(res=>{
//         let f=func(res)
//         if(f){
//             resArr.push(res)
//         }
//     })
//     return resArr
// }
// let x=data(function (res) {
//     return res%2
// },arr)
// console.log(x)



//
//
//
//
//
// function page_1(func){
//
//    return func()
// }
// function page_2(func){
//
//     return  page_1(function (){
//         let x=func()
//
//         return x-2
//     })
// }
// function page_3(func){
//     return page_2(function (){
//         let x=func()
//
//         return x-1
//     })
//
// }
// function page_4({name,surname,count}){
//
//     obj.count=page_3(function (){
//         return count
//     })
//
// }
// let obj={
//     name:"Valodya",
//     surname:"Sukasian",
//     phone:"+3749877787988785",
//     country:"yerervan",
//     count:5
// }
//
// page_4(obj)
// console.log(obj)



// 1
// 1. void || type-value
// 2. new {}
// 3.
// function fetchNetwork(){

// return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         reject(   new Error("sxal"))
//     },1500)
// })
//
// }



async function asyncb(){
    try {
        let res=await fetch('https://jsonplaceholder.typicode.com/todos')
        return res.json()

    }catch (e) {
        console.log(e)
    }
}
asyncb().then(res=>{
    console.log(res,1)
}).catch(err=>{
    console.log(err,0)
})
console.log()






















