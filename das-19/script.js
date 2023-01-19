let list=[
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        brand: "Apple",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/1/1.jpg",
        status: 'progress'

    },
    {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        brand: "Apple",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/2/1.jpg",
        status: 'completed'
    },
    {
        id: 3,
        title: "Samsung Galaxy S11",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        brand: "Samsung",
        category: "smartphones",
        images: "https://content.onliner.by/news/1100x5616/3e32826a6507f396652d0ad5cfe8cdb1.jpeg",
        status: 'reject'
    },
    {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        brand: "OPPO",
        category: "smartphones",
        images: "https://m.media-amazon.com/images/I/61Gj-pGyPyS._SX679_.jpg",
        status: 'cancel'
    },
    {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        brand: "Huawei",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/5/1.jpg",
        status: 'progress'
    },
    {
        id: 6,
        title: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        brand: "APPle",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/6/1.png",
        status: 'progress'
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        brand: "Samsung",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/7/1.jpg",
        status: 'cancel'
    },
    {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        brand: "Microsoft Surface",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/8/1.jpg",
        status: 'reject'
    },
    {
        id: 9,
        title: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        brand: "Infinix",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/9/1.jpg",
        status: 'completed'
    },
    {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        brand: "HP Pavilion",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/10/1.jpg",
        status: 'reject'
    },
    {
        id: 11,
        title: "perfume Oil",
        description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        price: 13,
        brand: "Impression of Acqua Di Gio",
        category: "fragrances",
        images: "https://dummyjson.com/image/i/products/11/1.jpg",
        status: 'cancel'
    },
    {
        id: 12,
        title: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 40,
        brand: "Royal_Mirage",
        category: "fragrances",
        images: "https://dummyjson.com/image/i/products/12/1.jpg",
        status: 'cancel'
    }]


let thead=document.querySelector(".paymentList thead")
let tbody=document.querySelector(".paymentList tbody")
function trAdd(arg="tbody"){
    let tr=document.createElement("tr")
    if(arg==="thead") {
        return thead.appendChild(tr)
    }
    return tbody.appendChild(tr)
}
function theadF(){
    let tTr= trAdd("thead")
    Object.keys(list[0]).forEach(res=>{
        tTr.innerHTML+=`<th>${res}</th>`
    })
    tBodyF(list)
}
theadF()
function tBodyF(mylist){
    mylist.forEach(res=>{
        let tr=trAdd()

        for (const resKey in res) {
            if(resKey==="images"){
                tr.innerHTML+=`<td><img src=${res[resKey]} style="width: 100px" srcset=""></td>`
            }else{
                tr.innerHTML+=`<td>${res[resKey]}</td>`
            }

        }
        tr.innerHTML+=`<td><i class="fa fa-trash deleted"></i></td>`

    })
}
function addInfo(){
    let userName=document.querySelector("#userName")
    let paymentWay=document.querySelector("#paymentWay")
    let userPrice=document.querySelector("#userPrice")
    list.push({
        id:list[list.length-1].id+1,
        name:userName.value,
        payment_way:paymentWay.value,
        price:userPrice.value,

    })
    tbody.innerHTML=''
    tBodyF()
}

function search(){
    let res=document.querySelector("#search")
    let errors=document.querySelector(".errors")
    if(res.value.length){
        let mylist=list.filter(data=>data.title.toUpperCase().includes(res.value.toUpperCase()) || data.description.toUpperCase().includes(res.value.toUpperCase()))
        tbody.innerHTML=''

        if (mylist.length>0){
            errors.innerHTML=""
            theadF()
            tBodyF(mylist)
        }else{
            errors.innerHTML="chi gtnvel"
        }

    }

}


// tnayin

// 1. delete sarqel
// 2. gumarnery achman kargov kam nvazman selectov
// 3. gumary min max
// 4. changche status   