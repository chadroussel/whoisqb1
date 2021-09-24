function home() {
  window.location = "Index2.html";
  return false;
}

var brees = 0;
var manning = 0;
var brady = 0;
var rodgers = 0;

function refreshResults() {
  brees = Number(localStorage.getItem("brees"));
  manning = Number(localStorage.getItem("manning"));
  brady = Number(localStorage.getItem("brady"));
  rodgers = Number(localStorage.getItem("rodgers"));
  var results = document.getElementById("results");
  var allVotes = brees + manning + brady + rodgers;
  results.innerHTML = "Total Votes: " + allVotes;
  results.innerHTML += "<br />brees: " + brees;
  results.innerHTML += "<br />manning: " + manning;
  results.innerHTML += "<br />brady: " + brady;
  results.innerHTML += "<br />rodgers: " + rodgers;
}
refreshResults();
function drews() {
  brees++;
  localStorage.setItem("brees", brees.toString());
  refreshResults();
  alert("Voted For Brees!");
}

function peytons() {
  manning++;
  localStorage.setItem("manning", manning.toString());
  refreshResults();
  alert("Voted For Manning!");
}

function toms() {
  brady++;
  localStorage.setItem("brady", brady.toString());
  refreshResults();
  alert("Voted For Brady!");
}

function aarons() {
  rodgers++;
  localStorage.setItem("rodgers", rodgers.toString());
  refreshResults();
  alert("Voted For Rodgers!");
}
