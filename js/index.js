// function to show and hide menu when hamburger icon is clicked

function showMenu() {
  const hamburgerButton = document.querySelector("#hamburger");
  hamburgerButton.addEventListener("click", () => {
    const subMenuButtons = document.querySelectorAll("header ul li");
    hamburgerButton.classList.toggle("activeHamburger");
    const activatedHamburger = document.querySelector(".activeHamburger");
    if (activatedHamburger === null) {
      subMenuButtons.forEach((subMenu) => {
        subMenu.style.display = "none";
        subMenu.style.zIndex = "1";
      });
      hamburgerButton.style.color = "#f5f5f5";
    } else {
      subMenuButtons.forEach((subMenu) => {
        subMenu.style.display = "block";
        subMenu.style.zIndex = "1";
        subMenu.style.paddingTop = "15px";
      });
      hamburgerButton.style.color = "#ff9b51";
    }
  });
}

// call showMenu function when DOM has loaded

window.addEventListener("DOMContentLoaded", () => {
  showMenu();
});
