(function (){
    let loS=localStorage.getItem('luys')
    let ii=loS==1?0:loS==0?1:0;
    let luys=document.querySelector(".luys")
    luys.addEventListener('click',  function(){
        if(ii==0){
            ii++
            luys.src='anjatvac.png'
            document.body.style.background='white'
            document.body.style.color='black'
            localStorage.setItem('luys',0)
        }else{
            luys.src='miacac.png'
            document.body.style.background='black'
            document.body.style.color='white'
            ii--
            localStorage.setItem('luys',1)
        }
    })
    let l=localStorage.getItem('luys')
    if(l){
        if(l==0){
            luys.src='anjatvac.png'
            document.body.style.background='white'
            document.body.style.color='black'
        }else{
            luys.src='miacac.png'
            document.body.style.background='black'
            document.body.style.color='white'
        }
    }
})()
