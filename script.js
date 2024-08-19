 var crsr= document.querySelector("#cursor")
 var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove" ,function(dets){
    crsr.style.left=dets.x+10+"px"
    crsr.style.top=dets.y+"px"
})
document.addEventListener("mousemove" ,function(dets){
    blur.style.left=dets.x-40+ "px"
    blur.style.top=dets.y-40+"px"
})





gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
    //   markers:true,  
        start:"top -10%",
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})
 var h4All= document.querySelectorAll("#nai, h4" )
 h4All.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=5
        crsr.style.border="0.4px solid #fff",
        crsr.style.backgroundColor="transparent"
    })


 elem.addEventListener("mouseleave",function(){
    crsr.style.scale= 1
    crsr.style.border="0px solid ##FFFF00",
    crsr.style.backgroundColor="#FFFF00"
})
});

gsap.from("#about",{
    y:50,
    opacity:0, 
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"#body",
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }
})
gsap.from(".cards",{
    scale:0.4,
    opacity:0, 
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"#body",
        start:"top 80%",
        end:"top 75%",
        scrub:2,

    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:1
    }
})