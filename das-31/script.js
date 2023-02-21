
function info(){
    let g=localStorage.getItem('list')
    if(g){

        printView(JSON.parse(g))
    }else{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(res =>{
                localStorage.setItem('list',JSON.stringify(json))
                printView(res)

            } ).catch(err=>{
            console.log(err)
        })
    }

}
function printView(arg){
    let parent=document.querySelector('.parent')
    parent.innerHTML=''
arg.forEach(res=>{

let one=document.createElement('div')
  one.classList.add('one')
  parent.appendChild(one)
  one.innerHTML+=`<h2>${res.title}</h2>`
  one.innerHTML+=`<p>${res.body}</p>`
  one.innerHTML+=`<button class="btn2" data-id="${res.id}" onclick="readMore(event)">Read More</button>`

  one.innerHTML+=`<button class="icon" data-id="${res.id}" onclick="remove(event)"><i class="fa fa-times-circle-o" aria-hidden="true" style="font-size:30px;"></i></button>`
})
}

function remove(e) {
    let uid=e.target.parentElement.dataset.id
    let item=JSON.parse(localStorage.getItem('list'))
    item=item.filter(res=>res.id!== +uid)
    localStorage.setItem('list',JSON.stringify(item))
    printView(item)

}

let modal = document.getElementById("modal");
let modal_box = document.querySelector(".content");
let span = document.getElementsByClassName("close")[0];
function readMore(e) {
    modal_box.innerHTML=''
    let uid=e.target.dataset.id
    fetch('https://jsonplaceholder.typicode.com/posts/'+uid)
        .then(response => response.json())
        .then(res =>{
                modal_box.innerHTML=`
                    <h2>${res.title}</h2>
                    <p>${res.body}</p>
                `

        } ).catch(err=>{
        console.log(err)
    })




  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 3. buttonov
// 2. scrolloe
// 1.https://www.w3schools.com/css/css3_pagination.asp


