(function (){
    let open=true
   let myicon=document.querySelector('.myicon')
   let switcher=document.querySelector('.switcher')
    myicon.addEventListener("click",function (){
        if (open){
            switcher.style.transform='translate(0%)'
        }else{
            switcher.style.transform='translate(-100%)'
        }
        open=!open

    })
    let color_window=document.querySelectorAll('.color_window')
    color_window.forEach(res=>{
      res.addEventListener('click',function (){
          myicon.style.color=this.dataset.color
          document.body.style.background=this.dataset.color
      })
    })
    let a=false
    a&=8
    console.log(a)

})()





// https://www.w3schools.com/js/js_bitwise.asp
