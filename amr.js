console.log('amr')
var lefta = document.getElementById('left');
var righta = document.getElementById('right');
var slider = document.getElementById('cxx');
var images = ['image2.png','imagex.jpg'];
var i;
i = 0;

slider.style.backgroundImage = "url("+images[i]+")";
lefta.onclick  = function() {
  
   slider.style.backgroundImage = "url("+images[i-1]+")";
    console.log('left');
}
righta.onclick  = function() {
    slider.style.backgroundImage = "url("+images[i+1]+")";
i = i +1;
    console.log('right');
    
}
window.onscroll =function(){left.style.display = none;}
