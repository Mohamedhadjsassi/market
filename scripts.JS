var sec=document.getElementsByTagName('section')[0]

var homeprod=products.slice(0,4)

for (i of homeprod){
  sec.innerHTML+=`   
  <div class="product">
  <img src="${i.image} " alt="">
  <h3>${i.title}</h3>
  <p>${i.description.slice(0,100)}...<p>
  
  <div class="course"><button class="buy"><i class="fa-solid fa-cart-shopping"></i>add to cart </button><i id="heart"  class="fa-solid fa-heart fa-xl   heart-icon"style="color: #ffffff;"></i></div>
  </div>`

}



// Get all heart icons using querySelectorAll
const heartIcons = document.querySelectorAll('.heart-icon');

heartIcons.forEach(heart => {
  heart.addEventListener('mouseenter', function() {
    heart.style.color = 'rgb(240, 182, 182)';
  });

  heart.addEventListener('mouseleave', function() {
    heart.style.color = '#ffffff';
  });
});



// Get all heart icons using querySelectorAll
const buyicon = document.querySelectorAll('.buy');

buyicon.forEach(buyicon => {
  buyicon.addEventListener('mouseenter', function() {
    buyicon.style.color = '#ffffff';
  });

  buyicon.addEventListener('mouseleave', function() {
    buyicon.style.color = 'black';
  });
});








window.addEventListener('scroll' ,function(){
var 
navbar=this.document.getElementsByTagName('nav')[0];

if (this.window.scrollY>0){
    navbar.setAttribute('class','shadow');
}
else {
    navbar.removeAttribute('class');
  }
})

for(let i = 0; i < 30; i++){
    const zoomImage = document.getElementsByTagName('img')[i];

    // Add event listeners to handle mouseenter and mouseleave events
    zoomImage.addEventListener('mouseenter', handleMouseEnter);
    zoomImage.addEventListener('mouseleave', handleMouseLeave);
    
    // Function to handle mouseenter event (zoom in)
    function handleMouseEnter() {
      zoomImage.style.transform = 'scale(1.1)'; // Adjust the scale factor as needed
    }
    
    // Function to handle mouseleave event (reset to normal size)
    function handleMouseLeave() {
      zoomImage.style.transform = 'scale(1)';
    }
    }


    function showSpace() {
        document.getElementById('space').style.visibility = 'visible';
        document.getElementById('register').style.visibility = 'hidden';
        document.getElementById('loglink').innerHTML = '<a href="logout.html">Logout</a>';;  
    }