// let send=document.querySelector('#send')
// let uniKey=document.querySelector('#uniKey')
// let list=document.querySelector('.list')
// send.addEventListener("click",()=>{
//     let st_g=localStorage.getItem('lists')
//     if(st_g){
//             st_g=JSON.parse(st_g)//[""]
//         if(!st_g.includes(uniKey.value)){
//             localStorage.setItem("lists",JSON.stringify([...st_g,uniKey.value]))
//             list.innerHTML+=`<li>${uniKey.value}</li>`
//         }
//         // st_g.push( uniKey.value)
//     }else{
//         localStorage.setItem('lists',JSON.stringify([ uniKey.value]))
//     }
//     uniKey.value=''
// })
// function view(){
//     let st_g=JSON.parse(localStorage.getItem('lists'))
//     if(st_g){
//         st_g.forEach(res=>{
//             list.innerHTML+=`<li>${res}</li>`
//         })
//     }
// }
// view()
//
//
// console.time("p1")
// function a(i=0,sum=0){
//     if(i===5){
//         return sum
//     }
//     sum+=i
//    return  a(i+1,sum)
// }
// console.log(a())
//

// console.timeEnd("p1")
// console.time("p2")
// let sum=0
// for (let i=0;i<5;i++){
//     sum+=i
// }
// console.log(sum)
// console.timeEnd("p2")
// ===

let count=0
// let stM=null
// function decriment(){
//     if(stM){
//         clearTimeout(stM)
//     }
//     stM=setTimeout(()=>{
//         count--
//         view(count)
//     },500)
//
// }
// function incriment(){
//     if(stM){
//         clearTimeout(stM)
//     }
//     stM=setTimeout(()=>{
//         count++
//         view(count)
//     },1000)
// }
//
function view(count){
    let num=document.querySelector('.num')
    num.innerHTML+=count+", "
}
view(count)

let s1=null

function search(e){
    if(s1){
        clearTimeout(s1)
    }
   s1= setTimeout(()=>{
        console.log(e.target.value)
    },600)

}
// function myFunction() {
// setTimeout(()=>{
//     let a=document.querySelector('.a')
//     a.remove()
// },1000)
// }

















