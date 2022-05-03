/**
 * Referencias al Html
 */
const responsive = document.getElementById("responsive");
const listNav = document.querySelector(".nav");
const list = document.querySelector(".listDropdown");

const dropdown = document.getElementById("dropdown");
const containeDropdown = document.getElementById("containeDropdown");

/**
 * Declaración de variables
 */
let showMenuResponsive = true;

/**
 * Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
 */

if (window.innerWidth > 865) {
  listNav.classList.remove("active");
}

/**
 * Haciendo el menú responsive(adaptable)
 */
window.addEventListener("resize", function (evento) {
  if (window.innerWidth >= 865) {
    listNav.classList.remove("active");
    listNav.classList.add("nav");
  }

  if (window.innerWidth < 865) {
    if (showMenuResponsive === false) {
      listNav.classList.add("active");
      listNav.classList.remove("nav");
    } else {
      listNav.classList.remove("active");
      listNav.classList.add("nav");
    }
  }
});

/**
 * Muestra el menú al hacer click en vista mobile
 */
const hideMenu = (e) => {
  showMenuResponsive = !showMenuResponsive;

  if (showMenuResponsive === false) {
    listNav.classList.remove("nav");
    listNav.classList.add("active");

    responsive.innerHTML =
      ' <span class="iconify" data-icon="ep:close-bold"></span>';
  } else {
    listNav.classList.add("nav");
    listNav.classList.remove("active");
    responsive.innerHTML =
      ' <span class="iconify" data-icon="dashicons:menu"></span>';
  }
};

/**
 * Muestra el listado de categoría del navBar
 */

const hideList = () => {
  list.classList.toggle("hide");
};
/**
 * Eventos
 */

responsive.addEventListener("click", hideMenu);
dropdown.addEventListener("click", hideList);
