import './less/index.less'

function random(){
    return Math.floor(Math.random()) * 256;
}

document.querySelector("h1").addEventListener("click",(e)=>{
    alert("Otobüs Kalkıyoor!");    
});

let img=document.querySelectorAll("img")
img.forEach((image) => {
    image.addEventListener("dblclick", (e) => {
    image.style.filter = "grayscale(100%)"; 
    })
})

img.forEach((image) => {
    image.addEventListener("click", (e) => {
    image.style.filter = "unset"; 
    })
})

let baslik=document.querySelector("h1");
baslik.addEventListener("mouseover", (e)=>{
    e.target.style.color="#ffda46";
});

baslik.addEventListener("mouseout", (e)=>{
    e.target.style.color="#17a2b8";
});

document.querySelector(".intro").addEventListener("focus" , (e) => {
    e.target.style.backgroundColor = "red";
});

