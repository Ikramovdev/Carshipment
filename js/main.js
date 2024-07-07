let elDropDownHead =document.querySelector(".dropdown__heading")
let elDrowdownHideContent =document.querySelector(".dropdown__hide-content")
let elline2 =document.querySelector(".line2")

elDropDownHead.addEventListener("click",function(){
    elDrowdownHideContent.classList.toggle("show")
    elline2.classList.toggle("rotate")
})
let elDropDownHead2 =document.querySelector(".dropdown__heading2")
let elDrowdownHideContent2 =document.querySelector(".dropdown__hide-content2")
let eltwoitemline2 =document.querySelector(".twoitemline2")

elDropDownHead2.addEventListener("click",function(){
    elDrowdownHideContent2.classList.toggle("show2")
    eltwoitemline2.classList.toggle("rotate2")
})

let elDropDownHead3 =document.querySelector(".dropdown__heading3")
let elDrowdownHideContent3 =document.querySelector(".dropdown__hide-content3")
let eltwoitemline3 =document.querySelector(".threeitemline3")

elDropDownHead3.addEventListener("click",function(){
    elDrowdownHideContent3.classList.toggle("show3")
    eltwoitemline3.classList.toggle("rotate3")
})
let elDropDownHead4 =document.querySelector(".dropdown__heading4")
let elDrowdownHideContent4 =document.querySelector(".dropdown__hide-content4")
let eltwoitemline4 =document.querySelector(".fouritemline4")

elDropDownHead4.addEventListener("click",function(){
    elDrowdownHideContent4.classList.toggle("show4")
    eltwoitemline4.classList.toggle("rotate4")
})