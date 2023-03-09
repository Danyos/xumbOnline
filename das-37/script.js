// $(document).ready(function () {
//     let count = 0
//     function mynum() {
//         $('.num').html(count)
//     }
//     $(".num").dblclick(function () {
//         $(".num").attr("contenteditable", "true")
//         $(".num").focus()
//     })
//     $(".num").keyup(function () {
//         count = +this.innerHTML
//
//     })
//     $('.incriment').click(function () {
//         count++
//         mynum()
//     });
//     $('.decriment').click(function () {
//         count--
//         mynum()
//     })
//
// })
// $('a').click(function (){
//     $(this).css('color','red')
// })


let atage=document.querySelectorAll('a')
atage.forEach(tag=>{
    tag.addEventListener('click',a)
})

function a(e){
    e.preventDefault()
    e.target.style.color='red'
}




