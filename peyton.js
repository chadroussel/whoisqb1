function home() {
  window.location = "Index2.html";
  return false;
}

function poll() {
  window.location = "poll.html";
  return true;
}

let oOne = {
  Season: 2012,
  passingYards: 4659,
  passingTDs: 37,
  passingInts: 11,
};

let oOne_serialized = JSON.stringify(oOne);
localStorage.setItem("oOne", oOne_serialized);

function fetchData() {
  let one = JSON.parse(localStorage.getItem("oOne"));
  let oneSeason = one.Season;
  let oneYards = one.passingYards;
  let oneTds = one.passingTDs;
  let oneInts = one.passingInts;

  // $(document.getElementById( "season" ))
  document.getElementById("season").innerHTML = oneSeason;
  document.getElementById("yds").innerHTML = oneYards;
  document.getElementById("tds").innerHTML = oneTds;
  document.getElementById("ints").innerHTML = oneInts;
  document.getElementById("tdowns").className = "visible";
}

let oTwo = {
  Season: 2013,
  passingYards: 5477,
  passingTDs: 55,
  passingInts: 10,
};

let oTwo_serialized = JSON.stringify(oTwo);
localStorage.setItem("oTwo", oTwo_serialized);

function fetchData2() {
  let one = JSON.parse(localStorage.getItem("oTwo"));
  let oneSeason = one.Season;
  let oneYards = one.passingYards;
  let oneTds = one.passingTDs;
  let oneInts = one.passingInts;

  // $(document.getElementById( "season" ))
  document.getElementById("season").innerHTML = oneSeason;
  document.getElementById("yds").innerHTML = oneYards;
  document.getElementById("tds").innerHTML = oneTds;
  document.getElementById("ints").innerHTML = oneInts;
  document.getElementById("tdowns").className = "visible";
}

let oThree = {
  Season: 2014,
  passingYards: 4727,
  passingTDs: 39,
  passingInts: 15,
};

let oThree_serialized = JSON.stringify(oThree);
localStorage.setItem("oThree", oThree_serialized);

function fetchData3() {
  let one = JSON.parse(localStorage.getItem("oThree"));
  let oneSeason = one.Season;
  let oneYards = one.passingYards;
  let oneTds = one.passingTDs;
  let oneInts = one.passingInts;

  // $(document.getElementById( "season" ))
  document.getElementById("season").innerHTML = oneSeason;
  document.getElementById("yds").innerHTML = oneYards;
  document.getElementById("tds").innerHTML = oneTds;
  document.getElementById("ints").innerHTML = oneInts;
  document.getElementById("tdowns").className = "visible";
}

let oFour = {
  Season: 2015,
  passingYards: 2249,
  passingTDs: 9,
  passingInts: 17,
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
  passingYards: 71940,
  passingTDs: 539,
  passingInts: 251,
};

let oFive_serialized = JSON.stringify(oFive);
localStorage.setItem("oFive", oFive_serialized);

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
  //   document.getElementById("season").innerHTML = oneSeason;
  //   document.getElementById("yds").innerHTML = oneYards;
  //   document.getElementById("tds").innerHTML = oneTds;
  //   document.getElementById("ints").innerHTML = oneInts;
  //   document.getElementById("tdowns").className = "visible";
}
