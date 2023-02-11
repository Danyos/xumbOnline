function server(){
    return [
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

}

// class Man{
//     constructor(data) {
//         this.httpRequest=data
//     }
//     getinfo(){
//         this.count=this.httpRequest.length
//         this.id=this.httpRequest.reduce((previusvalue,currentValue)=>{
//             previusvalue.push(currentValue.id)
//             return previusvalue
//         },[])
//
//         return this.id
//     }
// }
//
// let m=new Man(server())
// //
// console.log(m)
// console.log(m.getinfo())








class Mard{
    constructor(n) {
        this.name=n
        this.glux="klor"
        this.achqer="Kapuyt"
        this.akanjner=2
        this.derqer=2
        this.voter=2
        this.matner=10
    }

    getInfo(){
        return "Sa tvyal mardu anunn e "+this.name
    }


}
class Txa extends Mard{
    constructor(name,hair) {
        super(name);
        this.hair=hair
    }

    getInfo() {
        return super.getInfo()+" exav"
    }
    static gg(){
        return 1
    }

}
class Car{
    constructor() {
        this.model="Bmw"
    }
}
class InfoMan extends Txa{
constructor({name,hair,work,phone}) {
    super(name,hair);
    this.work=work
    this.phone=phone
}





}

// let im=new InfoMan({name:"Pogthos",hair:"Sev Mazer",work:"tt volort",phone:"+37498657545"});
console.log(InfoMan.gg())

// let t=new Txa("Mxitar")
// console.log(t)




//
// let t=new Mard("Valodya")
// console.log(t.getInfo())



// fetch('http://ip-api.com/json').then(
//     r => r.json()
// ).then(console.log);




// 1. collback
// 2. keybord


