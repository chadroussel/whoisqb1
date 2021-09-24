function home() {
  window.location = "Index2.html";
  return false;
}

// function votedDrew() {
//   alert("You Voted For Drew Brees!");
// }

// function votedPeyton() {
//   alert("You Voted For Peyton Manning!");
// }

// function votedAaron() {
//   alert("You Voted For Aaron Rodgers!");
// }

// function votedTom() {
//   alert("You Voted For Tom Brady!");
// }

function fetchData() {
  fetch(
    "https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2020REG/7242?Season=2020&PassingYards=2009.4&key=0c5e9c564feb4d4181474d34815266fa"
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
    "https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2019/7242?key=0c5e9c564feb4d4181474d34815266fa"
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
