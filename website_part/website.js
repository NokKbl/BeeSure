let currentTheme = "light";

let mockUser = {
  id: "Hello 1234",
  bookmark: ["tmb1Insurance"]
};

const mockData = [
  {
    title: "KBTG house insurance - Elite 1",
    img: "logo_KBTG.png",
    id: "tmb1Insurance",
    webUrl: "https://kasikornbank.com/fire-insurance",
    insurancePremiumPerYear: "call hotline",
    insurancePolicy: {
      allRisk: {
        details:
          "All risk such as fire, lightning, water damage etc. excluding flood",
        limits: "Covered by actual damage, Not exceeding Sum Insured",
        money: 999
      },
      flood: {
        details: "Flood",
        limits: "Not exceeding 10% of Sum Insured, Limit in aggregate 200,000",
        money: 200000
      },
      electrical: {
        details: "Electrical injury",
        limits: "Not exceeding 10% of Sum Insured, Limit in aggregate 200,000",
        money: 200000
      },
      accommodation: {
        details: "Temporary accommodation expenses",
        limits: "1000 per day, Limit in aggregate 50,000",
        money: 50000
      },
      fire: {
        details: "Fire extinguishing expenses",
        limits: "Not exceeding 10% of Sum Insured, Limit in aggregate 100,000",
        money: 100000
      },
      anitques: {
        details: "Antiques and painting",
        limits: "Limit in aggregate 50,000",
        money: 50000
      },
      personBelonging: {
        detail: "Damage of person belongings",
        limits: "Limit in aggregate 20,000",
        money: 20000
      },
      disater: {
        details:
          "Windstorm / Eartquke / Volcano eruption / Undercurrent / Tsunami / Hail",
        limits: "Not exceeding 10% of Sum Insured, Limit in aggregate",
        money: 2000000
      },
      plateGlass: {
        details: "Plate glass insurance",
        limits: "Not exceeding 10% of Sum Insured, Limit in aggregate 50,000",
        money: 50000
      },
      burglaryJewelry: {
        details:
          "Loss of jewelry and watch due to burglary, robbery, and gang robbery with in premise and outside premise while traveling withing Thailand",
        limits: "Not exceeding 10% of Sum Insured, Limit in aggregate 100,000",
        money: 100000
      },
      burglaryDoor: {
        details:
          "Damage of premise by burglary or robbery such as door, window",
        limits: "Limit in aggregate 20,000",
        money: 20000
      },
      liability: {
        details:
          "Public liability insurance, personal liability, personal medical",
        limits: "-",
        money: 0
      }
    }
  },
  {
    title: "Frank house insurance",
    img: "logo_tmb.png",
    id: "tmb1Insurance",
    webUrl:
      "https://www.frank.co.th/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C%E0%B8%AA%E0%B8%B4%E0%B8%99",
    insurancePremiumPerYear: "21,796",
    insurancePolicy: {
      allRisk: {
        details:
          "All risk such as fire, lightning, water damage etc. excluding flood",
        limits: "Limit in aggregate 3,000,000",
        money: 3000000
      },
      flood: {
        details: "Flood",
        limits: "Limit in aggregate 3,000,000",
        money: 3000000
      },
      electrical: {
        details: "Electrical injury",
        limits: "Limit in aggregate 300,000",
        money: 300000
      },
      accommodation: {
        details: "Temporary accommodation expenses",
        limits: "2000 per day, Not exceeding 30 days",
        money: 60000
      },
      fire: {
        details: "Fire extinguishing expenses",
        limits: "Limit in aggregate 300,000",
        money: 300000
      },
      anitques: {
        details: "Antiques and painting",
        limits: "-",
        money: 0
      },
      personBelonging: {
        detail: "Damage of person belongings",
        limits: "Limit in aggregate 30,000",
        money: 30000
      },
      disater: {
        details:
          "Windstorm / Eartquke / Volcano eruption / Undercurrent / Tsunami / Hail",
        limits: "Limit in aggregate 3,000,000",
        money: 3000000
      },
      plateGlass: {
        details: "Plate glass insurance",
        limits: "Limit in aggregate 300,000",
        money: 300000
      },
      burglaryJewelry: {
        details:
          "Loss of jewelry and watch due to burglary, robbery, and gang robbery with in premise and outside premise while traveling withing Thailand",
        limits:
          "Limit 10,000 per item / Not exceeding 200,000 per year (Deductible 5,000 Baht per each one every occurrence)",
        money: 10000
      },
      burglaryDoor: {
        details:
          "Damage of premise by burglary or robbery such as door, window",
        limits: "Limit in aggregate 300,000",
        money: 300000
      },
      liability: {
        details:
          "Public liability insurance, personal liability, personal medical",
        limits: "Limit in aggregate 2,000,000",
        money: 2000000
      }
    }
  },
  {
    title: "Elite house insurance - Elite 1",
    img: "logo_tmb.png",
    id: "tmb1Insurance",
    webUrl:
      "https://www.aig.co.th/en/personal/home-and-personal-property/elite-home",
    insurancePremiumPerYear: "call hotline",
    insurancePolicy: {
      allRisk: {
        details:
          "All risk such as fire, lightning, water damage etc. excluding flood",
        limits: "Limit in aggregate 10,000,000",
        money: 10000000
      },
      flood: {
        details: "Flood",
        limits:
          "Minimum 100,000 - 2,000,000 Baht Not exceeding 10% of Sum Insured",
        money: 2000000
      },
      electrical: {
        details: "Electrical injury",
        limits: "200,000 per time",
        money: 200000
      },
      accommodation: {
        details: "Temporary accommodation expenses",
        limits:
          "2,000 per day, Limit in aggregate 100,000, Not exceeding 90 days",
        money: 100000
      },
      fire: {
        details: "Fire extinguishing expenses",
        limits: "10% of Sum Insured",
        money: 999
      },
      anitques: {
        details: "Antiques and painting",
        limits: "20,000 per item, Limit in aggregate 200,000",
        money: 200000
      },
      personBelonging: {
        detail: "Damage of person belongings",
        limits: "10,000 per person, Limit in aggregate 50,000",
        money: 50000
      },
      disater: {
        details:
          "Windstorm / Eartquke / Volcano eruption / Undercurrent / Tsunami / Hail",
        limits: "Limit in aggregate 10,000,000",
        money: 10000000
      },
      plateGlass: {
        details: "Plate glass insurance",
        limits: "100,000",
        money: 100000
      },
      burglaryJewelry: {
        details:
          "Loss of jewelry and watch due to burglary, robbery, and gang robbery with in premise and outside premise while traveling withing Thailand",
        limits: "20,000 per item, Limit in aggregate 200,000",
        money: 200000
      },
      burglaryDoor: {
        details:
          "Damage of premise by burglary or robbery such as door, window",
        limits: "40,000 per occurrence",
        money: 40000
      },
      liability: {
        details:
          "Public liability insurance, personal liability, personal medical",
        limits: "1,000,000 per year",
        money: 1000000
      }
    }
  },
  {
    title: "Bangkok house insurance - RakBaanForOwner",
    img: "logo_tmb.png",
    id: "tmb1Insurance",
    webUrl:
      "https://www.bangkokinsurance.com/product/residential/rakbaanforowner",
    insurancePremiumPerYear: "call hotline",
    insurancePolicy: {
      allRisk: {
        details:
          "All risk such as fire, lightning, water damage etc. excluding flood",
        limits: "Covered by actual damage, Not exceeding Sum Insured",
        money: 999
      },
      flood: {
        details: "Flood",
        limits: "Not exceeding 10% of Sum Insured, Limit 500,000 in aggregate",
        money: 500000
      },
      electrical: {
        details: "Electrical injury",
        limits: "50,000",
        money: 50000
      },
      accommodation: {
        details: "Temporary accommodation expenses",
        limits: "20,000 per month, Limit in aggregate 200,000",
        money: 200000
      },
      fire: {
        details: "Fire extinguishing expenses",
        limits: "Limit in aggregate",
        money: 999
      },
      anitques: {
        details: "Antiques and painting",
        limits: "30,000",
        money: 30000
      },
      personBelonging: {
        detail: "Damage of person belongings",
        limits: "-",
        money: 0
      },
      disater: {
        details:
          "Windstorm / Eartquke / Volcano eruption / Undercurrent / Tsunami / Hail",
        limits: "Not exceeding 10% of Sum Insured, Limit in aggregate 500,000 ",
        money: 500000
      },
      plateGlass: {
        details: "Plate glass insurance",
        limits: "-",
        money: 0
      },
      burglaryJewelry: {
        details:
          "Loss of jewelry and watch due to burglary, robbery, and gang robbery with in premise and outside premise while traveling withing Thailand",
        limits: "100,000",
        money: 100000
      },
      burglaryDoor: {
        details:
          "Damage of premise by burglary or robbery such as door, window",
        limits: "100,000",
        money: 100000
      },
      liability: {
        details:
          "Public liability insurance, personal liability, personal medical",
        limits: "1,000,000 per year",
        money: 1000000
      }
    }
  },
  {
    title: "Bangkok Bank house insurance - Elite 1",
    img: "logo_tmb.png",
    id: "tmb1Insurance",
    webUrl:
      "https://www.bangkokbank.com/th-TH/Personal/My-Family-and-Me/Bancassurance/Non-Life-Insurance/Home-Property-Insurance-1st",
    insurancePremiumPerYear: "3,200",
    insurancePolicy: {
      allRisk: {
        details:
          "All risk such as fire, lightning, water damage etc. excluding flood",
        limits: "1,000,000",
        money: 1000000
      },
      flood: {
        details: "Flood",
        limits: "100,000 per year",
        money: 100000
      },
      electrical: {
        details: "Electrical injury",
        limits: "30,000 per year",
        money: 30000
      },
      accommodation: {
        details: "Temporary accommodation expenses",
        limits: "1,000 per day, Not exceeding 30 days",
        money: 30000
      },
      fire: {
        details: "Fire extinguishing expenses",
        limits: "-",
        money: 0
      },
      anitques: {
        details: "Antiques and painting",
        limits: "-",
        money: 0
      },
      personBelonging: {
        detail: "Damage of person belongings",
        limits: "-",
        money: 0
      },
      disater: {
        details:
          "Windstorm / Eartquke / Volcano eruption / Undercurrent / Tsunami / Hail",
        limits: "100,000 per year",
        money: 100000
      },
      plateGlass: {
        details: "Plate glass insurance",
        limits: "-",
        money: 0
      },
      burglaryJewelry: {
        details:
          "Loss of jewelry and watch due to burglary, robbery, and gang robbery with in premise and outside premise while traveling withing Thailand",
        limits: "300,000 per year",
        money: 300000
      },
      burglaryDoor: {
        details:
          "Damage of premise by burglary or robbery such as door, window",
        limits: "300,000 per year",
        money: 300000
      },
      liability: {
        details:
          "Public liability insurance, personal liability, personal medical",
        limits: "1,000,000 per year",
        money: 1000000
      }
    }
  },
  {
    title: "KTB house insurance - Prakanphai Ban Manchai Elite 4",
    img: "logo_KBTG.png",
    id: "tmb1Insurance",
    webUrl: "https://www.ktb.co.th/th/personal/insurance/non-life-insurance/3",
    insurancePremiumPerYear: "3,500",
    insurancePolicy: {
      allRisk: {
        details:
          "All risk such as fire, lightning, water damage etc. excluding flood",
        limits: "1,000,000",
        money: 1000000
      },
      flood: {
        details: "Flood",
        limits: "100,00 per time",
        money: 100000
      },
      electrical: {
        details: "Electrical injury",
        limits: "50,000 per time ",
        money: 50000
      },
      accommodation: {
        details: "Temporary accommodation expenses",
        limits: "45,000",
        money: 45000
      },
      fire: {
        details: "Fire extinguishing expenses",
        limits: "-",
        money: 0
      },
      anitques: {
        details: "Antiques and painting",
        limits: "15,000",
        money: 15000
      },
      personBelonging: {
        detail: "Damage of person belongings",
        limits: "-",
        money: 0
      },
      disater: {
        details:
          "Windstorm / Eartquke / Volcano eruption / Undercurrent / Tsunami / Hail",
        limits: "100,000 per time",
        money: 100000
      },
      plateGlass: {
        details: "Plate glass insurance",
        limits: "-",
        money: 0
      },
      burglaryJewelry: {
        details:
          "Loss of jewelry and watch due to burglary, robbery, and gang robbery with in premise and outside premise while traveling withing Thailand",
        limits: "200,000 per year",
        money: 200000
      },
      burglaryDoor: {
        details:
          "Damage of premise by burglary or robbery such as door, window",
        limits: "200,000 per year",
        money: 200000
      },
      liability: {
        details:
          "Public liability insurance, personal liability, personal medical",
        limits: "200,000 per time",
        money: 200000
      }
    }
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
        <div class="row no-gutters my-5">
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
              <th style="width:75%">Protection</th>
              <th class="text-center" style="width:25%">
                Sum insured<br />(Baht)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. ${insurance.insurancePolicy.allRisk.details}</td>
              <td class="text-center">${insurance.insurancePolicy.allRisk.limits}</td>
            </tr>
            <tr>
              <td>2. ${insurance.insurancePolicy.flood.details}</td>
              <td class="text-center">${insurance.insurancePolicy.flood.limits}</td>
            </tr>
            <tr>
              <td>3. ${insurance.insurancePolicy.electrical.details}</td>
              <td class="text-center">${insurance.insurancePolicy.electrical.limits}</td>
            </tr>
            <tr>
              <td>4. ${insurance.insurancePolicy.accommodation.details}</td>
              <td class="text-center">${insurance.insurancePolicy.accommodation.details}</td>
            </tr>
            <tr>
              <td>5. ${insurance.insurancePolicy.fire.details}</td>
              <td class="text-center">${insurance.insurancePolicy.fire.limits}</td>
            </tr>
            <tr>
              <td>6. ${insurance.insurancePolicy.anitques.details}</td>
              <td class="text-center">${insurance.insurancePolicy.anitques.limits}</td>
            </tr>
            <tr>
              <td>7. ${insurance.insurancePolicy.personBelonging.details}</td>
              <td class="text-center">${insurance.insurancePolicy.personBelonging.limits}</td>
            </tr>
            <tr>
              <td>8. ${insurance.insurancePolicy.disater.details}</td>
              <td class="text-center">${insurance.insurancePolicy.disater.limits}</td>
            </tr>
            <tr>
              <td>9. ${insurance.insurancePolicy.plateGlass.details}</td>
              <td class="text-center">${insurance.insurancePolicy.plateGlass.limits}</td>
            </tr>
            <tr>
              <td>10. ${insurance.insurancePolicy.burglaryJewelry.details}</td>
              <td class="text-center">${insurance.insurancePolicy.burglaryJewelry.limits}</td>
            </tr>
            <tr>
              <td>11. ${insurance.insurancePolicy.burglaryDoor.details}</td>
              <td class="text-center">${insurance.insurancePolicy.burglaryDoor.limits}</td>
            </tr>
            <tr>
              <td>12. ${insurance.insurancePolicy.liability.details}</td>
              <td class="text-center">${insurance.insurancePolicy.liability.limits}</td>
            </tr>
            <tr>
            <td>11. Damage of premises by Burglary or Robbery such as door, window</td>
            <td class="text-center">${insurance.insurancePolicy[8]}</td>
          </tr>
          <tr>
          <td>12. Public Liability Insurance, Personal Liability, Personal Medical</td>
          <td class="text-center">${insurance.insurancePolicy[8]}</td>
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

logout = () => {
  window.location.href = "../user_part/login.html";
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

$("#submitFilter").on("click", e => {
  e.preventDefault();
  const cardContainer2 = document.getElementById("cardContainer");
  const modalContainer2 = document.getElementById("modalContainer");
  cardContainer.innerHTML = "";
  const minValue = $("#min-value").val();
  const maxValue = $("#max-value").val();
  const minValue2 = $("#min-value-2").val();
  const maxValue2 = $("#max-value-2").val();
  // const minValue3 = $("#min-value-3").val();
  // const maxValue3 = $("#max-value-3").val();

  for (var i in mockData) {
    var insurance = mockData[i];

    var bookmark2 = mockUser.bookmark.indexOf(insurance.id);
    let bookmarkClass = "";
    if (bookmark2 !== -1) {
      bookmarkClass = "booked";
    } else {
      bookmarkClass = "book";
    }

    let floodMoney = insurance.insurancePolicy.flood.money;
    // let allRiskMoney = insurance.insurancePolicy.allRisk.money;
    let antiquesMoney = insurance.insurancePolicy.anitques.money;

    if (
      floodMoney >= minValue &&
      floodMoney <= maxValue &&
      // allRiskMoney >= minValue3 &&
      // allRiskMoney <= maxValue3 &&
      antiquesMoney >= minValue2 &&
      antiquesMoney <= maxValue2
    ) {
      cardContainer2.innerHTML += `<div class="row">
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

      modalContainer2.innerHTML += `    <div
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
              <th style="width:75%">Protection</th>
              <th class="text-center" style="width:25%">
                Sum insured<br />(บาท)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. ${insurance.insurancePolicy.allRisk.details}</td>
              <td class="text-center">${insurance.insurancePolicy.allRisk.limits}</td>
            </tr>
            <tr>
              <td>2. ${insurance.insurancePolicy.flood.details}</td>
              <td class="text-center">${insurance.insurancePolicy.flood.limits}</td>
            </tr>
            <tr>
              <td>3. ${insurance.insurancePolicy.electrical.details}</td>
              <td class="text-center">${insurance.insurancePolicy.electrical.limits}</td>
            </tr>
            <tr>
              <td>4. ${insurance.insurancePolicy.accommodation.details}</td>
              <td class="text-center">${insurance.insurancePolicy.accommodation.details}</td>
            </tr>
            <tr>
              <td>5. ${insurance.insurancePolicy.fire.details}</td>
              <td class="text-center">${insurance.insurancePolicy.fire.limits}</td>
            </tr>
            <tr>
              <td>6. ${insurance.insurancePolicy.anitques.details}</td>
              <td class="text-center">${insurance.insurancePolicy.anitques.limits}</td>
            </tr>
            <tr>
              <td>7. ${insurance.insurancePolicy.personBelonging.details}</td>
              <td class="text-center">${insurance.insurancePolicy.personBelonging.limits}</td>
            </tr>
            <tr>
              <td>8. ${insurance.insurancePolicy.disater.details}</td>
              <td class="text-center">${insurance.insurancePolicy.disater.limits}</td>
            </tr>
            <tr>
              <td>9. ${insurance.insurancePolicy.plateGlass.details}</td>
              <td class="text-center">${insurance.insurancePolicy.plateGlass.limits}</td>
            </tr>
            <tr>
              <td>10. ${insurance.insurancePolicy.burglaryJewelry.details}</td>
              <td class="text-center">${insurance.insurancePolicy.burglaryJewelry.limits}</td>
            </tr>
            <tr>
              <td>11. ${insurance.insurancePolicy.burglaryDoor.details}</td>
              <td class="text-center">${insurance.insurancePolicy.burglaryDoor.limits}</td>
            </tr>
            <tr>
              <td>12. ${insurance.insurancePolicy.liability.details}</td>
              <td class="text-center">${insurance.insurancePolicy.liability.limits}</td>
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
  }
});
