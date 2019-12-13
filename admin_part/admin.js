let bbody = [
  ["Name A", 20],
  ["Name B", 39],
  ["Name C", 9],
  ["Name D", 59]
];
let ibody = ["some issue", "issue2", "issue3", "issue4", "issue5"];
let bfetch = [],
  ifetch = [];

function handleBookmarkTable() {
  try {
    bfetch = fetch("https://api.abc.com/bookmark");
  } catch (e) {}
}

function handleIssueTable() {}
