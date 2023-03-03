let openBtn = document.querySelector(".openBtn i")
let closeBtn = document.querySelector(".close i");
let SideBar = document.querySelector("header nav");
let overlay = document.querySelector(".overlay");
let header = document.querySelector("header");
let fileterBtns = document.querySelectorAll(".filter li");
let foodsBoxs = document.querySelectorAll(".foods .box");
closeBtn.addEventListener("click",()=>{
    SideBar.classList.remove("open");
})
overlay.addEventListener("click",()=>{
    SideBar.classList.remove("open");
})
openBtn.addEventListener("click",(e)=>{
    SideBar.classList.add("open");
})
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
})

fileterBtns.forEach((Btn)=>{
    Btn.addEventListener("click",()=>{
        fileterBtns.forEach((ele)=>{
            ele.classList.remove("active");
        })
        Btn.classList.add("active");
        foodsBoxs.forEach((box)=>{
            box.style.display = "none";
        })
        let ActiveBoxs = document.querySelectorAll(`${Btn.dataset.cat}`);
        ActiveBoxs.forEach((box)=>{
            box.style.display = "block";
        })
    })
})

let upBtn = document.querySelector(".up");
window.addEventListener("scroll",()=>{
    if(window.scrollY >= 200){
        upBtn.classList.add("on");
    }else{
        upBtn.classList.remove("on");
    }
})
upBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})