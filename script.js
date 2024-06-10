let sidemenu =document.getElementById("sidemenu");
let tl =gsap.timeline();
tl.from("#sidebar",{
    x:-170,
    duration:0.3
    
})
tl.pause();
sidemenu.addEventListener("click",function(){
    tl.play();
})