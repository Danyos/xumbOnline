let x=localStorage.getItem('count')
let count=x||0
function tool(arg){
    if(arg==='incriment'){
        count++
    }else if(arg==='dicriment'){
        count--
    }
     localStorage.setItem("count",count)
    view()
}
function view(){
    let num=document.querySelector('.num')
    num.innerHTML=count
}
view()




let obj={
    name:'Muxi',
    surname:'Mxitaryan',
}
localStorage.setItem("count",JSON.stringify([[1,2,3,"88",8,78,8]]))
x=localStorage.getItem('count')
console.log(JSON.parse(x))