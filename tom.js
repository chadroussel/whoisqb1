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
    "https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2020/4314?key=0c5e9c564feb4d4181474d34815266fa"
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
    "https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2019/4314?key=0c5e9c564feb4d4181474d34815266fa"
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
  Season: 2018,
  passingYards: 4355,
  passingTDs: 29,
  passingInts: 11,
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

let oOne = {
  Season: 2007,
  passingYards: 4806,
  passingTDs: 50,
  passingInts: 8,
};

let oOne_serialized = JSON.stringify(oOne);
localStorage.setItem("oOne", oOne_serialized);
// let one = localStorage.getItem("oOne");
// let oneSeason = one.Season;
// let oneYards = one.passingYards;
// let oneTds = one.passingTDs;
// let oneInts = one.passingInts;

function fetchData4() {
  let one = JSON.parse(localStorage.getItem("oOne"));
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
  passingYards: 79583,
  passingTDs: 585,
  passingInts: 193,
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
