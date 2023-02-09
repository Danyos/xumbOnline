// function Student() {
//     this.name = 'John';
//     this.gender = 'M';
// }
// Student.prototype.age = 15;
// let s=new Student()
// let s2=new Student()
// s.__proto__={
//     kk:123
// }
//
//
//
// console.log(s)
// console.log(s2)
// console.log({})
// let obj={
//     name:"valodya"
// }
// obj.__proto__={surname:"Mxitaryan"}
//
// console.log(obj.surname)
//
// let user = [
//     {
//         id: 1,
//         name: "Karen",
//         surname: "Vardanyan"
//     },
//     {
//         id: 2,
//         name: "Manvel",
//         surname: "Vardanyan"
//     },
//     {
//         id: 3,
//         name: "hesu",
//         surname: "Vardanyan"
//     }
// ]
// let user_country = [
//     {
//         id: 1,
//         user_id: 1,
//         country: "Yerevan",
//     },
//     {
//         id: 2,
//         user_id: 2,
//         country: "Kirovakan",
//     }, {
//         id: 3,
//         user_id: 3,
//         country: "Ejmaidzin",
//     }
// ]
// let user_info = [
//     {
//         id: 1,
//         user_id: 1,
//         login: "Karen@mail.ru",
//         password: "Vardanyan"
//     },
//     {
//         id: 2,
//         user_id: 2,
//         login: "Manvel@mail.ru",
//         password: "Vardanyan"
//     },
//     {
//         id: 3,
//         user_id: 3,
//         login: "hesu@mail.ru",
//         password: "Vardanyan"
//     }]
// for (const userInfoElement in user) {
//     user[userInfoElement].__proto__=user_country.find(res=>res.user_id===user[userInfoElement].id)
//     user_country[userInfoElement].__proto__=user_info.find(res=>res.user_id===user[userInfoElement].id)
// }
//
//
// console.log(user)
//
//
//
// let x=[]
// x.__proto__.filter="barev"
// console.log([])


// ____________Clouser_____________

// function clouser_1() {
//     let count = 0
//     return {
//         incriment() {count++},
//         decriment() {count--},
//         value: function() {
//             return count;
//         }
//     }
// }
//
//
// let cl = clouser_1()
//
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.incriment()
// cl.decriment()
//
// console.log(cl.value())
// console.log(cl)

function x(){
   let arr=[1,2,3,4,5,6]
    this.range=function (res){
        return res(arr)
    }

}
let XX=new x()

let k=XX.range(function (arjeq){

    return arjeq.filter(res=>res%2===0)
})
console.log(k)


// 1 sarqeq counter  + - +10
// 2 new function sarqeq method vory arden vidyoyi mej asum em










