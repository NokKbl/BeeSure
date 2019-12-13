changeDarkTheme = dark => {
  const navBar = document.querySelector("#navBar");
  const container = document.querySelector("#container");
  if (dark) {
    navBar.classList.remove("navbar-light");
    navBar.classList.add("navbar-dark");

    const bg = document.querySelectorAll(".bg-light");
    for (let i = 0; i < bg.length; i++) {
      bg[i].classList.remove("bg-light");
      bg[i].classList.add("bg-dark");
    }

    const outlineButton = document.querySelectorAll(".btn-outline-dark");
    for (let i = 0; i < outlineButton.length; i++) {
      outlineButton[i].classList.remove("btn-outline-dark");
      outlineButton[i].classList.add("btn-outline-light");
    }

    const card = document.querySelectorAll(".card-light");
    for (let i = 0; i < card.length; i++) {
      card[i].classList.remove("card-light");
      card[i].classList.add("card-dark");
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

    container.classList.remove("container-dark");
    container.classList.add("container-light");
  }
};
