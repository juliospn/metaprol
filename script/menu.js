var menuItems = document.querySelectorAll('.menu__lista');

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseover', function() {
    this.querySelector('.sub-menu').style.display = 'block';
  });
}

var menuItems = document.querySelectorAll('.menu__lista');

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseout', function() {
    this.querySelector('.sub-menu').style.display = 'none';
  });
}



// Código hover do sub-menu //

var subMenuItems = document.querySelectorAll(".sub-menu__item");

subMenuItems.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        this.classList.add("hover");
    });
    item.addEventListener("mouseout", function() {
        this.classList.remove("hover");
    });
});