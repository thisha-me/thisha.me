//------------------------------------cursor--------------------------
const cursor = document.querySelector('.cursor');
var timeout;

window.onload=()=>{
    cursor.style.display="none";
}

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px; display:block;")
    function mouseStopped(){
        cursor.style.display="none";
    }
    clearTimeout(timeout);
    timeout=setTimeout(mouseStopped,1000);
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});

document.addEventListener('contextmenu', event => event.preventDefault());