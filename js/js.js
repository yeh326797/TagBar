var menuItems = $(".menu-item");
var menuBorder = $(".menu-border");

//改變背景顏色
menuItems.on("click", function () {

  menuItems.removeClass("active");
  $(this).addClass("active");
  var activeItem = $(".active")

  if (activeItem.hasClass("item-orange")) {
    activeItem.parents("body").removeClass().addClass("bgOrange");
  } else if (activeItem.hasClass("item-pink")) {
    activeItem.parents("body").removeClass().addClass("bgPink");
  } else if (activeItem.hasClass("item-purple")) {
    activeItem.parents("body").removeClass().addClass("bgPurple");
  } else if (activeItem.hasClass("item-yellow")) {
    activeItem.parents("body").removeClass().addClass("bgYellow");
  } else if (activeItem.hasClass("item-green")) {
    activeItem.parents("body").removeClass().addClass("bgGreen");
  }

});


//移動波浪  

var menu = document.querySelector(".menu");
var Border = document.querySelector('.menu-border');
var Items = document.querySelectorAll('.menu-item');

function offsetMenuBorder(element, Border) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (Border.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
  Border.style.transform = `translate3d(${left}, 0 , 0)`;
}

Items.forEach(item => {
  item.addEventListener('click', () => {
    offsetMenuBorder(item,Border);
  })
})
