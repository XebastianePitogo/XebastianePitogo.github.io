window.onload = function() {
  setTimeout(function() {
    document.getElementById('preloader').style.display = 'none';
  }, 1000);
};

window.addEventListener('resize', function(event) {
    var width = window.innerWidth;
  
    if (width < 600) {
    } else {
    }
  });

const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

