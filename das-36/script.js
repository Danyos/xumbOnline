
let info=Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/comments/'),
]).then(json=>{

    return Promise.all(json.map(res=>res.json()))
}).then(data=>{


    func(data)
})
function func(data){
   const [user,post,comments]=data
  user.forEach(userData=>{
      console.log(userData.id)
      console.log(userData.name)
     let posts= post.reduce((prevusValue,currentvalue)=>{
         if(currentvalue.userId===userData.id){
            let comment= comments.filter(com=>com.postId === currentvalue.id)
             prevusValue.push({
                 ...currentvalue,
                 comments:comment
             })
         }
           return prevusValue
     },[])

      console.log(posts)
  })



    // console.log(post)
    // console.log(comments)

}








// vat codi vory shat shat eq handipelu

//
//
//
// let userApi=new Promise(function (resolve, reject) {
//    setTimeout(()=>{
//        resolve(user)
//    },1000)
// })
// userApi.then(res=>{
//     res.forEach(data=>{
//         console.log(data.name)
//         console.log(data.id)
//        let posts= new Promise(function (resolve, reject) {
//             setTimeout(()=>{
//                 resolve(post)
//             },1000)
//         })
//         posts.then(postinfo=>{
//           postinfo.forEach(postdata=>{
//
//                   console.log(postdata)
//
//                   let comment= new Promise(function (resolve, reject) {
//                       setTimeout(()=>{
//                           resolve(comments)
//                       },1000)
//                   })
//                   comment.then(com=>{
//
//                           console.log(com)
//
//                   })
//
//           })
//         })
//     })
// })