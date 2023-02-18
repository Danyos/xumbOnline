// -------------Promise---------
//
// let pro = new Promise(function (resolve, reject) {
//    setTimeout(()=>{
//        resolve([
//            {
//                id: 1,
//                name: "Valod",
//                payment_way: "master",
//                price: "1500$"
//            }, {
//                id: 2,
//                name: "Vazgen",
//                payment_way: "paypal",
//                price: "1400$"
//            }, {
//                id: 3,
//                name: "grish",
//                payment_way: "idram",
//                price: "1700$"
//            }, {
//                id: 4,
//                name: "Karo",
//                payment_way: "visa",
//                price: "100$"
//            }, {
//                id: 5,
//                name: "Serob",
//                payment_way: "bitcoin",
//                price: "500$"
//            }, {
//                id: 6,
//                name: "Petros",
//                payment_way: "visa",
//                price: "800$"
//            }
//        ])
//    },4000)
//
//
//     // reject("dfdv fbv fdgbv")
// })
//
// function info(){
//     pro.then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     }).finally(() => {
//         console.log("Avart")
//     })
// }

// function xx(func){
//      setTimeout(function (){
//          func(7)
//
//     },1000)
//
// }
//
//  xx(function (a){
//     console.log(a)
// })
// function lodinf(){
//     console.log("voxjuyn")
// }





// Api
// https://jsonplaceholder.typicode.com/
function info(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => a(json)).catch(err=>{
        console.log(err)
    })

}
function a(arg){
    let parent=document.querySelector('.parent')

arg.forEach(res=>{

    let one=document.createElement('div')

    one.classList.add('one')

    parent.appendChild(one)

    one.innerHTML+=`<h2>${res.title}</h2>`

    one.innerHTML+=`<p>${res.body}</p>`
    one.innerHTML+=`<button>Read More</button>`

})

}

















