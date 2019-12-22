let bbody = [
  ["TMB house insurance package 1", 20],
  ["TMB house insurance package 2", 39],
  ["KBTG house insurance - Elite 1", 93],
  ["Frank house insurance", 52],
  ["Elite house insurance - Elite 1", 27],
  ["Bangkok house insurance - RakBaanForOwner", 53],
  ["Bangkok Bank house insurance - Elite 1", 64],
  ["KTB house insurance - Prakanphai Ban Manchai Elite 4", 75]
];
let ibody = [
  "Can't go to see details of the insurance!",
  "Bookmark doesn't work!",
  "Can't bookmark",
  "Unable to click some links",
  "Sign out function doesn't have any action",
  "Get stuck at sign out",
  "Can't use filter!",
  "Filter doesn't give answer",
  "Lost filter!",
  "Bring back my filter"
];
let bfetch = [],
  ifetch = [];

async function handleBookmarkTable() {
  try {
    let val = await fetch("https://api.abc.com/bookmark");
    bfetch = val.json();

    let x = "";
    if (bfetch.length === 0 || bfetch === undefined) {
      for (let i = 0; i < bbody.length; i++) {
        x = x + `<tr><td>${bbody[i][0]}</td><td>${bbody[i][1]}</td></tr>`;
      }
    } else {
      for (let i = 0; i < bfetch.length; i++) {
        x = x + `<tr><td>${bfetch[i][0]}</td><td>${bfetch[i][1]}</td></tr>`;
      }
    }
    document.getElementById("bbody").innerHTML = x;
  } catch (e) {
    let x = "";
    for (let i = 0; i < bbody.length; i++) {
      x = x + `<tr><td>${bbody[i][0]}</td><td>${bbody[i][1]}</td></tr>`;
    }
    document.getElementById("bbody").innerHTML = x;
  }
}

async function handleIssueTable() {
  try {
    let val = await fetch("https://api.abc.com/issue");
    ifetch = val.json();

    let x = "";
    if (ifetch.length === 0 || ifetch === undefined) {
      for (let i = 0; i < ibody.length; i++) {
        x = x + `<tr><td>${ibody[i]}</td></tr>`;
      }
    } else {
      for (let i = 0; i < ifetch.length; i++) {
        x = x + `<tr><td>${ifetch[i]}</td></tr>`;
      }
    }
    document.getElementById("ibody").innerHTML = x;
  } catch (e) {
    let x = "";
    for (let i = 0; i < ibody.length; i++) {
      x = x + `<tr><td>${ibody[i]}</td></tr>`;
    }
    document.getElementById("ibody").innerHTML = x;
  }
}
