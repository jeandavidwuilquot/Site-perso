// $('.parallax-window').parallax({imageSrc: 'assets/img/annamill_2.jpg'});

// $('.parallax-window').parallax({imageSrc: 'assets/img/cover_3.jpg'});



/*APPARITION DU BOUTON AU CHARGEMENT DE LA PAGE*/ 

window.onload = function()
{
  setTimeout(function()
  {
    document.getElementById("button-down").style.display = "inline";
  }, 1200);
}

/*BOUTON NAVBAR */

let scroll=document.querySelector("#button-nav")
let container = document.getElementById("container_all");

scroll.addEventListener("click",()=>{
    
    scroll.classList.toggle("button-change");
    container.classList.toggle("container_anim");

})

// /*Parallax*/ 
// let image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image);
