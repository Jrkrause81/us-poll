//Assign names and party color
var pFactory = function(pName, pColor) {

  var politician = {};
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.name = pName;
  politician.partyColor = pColor;

  //Tally votes
   politician.addUp = function () {
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++ ) {

      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  return politician;
};

var justin = pFactory("Justin Krause", [100, 150, 238]);
var phil = pFactory("Phil Collins", [128, 0, 128]);

//Election results by state
justin.electionResults = [8, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

phil.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

justin.electionResults[9] = 1;
phil.electionResults[9] = 28;

justin.electionResults[4] = 17;
phil.electionResults[4] = 38;

justin.electionResults[43] = 11;
phil.electionResults[43] = 27;

justin.addUp();
phil.addUp();

//Individual state results
 var setStateResults = function(state) {
   theStates[state].winner = null;

   if (justin.electionResults[state] > phil.electionResults[state]) {
      theStates[state].winner = justin;
    }
   else if (justin.electionResults[state] < phil.electionResults[state]) {
      theStates[state].winner = phil;
    }
   //Change state winner color
   var stateWinner = theStates[state].winner;

   if (stateWinner !== null) {
     theStates[state].rgbColor = stateWinner.partyColor;
   }
   else {
     theStates[state].rgbColor = [75, 75, 75];
   }
   //State results table
   var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var name1 = body.children[0].children[0];
var name2 = body.children[1].children[0];
var results1 = body.children[0].children[1];
var results2 = body.children[1].children[1];
var winnersName = body.children[2].children[1];

   //State results populated info
   stateName.innerText = theStates[state].nameFull;
   abbrev.innerText = theStates[state].nameAbbrev;
   name1.innerText = justin.name;
   name2.innerText = phil.name;
   results1.innerText = justin.electionResults[state];
   results2.innerText = phil.electionResults[state];
   if (theStates[state].winner === null){
    winnersName.innerText = "**DRAW**";
  }
   else {
    winnersName.innerText = theStates[state].winner.name;
  }
};

//Determine winner
var winner = {};
if (justin.totalVotes > phil.totalVotes) {
  winner = justin.name + " WINS!";
}
else if (justin.totalVotes < phil.totalVotes) {
  winner = phil.name + " WINS!";
}
else {
  winner = "It's a Draw...";
}

//Country results table
var countryResultsTable = document.getElementById('countryResults');
var row = countryResultsTable.children[0].children[0];

row.children[0].innerText = justin.name;
row.children[1].innerText = justin.totalVotes;
row.children[2].innerText = phil.name;
row.children[3].innerText = phil.totalVotes;
row.children[5].innerText = winner;
