let obj=[
    {
        id: 1,
        name: "iPhone 9",
        description: "An Apple iPhone which is nothing like Apple, affordable and unbreakable",
        price: 549,
        brand: "Apple",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/1/1.jpg",
        status: 'finished'

    },
    {
        id: 2,
        name: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        brand: "Apple",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/2/1.jpg",
        status: 'used'
    },
    {
        id: 3,
        name: "Samsung Galaxy S11",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        brand: "Samsung",
        category: "smartphones",
        images: "https://content.onliner.by/news/1100x5616/3e32826a6507f396652d0ad5cfe8cdb1.jpeg",
        status: 'refurbished'
    },
    {
        id: 4,
        name: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        brand: "OPPO",
        category: "smartphones",
        images: "https://m.media-amazon.com/images/I/61Gj-pGyPyS._SX679_.jpg",
        status: 'new'
    },
    {
        id: 5,
        name: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        brand: "Huawei",
        category: "smartphones",
        images: "https://dummyjson.com/image/i/products/5/1.jpg",
        status: 'finished'
    },
    {
        id: 6,
        name: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        brand: "Apple",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/6/1.png",
        status: 'finished'
    },
    {
        id: 7,
        name: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        brand: "Samsung",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/7/1.jpg",
        status: 'new'
    },
    {
        id: 8,
        name: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        brand: "Microsoft Surface",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/8/1.jpg",
        status: 'refurbished'
    },
    {
        id: 9,
        name: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        brand: "Infinix",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/9/1.jpg",
        status: 'used'
    },
    {
        id: 10,
        name: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        brand: "HP",
        category: "laptops",
        images: "https://dummyjson.com/image/i/products/10/1.jpg",
        status: 'refurbished'
    },
    {
        id: 11,
        name: "Acqua Di Gio",
        description: "Acqua Di Gio by Giorgio Armani concentrated perfume",
        price: 135,
        brand: "Giorgio Armani",
        category: "fragrances",
        images: "https://dummyjson.com/image/i/products/11/1.jpg",
        status: 'new'
    },
    {
        id: 12,
        name: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 40,
        brand: "Royal Mirage",
        category: "fragrances",
        images: "https://dummyjson.com/image/i/products/12/1.jpg",
        status: 'new'
    }]

let product_filter={
    f_by_brand:[],
    f_by_category:[],
    f_by_status:'',
    price:{
        to:null,
        from:null
    }
}

let f_by_product=[...obj]
function tbody(arg){
    let mylist = document.querySelector(".list")
    mylist.innerHTML=''
    arg.forEach(function (res){
        let tr = document.createElement("tr")
        mylist.appendChild(tr)
        for (const trKey in res) {
            if(trKey==='images'){
                tr.innerHTML += `<td><img src=${res[trKey]} width="100px"></td>`
            }else{
                tr.innerHTML += `<td>${res[trKey]}</td>`
            }
        }
        tr.innerHTML += `<td onclick=deleted(event)><i class="fa fa-trash" id="deleter" data-mid=${res.id}></i></td>`
    })
    let td = document.createElement("td")
}
function loading(){
    tbody(obj)
}



function publish(){
    let uname=document.querySelector("#name")
    let udescription=document.querySelector("#description")
    let uprice=document.querySelector("#filter__input-21")
    let ubrand=document.querySelector("#brand")
    let ucategory=document.querySelector("#category")
    let uimages=document.querySelector("#images")
    let ustatus=document.querySelector("#mystatus")
    let uid=obj[obj.length-1].id+1
    obj.push({
        id: uid,
        name: uname.value,
        description: udescription.value,
        price: uprice.value,
        brand: ubrand.value,
        category: ucategory.value,
        images: uimages.value,
        status: ustatus.value,
    })
    tbody(obj)
}
function deleted(e){
    let mobj=obj.filter(res=>res.id!=e.target.dataset.mid)
    tbody(mobj)
}
function search(){
    let namesearch = document.querySelector("#search")
    console.log(namesearch.value)
    let filteritem = obj.filter((res)=>{
        return res.brand.toLowerCase().includes(namesearch.value.trim().toLowerCase())
    })
    tbody(filteritem)
}
// filter start

