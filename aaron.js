function home() {
  window.location = "Index2.html";
  return false;
}

function poll() {
  window.location = "poll.html";
  return true;
}

function fetchData() {
  fetch(
    "https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2020/2593?key=0c5e9c564feb4d4181474d34815266fa"
  )
    .then((response) => response.json())
    .then((data) => {
      let season = data[0].Season;
      let passingYards = data[0].PassingYards;
      let passingTouchdowns = data[0].PassingTouchdowns;
      let interceptions = data[0].PassingInterceptions;

      document.getElementById("season").innerHTML = season;
      document.getElementById("yds").innerHTML = passingYards;
      document.getElementById("tds").innerHTML = passingTouchdowns;
      document.getElementById("ints").innerHTML = interceptions;
      document.getElementById("tdowns").className = "visible";
    });
}

function fetchData2() {
  fetch(
    "https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2019/2593?key=0c5e9c564feb4d4181474d34815266fa"
  )
    .then((response) => response.json())
    .then((data) => {
      let season = data[0].Season;
      let passingYards = data[0].PassingYards;
      let passingTouchdowns = data[0].PassingTouchdowns;
      let interceptions = data[0].PassingInterceptions;

      document.getElementById("season").innerHTML = season;
      document.getElementById("yds").innerHTML = passingYards;
      document.getElementById("tds").innerHTML = passingTouchdowns;
      document.getElementById("ints").innerHTML = interceptions;
      document.getElementById("tdowns").className = "visible";
    });
}

let oThree = {
  Season: 2016,
  passingYards: 4428,
  passingTDs: 40,
  passingInts: 7,
};

let oThree_serialized = JSON.stringify(oThree);
localStorage.setItem("oThree", oThree_serialized);

function fetchData3() {
  let one = JSON.parse(localStorage.getItem("oThree"));
  let oneSeason = one.Season;
  let oneYards = one.passingYards;
  let oneTds = one.passingTDs;
  let oneInts = one.passingInts;

  document.getElementById("season").innerHTML = oneSeason;
  document.getElementById("yds").innerHTML = oneYards;
  document.getElementById("tds").innerHTML = oneTds;
  document.getElementById("ints").innerHTML = oneInts;
  document.getElementById("tdowns").className = "visible";
}

let oFour = {
  Season: 2011,
  passingYards: 4643,
  passingTDs: 45,
  passingInts: 6,
};

let oFour_serialized = JSON.stringify(oFour);
localStorage.setItem("oFour", oFour_serialized);
// let one = localStorage.getItem("oOne");
// let oneSeason = one.Season;
// let oneYards = one.passingYards;
// let oneTds = one.passingTDs;
// let oneInts = one.passingInts;

function fetchData4() {
  let one = JSON.parse(localStorage.getItem("oFour"));
  let oneSeason = one.Season;
  let oneYards = one.passingYards;
  let oneTds = one.passingTDs;
  let oneInts = one.passingInts;
  console.log(one);

  // $(document.getElementById( "season" ))
  document.getElementById("season").innerHTML = oneSeason;
  document.getElementById("yds").innerHTML = oneYards;
  document.getElementById("tds").innerHTML = oneTds;
  document.getElementById("ints").innerHTML = oneInts;
  document.getElementById("tdowns").className = "visible";
}

let oFive = {
  Season: "Career",
  passingYards: 51378,
  passingTDs: 412,
  passingInts: 91,
};

let oFive_serialized = JSON.stringify(oFive);
localStorage.setItem("oFive", oFive_serialized);
// let one = localStorage.getItem("oOne");
// let oneSeason = one.Season;
// let oneYards = one.passingYards;
// let oneTds = one.passingTDs;
// let oneInts = one.passingInts;

function fetchData5() {
  let one = JSON.parse(localStorage.getItem("oFive"));
  let oneSeason = one.Season;
  let oneYards = one.passingYards;
  let oneTds = one.passingTDs;
  let oneInts = one.passingInts;

  $("#season").html(oneSeason);
  $("#yds").html(oneYards);
  $("#tds").html(oneTds);
  $("#ints").html(oneInts);
  $("#tdowns").addClass("visible").removeClass("invisible");
  // document.getElementById("season").innerHTML = oneSeason;
  // document.getElementById("yds").innerHTML = oneYards;
  // document.getElementById("tds").innerHTML = oneTds;
  // document.getElementById("ints").innerHTML = oneInts;
  // document.getElementById("tdowns").className = "visible";
}
