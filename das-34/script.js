function headerFront() {
    fetch("https://avetsyans.tk/api/post/category/all")
        .then(response => response.json())
        .then(res => {
            pageHeader(res)
        }).catch(err => {
        console.log(err)
    })
}

headerFront()

function info(url) {

    fetch(url)
        .then(response => response.json())
        .then(res => {
            pagination(res.links)
            printView(res.data)

        }).catch(err => {
        console.log(err)
    })

}

function pageHeader(data) {
    let links = document.querySelector('.links')
    data.forEach((res,index) => {
        let tagLi = document.createElement('li')
        tagLi.innerHTML = `<a class="${!index?'actives':''}" data-id="${res.id}">${res.name}</a>`

        links.appendChild(tagLi)
        tagLi.addEventListener("click", function (e) {
            myactive()
            productByCategory(e.target.dataset.id)
            e.target.classList.add('actives')
        })
    })
}
function myactive(){
    let actives=document.querySelector('.actives')
    actives.classList.remove("actives")
}
function productByCategory(id=1){

    fetch('https://avetsyans.tk/api/post/category/post/'+id)
        .then(response => response.json())
        .then(res => {
            pagination(res.links)
            printView(res.data)

        }).catch(err => {
        console.log(err)
    })
}

function printView(arg) {

    let parent = document.querySelector('.parent')
    parent.innerHTML = ''
    arg.forEach(res => {

        let one = document.createElement('div')
        one.classList.add('one')
        parent.appendChild(one)
        one.innerHTML += `<h1>${res.id}</h1>`
        one.innerHTML += `<h2>${res.FullName}</h2>`
        one.innerHTML += `<div>${res.category.name}</div>`
        one.innerHTML += `<p>${res.email}</p>`
        one.innerHTML += `<div>${res.category_id}</div>`
        one.innerHTML += `<button class="btn2" data-id="${res.id}" onclick="readMore(event)">Read More</button>`

        one.innerHTML += `<button class="icon" data-id="${res.id}" onclick="remove(event)"><i class="fa fa-times-circle-o" aria-hidden="true" style="font-size:30px;"></i></button>`
    })
}

function remove(e) {

}

let modal = document.getElementById("modal");
let modal_box = document.querySelector(".content");
let span = document.getElementsByClassName("close")[0];

function readMore(e) {
    modal_box.innerHTML = ''
    let uid = e.target.dataset.id
    fetch('https://jsonplaceholder.typicode.com/posts/' + uid)
        .then(response => response.json())
        .then(res => {
            modal_box.innerHTML = `
                    <h2>${res.title}</h2>
                    <p>${res.body}</p>
                `

        }).catch(err => {
        console.log(err)
    })


    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function pagination(data) {
    let tagpagination = document.querySelector('.pagination')
    tagpagination.innerHTML = ''
    data.forEach(res => {
        console.log(res)
        tagpagination.innerHTML += `<a href="${res.url || "#"}"  class="paginationLink ${res.active ? 'active' : ''}">${res.label}</a>`
    })
    let paginationLink = document.querySelectorAll('.paginationLink')
    paginationLink.forEach(res => {
        res.addEventListener("click", function (event) {
            event.preventDefault()

            info(event.target.href)
        })
    })
}


