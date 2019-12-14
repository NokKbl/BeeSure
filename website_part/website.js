let currentTheme = "light";

let mockUser = {
  id: "Hello 1234",
  bookmark: ["tmb1Insurance"]
};

const mockData = [
  {
    title: "TMB house insurance package 1",
    img: "logo_tmb.png",
    id: "tmb1Insurance",
    webUrl: "https://www.tmbbank.com/insurance/tmb-home-safe.html",
    insurancePremiumPerYear: "3,800",
    insurancePolicy: [
      "1,000,000",
      "500,000",
      "500,000",
      "100,000",
      "100,000",
      "ไม่เกิน 3,000 ต่อชิ้น <br />สูงสุด 30,000 ต่อปี",
      "สูงสุด 10,000 ต่อปี",
      "-",
      "100,000",
      "100,000"
    ]
  },
  {
    title: "TMB house insurance package 2",
    img: "logo_tmb.png",
    id: "tmb2Insurance",
    webUrl: "https://www.tmbbank.com/insurance/tmb-home-safe.html",
    insurancePremiumPerYear: "2,499",
    insurancePolicy: [
      "500,000",
      "ไม่คุ้มครอง",
      "500,000",
      "100,000",
      "100,000",
      "ไม่เกิน 3,000 ต่อชิ้น <br />สูงสุด 30,000 ต่อปี",
      "สูงสุด 10,000 ต่อปี",
      "100,000",
      "100,000",
      "100,000"
    ]
  },
  {
    title: "TMB house insurance package 2",
    img: "logo_tmb.png",
    id: "tmb2Insurance",
    webUrl: "https://www.tmbbank.com/insurance/tmb-home-safe.html",
    insurancePremiumPerYear: "2,499",
    insurancePolicy: [
      "500,000",
      "ไม่คุ้มครอง",
      "500,000",
      "100,000",
      "100,000",
      "ไม่เกิน 3,000 ต่อชิ้น <br />สูงสุด 30,000 ต่อปี",
      "สูงสุด 10,000 ต่อปี",
      "100,000",
      "100,000",
      "100,000"
    ]
  },
  {
    title: "TMB house insurance package 2",
    img: "logo_tmb.png",
    id: "tmb2Insurance",
    webUrl: "https://www.tmbbank.com/insurance/tmb-home-safe.html",
    insurancePremiumPerYear: "2,499",
    insurancePolicy: [
      "500,000",
      "ไม่คุ้มครอง",
      "500,000",
      "100,000",
      "100,000",
      "ไม่เกิน 3,000 ต่อชิ้น <br />สูงสุด 30,000 ต่อปี",
      "สูงสุด 10,000 ต่อปี",
      "100,000",
      "100,000",
      "100,000"
    ]
  },
  {
    title: "TMB house insurance package 2",
    img: "logo_tmb.png",
    id: "tmb2Insurance",
    webUrl: "https://www.tmbbank.com/insurance/tmb-home-safe.html",
    insurancePremiumPerYear: "2,499",
    insurancePolicy: [
      "500,000",
      "ไม่คุ้มครอง",
      "500,000",
      "100,000",
      "100,000",
      "ไม่เกิน 3,000 ต่อชิ้น <br />สูงสุด 30,000 ต่อปี",
      "สูงสุด 10,000 ต่อปี",
      "100,000",
      "100,000",
      "100,000"
    ]
  },
  {
    title: "TMB house insurance package 2",
    img: "logo_tmb.png",
    id: "tmb2Insurance",
    webUrl: "https://www.tmbbank.com/insurance/tmb-home-safe.html",
    insurancePremiumPerYear: "2,499",
    insurancePolicy: [
      "500,000",
      "ไม่คุ้มครอง",
      "500,000",
      "100,000",
      "100,000",
      "ไม่เกิน 3,000 ต่อชิ้น <br />สูงสุด 30,000 ต่อปี",
      "สูงสุด 10,000 ต่อปี",
      "100,000",
      "100,000",
      "100,000"
    ]
  }
];

