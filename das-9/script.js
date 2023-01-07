// let arr=["a","b","c","d","e","f","B","C","B"]
// let i=0
// let count=0
// let chek=prompt("greq vor tarneq canknum hshvel")
// while (i<arr.length){
//     if(arr[i].toLowerCase()===chek.toLowerCase()){
//         console.log(true)
//         count++
//     }
//     i++
// }
// console.log(count)



// let arr=["a","b","c","d","e","f","B","C","B"]
// let andam=true;
// while (andam){
//     andam=prompt("greq vor taren eq cankum jnjel")
//     if(arr.includes(andam)){
//         arr.splice(arr.indexOf(andam),1,andam===andam.toUpperCase()?andam.toLowerCase():andam.toUpperCase())
//     }else{
//         alert("chka ayd andamy")
//     }
//     console.log(arr)
// }
//


// debugger
// let arr=["a","b","c","d","e","f","B","C","B"]
// let i=0
//
// let chek=prompt("greq vor tarneq canknum jnjel")
// while (i<arr.length){
//     if(arr[i].toLowerCase()===chek.toLowerCase()){
//        arr.splice(i,1)
//       continue
//     }
//     i++
// }
// console.log(arr)



// let arr=["a","b","A","A","a","B","C","B","a"]
// // console.log(arr.indexOf('a')===arr.lastIndexOf("a"))
// let i=0
//
// let chek=prompt("greq vor tarneq canknum jnjel")
// while (i<arr.length){
//     if(arr[i]===chek.toLowerCase() || arr[i]===chek.toUpperCase()){
//         if(arr.indexOf(chek.toUpperCase()) === arr.lastIndexOf(chek.toUpperCase()) && arr.indexOf(chek.toLowerCase()) === arr.lastIndexOf(chek.toLowerCase())){
//             break
//         }
//        arr.splice(i,1)
//       continue
//     }
//     i++
// }
// console.log(arr)

// let arr=["a","b","c","d","e","f","g","k","j"]
// let arr2=[]
// let i=0
//
// while (i<arr.length){
//     if(i%2!==0){
//     arr2.push(arr[i])
//     }
//     i++
// }
// arr=arr2
//
// console.log(arr2)


// let arr=[7,8,95,5,6,"55",2,4,8,10,15,undefined,2,null,5,false,55,45,17,33,25,true,34,NaN]

// 1.78 toxi, zangvaci arjeqnery gumarel tvery
// 2.78 toxi, zangvaci arjeqnery aradzncnacel tver zugeri ev kenteri //[[45,17,33,25],[2,4,8,10,15]]
// 3.78 toxi, zangvaci arjeqnery barcracnel qarakusi astichan (**2) //[49,65,58595,25,25,95555,...]
// 4.78 toxi, zangvaci arjeqnery veradarcnel chkrknvoxnery//[7,95,4,10,15....]




