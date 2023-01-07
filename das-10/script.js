// let arr=[7,8,95,5,6,"55","2k",4,8,10,15,undefined,2,null,5,false,55,45,17,33,25,true,34,NaN]

// 1.1 toxi, zangvaci arjeqnery gumarel tvery
// 2.1, zangvaci arjeqnery aradzncnacel tver zugeri ev kenteri //[[45,17,33,25],[2,4,8,10,15]]
// 3.1 toxi, zangvaci arjeqnery barcracnel qarakusi astichan (**2) //[49,65,58595,25,25,95555,...]
// 4.1 toxi, zangvaci arjeqnery veradarcnel chkrknvoxnery//[7,95,4,10,15....]
// 4.2// unshift hraman ogtagortce;u avelelacnel dimacic andam ciklov
// 5.// 6.
// let x=[
//     [1,2,3],
//     [1,2,6],
//     [2,2,9],
// ]
// ______________________________________________________________





// let i = 0;
//
// let gumar = 0;
//
// while( i < arr.length) {
//   // if(typeof arr[i] === "number" && arr[i]>0) {
//   if(!isNaN(arr[i]) && (typeof arr[i]==='number' || typeof  arr[i]==='string')) {
//       console.log(arr[i])
//
//     gumar += +arr[i];
//   }
//   i++;
//
// }
// console.log(gumar)


// let x=[10,20,30,40,50,60]//


//
//
// x.reverse()
// x[x.length]=0
// x.reverse()
// x.splice(0)
// console.log(x)
//


// for (let i in x) {
//     console.log(x[i])
// }


// for (let i=0;i<x.length;i++){
//     console.log(x[i])
// }


// let [y,y1]=[10,20]
// console.log(y1)
// let x=[10,20,30,40,50,60]
// // [[0,10],[1,20],[2,30]]
//
// for (const [ind,x1] of x.entries()) {
//     console.log(x1)
// }



// _________________________FUNCTION_________________________
// void
// alert()

// type value
// prompt()
// confirm()
// function Person(name,surname){
//   document.write(name+" "+surname)
//   return name+"_"+surname
// }
// let x=prompt("greq dzer anun@")
// let mp=Person("Petros","Stepanyan")

// let t=alert(1)
// let p=prompt()
// console.log(mp)

// prompt()
// confirm()





//
// let num=7777777777
// function myLength(arg){
//   return arg.toString().length
// }
//
//
// let x1=myLength(num)
// console.log(x1)
//
//
// console.log(myLength(65526125615))
// console.log(myLength("655261256155421651256"))
// console.log(myLength("65526125615542165125662165215612"))
// console.log(myLength("1232222222222222222222222222222222222222222222222222"))




// function showMessage(from, text="barev") {
//   text = text || 'текст не добавлен';
//  return(
//      from+" "+text
//  )
//
// }
//
// console.log(showMessage("Mxitar"))







// function showPrimes() {
//     nextPrime: for (let i = 0; i < 5; i++) {
//
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//
//         alert( i );
//     }
// }
//
// showPrimes()


// let arr=[]
// console.time("r1")
// nextPrime: for (let i = 2; i < 2000; i++) {
//     for (let j = 2; j <= parseInt(i/2); j++) {
//         if (i % j == 0) {
//             continue nextPrime;
//         }
//
//
//     }
//
//    arr.push(i)
// }
// console.timeEnd("r1")
// console.log(arr)
//
//
// let arr2=[]
// console.time("r2")
// nextPrime: for (let i = 2; i < 2000; i++) {
//     for (let j = 2; j <i; j++) {
//         if (i % j == 0) {
//             continue nextPrime;
//         }
//
//
//     }
//
//     arr2.push(i)
// }
// console.timeEnd("r2")
// console.log(arr2)




