var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)





var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="img/icons/redheart.png"
        }
        else{
            e.target.src="img/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})


//Collections


// var offerbar = document.querySelector(".offer-bar")

// document.getElementById("offer-close").addEventListener("click",
// function(){
//     offerbar.style.display="none"
// }

// )

// var sidenav=document.querySelector(".side-navbar")
// var sidebar=document.getElementById("offer-closer")
// var menu=document.querySelector(".navbar-menu-toggile")

// menu.addEventListener("click",
// function(){
//     sidenav.style.marginLeft="0px"
// }
// )

// document.getElementById("offer-closer").addEventListener("click",
// function(){
//     sidenav.style.marginLeft="-800px"
// }
// )


// var left=document.getElementById("slider-left-activate")
// var right=document.getElementById("slider-right-activate")
// var slide=document.querySelector(".slider-image-container")
// var marginLeft=0

// right.addEventListener("click",
// function(){
//     if(marginLeft==200)
//     {
//     marginLeft=0
//     slide.style.marginLeft="-"+marginLeft+"vw" 
// }
//     else{
//         marginLeft=marginLeft+100
//         slide.style.marginLeft="-"+marginLeft+"vw"
//     }
// })

// left.addEventListener("click",
//     function(){
    
//         if(marginLeft==0)
//         {
            
//         marginLeft=200
//         slide.style.marginLeft="-"+marginLeft+"vw" 
//     }
//         else{
//             marginLeft=marginLeft-100
//             slide.style.marginLeft="-"+marginLeft+"vw"
//         }
//     })




    
// var movLeft=document.getElementById("brands-left-activate")
// var movRight=document.getElementById("brands-right-activate")
// var box=document.querySelector(".brands-box")

// movRight.addEventListener("click",function()
// {
   

//     if(marginLeft==20)
//     {
//     marginLeft=0
//     box.style.marginLeft="-"+marginLeft+"vw" 
// }
//     else{
//         marginLeft=marginLeft+10
//         box.style.marginLeft="-"+marginLeft+"vw"
//     }
// })

// movLeft.addEventListener("click",function()
// {


//     if(marginLeft==0)
//     {
        
//     marginLeft=20
//     box.style.marginLeft="-"+marginLeft+"vw" 
    
// }
//     else{
//         marginLeft=marginLeft-10
//         box.style.marginLeft="-"+marginLeft+"vw"
//     }
// })