$(document).ready(function() {
  const cardContainer = document.getElementById("cardContainer");
  const modalContainer = document.getElementById("modalContainer");
  cardContainer.innerHTML = "";
  modalContainer.innerHTML = "";
  for (var x in mockData) {
    var insurance = mockData[x];
    const bookmark = mockUser.bookmark.indexOf(insurance.id);
    let bookmarkClass = "";
    if (bookmark !== -1) {
      bookmarkClass = "booked";
    } else {
      bookmarkClass = "book";
    }

    cardContainer.innerHTML += `<div class="row">
    <div class="col">
      <div
        id="${insurance.id}"
        class="card m-3 bg-light card-light"
        onClick="openInsuranceModal(this.id)"
      >
        <div class="row no-gutters">
          <div class="col-3 px-3">
            <img src="../img/${insurance.img}" class="card-img" alt="..." />
          </div>
          <div class="col-9">
            <div class="card-body">
              <h4 class="card-title">${insurance.title} <i id="${insurance.id}BookStatusIcon" class="fa fa-bookmark ${bookmarkClass}Status bookmark-color-light"> </i></h4>
              <div class="card-text">
              <button type="button" class="btn btn-default" aria-label="Left Align">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

    modalContainer.innerHTML += `    <div
  class="modal fade"
  id="${insurance.id}Modal"
  tabindex="-1"
  role="dialog"
  aria-labhiddelledby="${insurance.id}ModalLabel"
  aria-en="true"
>
  <div class="modal-dialog modal-dialog-centered  modal-lg" role="document">
    <div class="modal-content bg-light\">
      <div class="modal-header ">
        <h4 class="modal-title" id="${insurance.id}ModalLabel">
        ${insurance.title}
        </h4>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span class="close-light" aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h2 class="text-center">Detail         <i id="${insurance.id}BookButton" onClick="bookmark('${insurance.id}')" class="fa fa-bookmark ${bookmarkClass}Button bookmark-color-light float-right"> </i></h2>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th style="width:75%">ความคุ้มครอง</th>
              <th class="text-center" style="width:25%">
                ทุนประกันภัย<br />(บาท)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1. อัคคีภัยและภัยเพิ่มเติม คุ้มครองไฟไหม้ ฟ้าผ่า ภัยระเบิด
                ภัยยวดยานพาหนะ ภัยอากาศยาน ภัยเนื่องจากน้ำ (ไม่รวมน้ำท่วม)
              </td>
              <td class="text-center">${insurance.insurancePolicy[0]}</td>
            </tr>
            <tr>
              <td>1.1 คุ้มครองความเสียหายต่อสิ่งปลูกสร้าง</td>
              <td class="text-center">${insurance.insurancePolicy[1]}</td>
            </tr>
            <tr>
              <td>1.2 คุ้มครองความเสียหายต่อทรัพย์สินในอาคาร</td>
              <td class="text-center">${insurance.insurancePolicy[2]}</td>
            </tr>
            <tr>
              <td>
                2. คุ้มครอง 4 ภัยธรรมชาติ (น้ำท่วม แผ่นดินไหว ลมพายุ
                ลูกเห็บ)
              </td>
              <td class="text-center">${insurance.insurancePolicy[3]}</td>
            </tr>
            <tr>
              <td>3. โจรกรรม</td>
              <td class="text-center">${insurance.insurancePolicy[4]}</td>
            </tr>
            <tr>
              <td>3.1 คุ้มครองทรัพย์สินที่พกติดตัวได้ทุกชนิด</td>
              <td class="text-center">
              ${insurance.insurancePolicy[5]}
              </td>
            </tr>
            <tr>
              <td>3.2 ความเสียหายต่อโบราณวัตถุ</td>
              <td class="text-center">${insurance.insurancePolicy[6]}</td>
            </tr>
            <tr>
              <td>4. ความเสียหายต่อเครื่องใช้ไฟฟ้า</td>
              <td class="text-center">${insurance.insurancePolicy[7]}</td>
            </tr>
            <tr>
              <td>5. ความรับผิดชอบต่อบุคคลภายนอก</td>
              <td class="text-center">${insurance.insurancePolicy[8]}</td>
            </tr>
            <tr>
              <td>6. การเสียชีวิตของผู้เอาประกันภัย</td>
              <td class="text-center">${insurance.insurancePolicy[9]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick="openInsuranceWeb('${insurance.webUrl}')"
        >
          เว็บผู้ให้บริการ
        </button>
      </div>
    </div>
  </div>
</div>`;
  }
  const theme = window.location.href.split("=")[1];
  if (theme === "dark") {
    changeDarkTheme(true);
  }
});

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

    const modal = document.querySelectorAll(".modal-content");
    for (let i = 0; i < modal.length; i++) {
      modal[i].classList.remove("bg-light");
      modal[i].classList.add("bg-dark");
      modal[i].classList.add("text-white");
    }

    const table = document.querySelectorAll(".table");
    for (let i = 0; i < table.length; i++) {
      table[i].classList.add("table-dark");
    }

    const closeButton = document.querySelectorAll(".close-light");
    for (let i = 0; i < closeButton.length; i++) {
      closeButton[i].classList.remove("close-light");
      closeButton[i].classList.add("close-dark");
    }

    const bookmark = document.querySelectorAll(".bookmark-color-light");
    for (let i = 0; i < bookmark.length; i++) {
      bookmark[i].classList.remove("bookmark-color-light");
      bookmark[i].classList.add("bookmark-color-dark");
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

    const closeButton = document.querySelectorAll(".close-dark");
    for (let i = 0; i < closeButton.length; i++) {
      closeButton[i].classList.remove("close-dark");
      closeButton[i].classList.add("close-light");
    }

    const bookmark = document.querySelectorAll(".bookmark-color-dark");
    for (let i = 0; i < bookmark.length; i++) {
      bookmark[i].classList.remove("bookmark-color-dark");
      bookmark[i].classList.add("bookmark-color-light");
    }

    const table = document.querySelectorAll(".table");
    for (let i = 0; i < table.length; i++) {
      table[i].classList.remove("table-dark");
    }

    container.classList.remove("container-dark");
    container.classList.add("container-light");
  }
};

openInsuranceModal = insuranceName => {
  $(`#${insuranceName}Modal`).modal("show");
};

openInsuranceWeb = url => {
  var win = window.open(url, "_blank");
  win.focus();
};

bookmark = insuranceId => {
  const bookmark = mockUser.bookmark.indexOf(insuranceId);
  let remove,
    add = "";
  if (bookmark !== -1) {
    remove = "booked";
    add = "book";
    mockUser.bookmark.splice(mockUser.bookmark.indexOf(insuranceId), 1);
  } else {
    bookStatus = "book";
    remove = "book";
    add = "booked";
    mockUser.bookmark.push(insuranceId);
  }

  const bookmarkButton = document.querySelector(`#${insuranceId}BookButton`);
  bookmarkButton.classList.remove(`${remove}Button`);
  bookmarkButton.classList.add(`${add}Button`);
  const bookmarkStatusIcon = document.querySelector(
    `#${insuranceId}BookStatusIcon`
  );
  bookmarkStatusIcon.classList.remove(`${remove}Status`);
  bookmarkStatusIcon.classList.add(`${add}Status`);
};
