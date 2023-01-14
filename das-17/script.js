// let count=0
// let step=1;
// function view(res){
//     let counter__input=document.querySelector(".counter__input")
//     counter__input.innerHTML=res
// }
//
// function dicriment(){
//     count-=step
//     view(count)
// }
// function incriment(){
//     count+=step
//     view(count)
// }
// function odd(){
//     step=1
//     findClassAdd("odd")
// }
// function even(){
//     step=2
//     findClassAdd("even")
// }
// function ten(){
//     step=10
//     findClassAdd("10")
// }
// function findClassAdd(a){
//     let counter__button2=document.querySelectorAll(".counter__button2")
//     counter__button2.forEach(res=>{
//
//        if(res.classList.contains("active")){
//            res.classList.remove("active")
//
//        }
//        if(res.innerHTML===a){
//            res.classList.add('active')
//        }
//     })
// }



// _________________________________________________

//
//
// console.log(text.innerHTML)
// text.innerHTML="<b>barev</b>"


// let x=document.getElementsByClassName("text")[0]
// console.log(x)
let inpname2=document.querySelector(".text:nth-child(even)")
inpname2.style.color="green"
inpname2.classList.add("active")

// console.log(inpname2)
// function adds(){
//     let inpname=document.querySelector("#name")
//     let text=document.querySelector('.text')
//     text.innerHTML+=inpname.value+", "
//     inpname.value=''
// }
let her=[
  {
    id:1,
    phone:"phone"
  },
  {
    id:2,
    phone:"samsung"
  },
  {
    id:3,
    phone:"nokia"
  },
]
let model=[
  {
    id:1,
    her_id:2,
    phone:"s20"
  },
  {
    id:2,
    her_id:2,
    phone:"s21"
  },
  {
    id:3,
    her_id:2,
    phone:"s22"
  },
  {
    id:4,
    her_id:1,
    phone:" 14 pro max"
  },
  {
    id:5,
    her_id:1,
    phone:"13 pro max"
  },
  {
    id:6,
    her_id:1,
    phone:"12"
  }
]


function phonemodel(){
  let phones=document.querySelector("#phones")
 let data= model.filter(res=>res.her_id=== +phones.value)
  console.log(data)
}







