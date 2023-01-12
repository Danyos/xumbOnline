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
// let obj={
//     name:"Mxo",
//     surname:"poghosyan",
//
// }
// let obj2={
//     phone:"Nokia",
//     price:"2700$",
//
// }
// console.log(obj)
// console.log(obj2)
// {
//     name:"Mxo",
//     surname:"poghosyan",
//     phone:"Nokia",
//     price:"2700$",
//
// }

// tpel irenc amboxch gumarnery


// let sum=x.reduce((previousValue, currentValue)=>{
//     return previousValue+parseFloat(currentValue.price)
// },0)
// console.log(sum)


// tpel anun u ir ynkernery



// x.forEach(res=>{
//     document.write(`<br>`)
//     document.write(`<b>${res.name}-></b>`)
//     res.frend.forEach(resId=>{
//        let user=x.find(resUser=>resUser.id===resId)
//         document.write(`<b>${user.name}</b>`)
//         document.write(`<b>,</b>`)
//     })
// })


// let x1="$"
// let asd="Lorem ipsum"+ x1 +"sit amet"
// let asd2='hajox'+1+asd
// let asd3=`Lorem ipsum ${x1} sit amet`
// let asd4=`${asd+asd2} defws 5 ${asd3} ${x1==="$"?"Dolar":"vochinch"}`
// console.log(asd4)

//
// for (const positionKey in position) {
//     console.log(positionKey)
//     for (const positionKeyElement of position[positionKey]) {
//         let us=x.find(resuser=>resuser.id===positionKeyElement)
//         console.log(us.name)
//     }
//
// }

// _________________________________________
let lift=10

function kanchLifti(hark) {
    let lifitbtn=document.querySelectorAll(".lifitbtn")
   lifitbtn.forEach(res=>{
      if (res.classList.contains('active_hark')){
          res.classList.remove('active_hark')

      }
   })

    let ok="es arden texum em"
    if(hark.target.innerHTML<lift){
       ok= minus(hark.target.innerHTML)
    }else if(hark.target.innerHTML>lift && hark.target.innerHTML!==lift){
      ok= plus(hark.target.innerHTML)
    }
    hark.target.classList.add("active_hark")
    // alert(ok)
}

function plus(arg){
    for (let i=lift;i<arg;i++){
        lift++
    }
    return "es bardzaca arden"
}
function minus(arg){
    for (let i=lift;i>arg;i--){
        lift--
    }
    return "es ija arden"
}


// tnayin

// unenaq u button
// incriment ev dicriment
