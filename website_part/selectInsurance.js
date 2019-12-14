let currentTheme = "light";

changeDarkTheme = dark => {
  const navBar = document.querySelector("#navBar");
  const container = document.querySelector("#container");
  if (dark) {
    currentTheme = "dark";
    navBar.classList.remove("navbar-light");
    navBar.classList.add("navbar-dark");

    const bg = document.querySelectorAll(".bg-light");
    for (let i = 0; i < bg.length; i++) {
      bg[i].classList.remove("bg-light");
      bg[i].classList.add("bg-dark");
    }

    const card = document.querySelectorAll(".card-light");
    for (let i = 0; i < card.length; i++) {
      card[i].classList.remove("card-light");
      card[i].classList.add("card-dark");
    }

    const outlineButton = document.querySelectorAll(".btn-outline-dark");
    for (let i = 0; i < outlineButton.length; i++) {
      outlineButton[i].classList.remove("btn-outline-dark");
      outlineButton[i].classList.add("btn-outline-light");
    }

    const modal = document.querySelectorAll(".modal-content");
    for (let i = 0; i < modal.length; i++) {
      modal[i].classList.remove("bg-light");
      modal[i].classList.add("bg-dark");
      modal[i].classList.add("text-white");
    }

    const selectButton = document.querySelectorAll(".select-button-light");
    for (let i = 0; i < selectButton.length; i++) {
      selectButton[i].classList.remove("select-button-light");
      selectButton[i].classList.add("select-button-dark");
    }

    const closeButton = document.querySelectorAll(".close-light");
    for (let i = 0; i < closeButton.length; i++) {
      closeButton[i].classList.remove("close-light");
      closeButton[i].classList.add("close-dark");
    }

    container.classList.remove("container-light");
    container.classList.add("container-dark");
  } else {
    navBar.classList.remove("navbar-dark");
    navBar.classList.add("navbar-light");

    const outlineButton = document.querySelectorAll(".btn-outline-light");
    for (let i = 0; i < outlineButton.length; i++) {
      outlineButton[i].classList.remove("btn-outline-light");
      outlineButton[i].classList.add("btn-outline-dark");
    }

    const bg = document.querySelectorAll(".bg-dark");
    for (let i = 0; i < bg.length; i++) {
      bg[i].classList.remove("bg-dark");
      bg[i].classList.add("bg-light");
    }

    const card = document.querySelectorAll(".card-dark");
    for (let i = 0; i < card.length; i++) {
      card[i].classList.remove("card-dark");
      card[i].classList.add("card-light");
    }

    const modal = document.querySelectorAll(".modal-content");
    for (let i = 0; i < modal.length; i++) {
      modal[i].classList.remove("bg-dark");
      modal[i].classList.remove("text-white");
      modal[i].classList.add("bg-light");
    }

    const selectButton = document.querySelectorAll(".select-button-dark");
    for (let i = 0; i < selectButton.length; i++) {
      selectButton[i].classList.remove("select-button-dark");
      selectButton[i].classList.add("select-button-light");
    }

    const closeButton = document.querySelectorAll(".close-dark");
    for (let i = 0; i < closeButton.length; i++) {
      closeButton[i].classList.remove("close-dark");
      closeButton[i].classList.add("close-light");
    }

    container.classList.remove("container-dark");
    container.classList.add("container-light");
  }
};

openHouseInsurance = () => {
  window.location.href = `website.html?theme=${currentTheme}`;
};

openCarInsurance = () => {
  alert("coming soon!!!");
};