// FILTER BY STATUS start
function filterobj(){
    let mystatus = document.querySelector("#mystatusfilter")
    product_filter.f_by_status=mystatus.value
    let myobj=filterByProduct()
    tbody(myobj)
}
// FILTER BY STATUS end

// PRICE START
function price(){
    let lowestprice = document.querySelector(".filter__range-from")
    let highestprice = document.querySelector(".filter__range-to")
    // console.log(lowestprice.value, highestprice.value)
        if(lowestprice.value.length>0 && highestprice.value.length>0){
            product_filter.price.to=lowestprice.value
            product_filter.price.from=highestprice.value
       }else if(lowestprice.value.length>0 ){
            product_filter.price.to=lowestprice.value
        }else if(highestprice.value.length>0 ){
            product_filter.price.from=highestprice.value
        }
    tbody(filterByProduct())
}
// PRICE end

// Sort by start
function sortprice(){
    let radioselect = document.querySelector("input[name=filters-top]:checked")
    let priceList
    if(radioselect.value == 1){
        priceList = f_by_product.sort((a,b) => parseFloat(a.price)-parseFloat(b.price))
    }else{
        priceList = f_by_product.sort((a,b) => parseFloat(b.price)-parseFloat(a.price))
    }
    tbody(priceList)
}
// Sort by end
// FILTERBYBRAND
let FILTERBYBRAND=document.querySelectorAll('.FILTERBYBRAND')
FILTERBYBRAND.forEach(tag=>{
    tag.addEventListener("change",(e)=>{
        if(product_filter.f_by_brand.includes(e.target.value)){
            product_filter.f_by_brand.splice(product_filter.f_by_brand.indexOf(e.target.value),1)
        }else{
            product_filter.f_by_brand.push(e.target.value)
        }
        let myobj=filterByProduct()

        tbody(myobj)
    })
})
// FILTER BY BRAND end
// FILTER BY CATEGORY Start
let FILTERBYCATEGORY=document.querySelectorAll('.FILTERBYCATEGORY')
FILTERBYCATEGORY.forEach(tag=>{
    tag.addEventListener("change", (e)=>{
        console.log(e.target.value)
        console.log(product_filter)
        if(product_filter.f_by_category.includes(e.target.value)){
            product_filter.f_by_category.splice(product_filter.f_by_category.indexOf(e.target.value),1)
        }else{
            product_filter.f_by_category.push(e.target.value)
        }
        tbody(filterByProduct())
    })
})
// FILTER BY CATEGORY end

// filter Product start
function filterByProduct(){
    return  f_by_product=[...obj.filter(
        (n) =>
            (!product_filter.f_by_status || n.status === product_filter.f_by_status ) &&
            (!product_filter.f_by_category.length || product_filter.f_by_category.includes(n.category)) &&
            (!product_filter.f_by_brand.length || product_filter.f_by_brand.includes(n.brand)) &&
            (!product_filter.price.to || product_filter.price.to <= n.price) &&
            (!product_filter.price.from || product_filter.price.from >= n.price)
    )]
}
// filter Product end

















// 1.tnayin delete                                          ??????????????
// 2. chekbox patrastel te vor brandi apranqnes cankanum    ✓✓✓✓✓✓✓✓✓✓
// 3.add                                                    ✓✓✓✓✓✓✓✓✓✓
// 4. chekbox patrastel te vor category apranqnes cankanum  ✓✓✓✓✓✓✓✓✓✓


///FILTER BY BRAND
// function filter_by_brand(){
//     let filteritem = obj.filter(function (res){
//         return res.brand == "Apple"
//     })
//     tbody(filteritem)
// }






















