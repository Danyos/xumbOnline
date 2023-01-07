// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// let tiv=prompt("greq tivy")//48
// if(tiv % 2 === 0){
//     console.log("zuyg")
// }else{
//     console.log("kent")
// }


// ****************String********************


// let str="A alias dolor ea iste A alias dolor ea iste"
// let p=prompt("greq dher anun@")
// if(p.length>2 && p.length<10){
//     alert("ok")
// }else{
//     alert("error")
// }
// str=str.toUpperCase()
// document.write(str.toLowerCase())

// console.log(str[str.indexOf("dolor")])
// str[str.length-1] // gtnum enq verji tary
// if(str.length>40){
//     document.write(str.slice(0,40)+"...")
// }else{
//     document.write(str)
// }

// console.log(str)

// "Valod"==="valod"
// false
// "Valod".toLowerCase()==="valOd".toLowerCase()
// true


// let str2="Architecto aspernatur dolore Lorem ipsum dolor sit amet," +
//     " Lorem adipisicing elit. Architecto aspernatur dolore ducimus, "
//
//
// let x=str2.slice(str2.indexOf("Lorem",str2.indexOf("Lorem")+1))
// let z=x.slice(0,x.length/2)
// let y=x.slice(x.length/2)
// // console.log(x)





// console.log(str2.replace("Lorem","Gagas"))
// console.log(str2.replaceAll("Lorem","Micro"))
// str2.replaceAll()

// let names="Gagik"+7
// let str3="aysor mer "+names+"-i tsndyan orn e  "
// vs
// let str3=`${z} ${names}-i ${y}`
// let str3=z+" "+names+"-i "+y
// console.log(str3)



// let num=7777
// num=`${num}`
// console.log(num[1])



















// 1. promptov tiv grel tvyal tivy lini drakan te bacasakan veradarcni drakan

// 2. a=7 b=21 c="14" gtnel mec ev poqr tvrery arjeqnery

// 3. unenq default login="User123" psw="Kyaj123456"

// 3.1 petq e stugel dashtery miji andramaner "length"

// 3.2 ete ogtatery gri ir login USER123 naev metsatar asi chisht e bayc passwordi depqum vonc grvac e
// 3.3 ete chisht e asum e ok ete che sxal tvyalner

// ognakan
// https://www.w3schools.com/js/js_string_methods.asp




// 1 prompt unenal stugel ete arajin tary metsatar
// e sarqi poqratar miayn arajin tary nuynel kakaraky ete
// arajin tary poqratar e sarqi metsatar
// let anun="Jon"
// console.log(anun[0])
// if(anun[0]===anun[0].toLowerCase()){
//     anun=anun[0].toUpperCase()+anun.slice(1)
// }else{
//     anun=anun[0].toLowerCase()+anun.slice(1)
// }
// console.log(anun)
// 2. texti mej Stugel ete
//  ka - nshan tox inqy vecni dranic heto artahaytutyuny
// let str="texti mej Stugel ete" +
//     "ka - nshan tox inqy vecni dranic heto artahaytutyuny"
// let tex=str.indexOf("-")
// str=str.slice(0,tex+1)
// console.log(str)

// 3. ogtvoxic uzeq anuny ev anuny texadreq texti mej u aynopes
//  areq vor artahyutyan mej misht ir anuny avtomat sheshtvi
let text="ogtvoxic uzeq anuny ev anuny texadreq texti mej u aynopes" +
    "areq vor artahyutyan mej misht ir anuny avtomat sheshtvi"
text=text.replaceAll("anuny","Jon")
console.log(text)
//Eminem - MockingBird


//****************HomeWork*******************

//Ex.1
// let num = +prompt('Write Number', '');
//
// if (!Object.is(NaN,num)) {
//     if (num >= 0) {
//         alert(num);
//     } else {
//         alert(num * -1);
//     }
// } else {
//     alert('please write number');
// }

//Ex.2

// let a = 7;
// let b = 6;
// let c = '14';
// let MaxText = 'Max number is '; // unimportant
// let MinText = 'Min number is '; // unimportant

// if (a > b && a > c){
//     alert(MaxText + a);
// } else if (b > c ){
//     alert(MaxText + b);
// } else{
//     alert(MaxText + c);
// }
// if (a < b && a < c){
//     alert(MinText + a);
// } else if (b < c){
//     alert(MinText + b);
// } else {
//     alert(MinText + c);
// }


//Ex.3

// let Login = 'User123';
// let Password = 'Red123456';
//
// let LoginLine = prompt('Write Login', '');
// let PasswordLine = prompt('Write Password', '');
//
//
// if (LoginLine.length>5 || PasswordLine.length>5 || Login.toLowerCase() === LoginLine.toLowerCase() && Password === PasswordLine){
//     alert('is True');
// } else{
//     alert('login is False');
// }
//


