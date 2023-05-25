const light=document.querySelector(".bx-sun");
const dark=document.querySelector(".bx-moon");
const profile_pic=document.getElementById("profile-pic");


dark.addEventListener("click",()=>{
    dark.classList.add("hide");
    light.classList.remove("hide");
    document.body.style="background-image: url(img/bg-photo-dark.png);";
    profile_pic.src="img/profile-pic-dark.png";
    document.documentElement.style="color: #b4ffdd; text-shadow: 10px 10px 10px black;";
    document.getElementsByClassName("bx").style="color: white;"
});

light.addEventListener("click",()=>{
    light.classList.add("hide");
    dark.classList.remove("hide");
    document.body.style="background-image: url(img/bg-photo-light.png);";
    profile_pic.src="img/profile-pic-light.png";
    document.documentElement.style="color: black;";
    icons.classList.remove("bx-dark");
    icons.classList.add("bx-light");
});