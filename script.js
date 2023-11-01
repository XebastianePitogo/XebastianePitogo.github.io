window.addEventListener('resize', function(event) {
    var width = window.innerWidth;
  
    if (width < 600) {
      // Code for screens smaller than 600px
    } else {
      // Code for screens larger than 600px
    }
  });

window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
});

const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
