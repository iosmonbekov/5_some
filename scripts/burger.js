const changeBurgerClass = () => {
  if (burger.className === "menu_burger") {
    burger.className = "menu_burger_active";
    menu.className = "menu__row_active";
  } else {
    burger.className = "menu_burger";
    menu.className = "menu__row";
  }
};
const burger = document.querySelector(".menu_burger");
const menu = document.querySelector(".menu__row");

burger.onclick = changeBurgerClass;

const closeMenuBurger = () => {
  burger.className = "menu_burger";
  menu.className = "menu__row";
};
const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = closeMenuBurger;
}
