import UTR from "./class.js";

const utr = new UTR();

function convertToScore(data) {
  // Convert raw json to score
  const scores = [];
  for (let event in data["events"]) {
		scores[event] = {};
		scores[event]["name"] = data["events"][event]["name"];
    for (let result in data["events"][event]["draws"]) {
      // console.log(results["events"][event]["draws"][result]["results"]);
			// scores[event][result] = {};
			scores[event]["results"] = {};
			

      for (let match in data["events"][event]["draws"][result]["results"]) {
        const players = data["events"][event]["draws"][result]["results"][match]["players"]
        var round = null;
        // console.log(players);
        try {
          round = data["events"][event]["draws"][result]["results"][match]["round"]["name"];
          scores[event]['results'][round] = {};
        } catch {
          round = "no round";
          scores[event]['results'][round] = {}; 
        }
        const score = data["events"][event]["draws"][result]["results"][match]["score"];
        scores[event]["results"][round]["score"] = score;
        try {
          scores[event]["results"][round]["players"] = {
            "winner1": {
              "firstName": players["winner1"]["firstName"],
              "lastName": players["winner1"]["lastName"],
            },
            "winner2": {
              "firstName": players["winner2"]["firstName"],
              "lastName": players["winner2"]["lastName"],
            },
            "loser1": {
              "firstName": players["loser1"]["firstName"],
              "lastName": players["loser1"]["lastName"],
            },
            "loser2": {
              "firstName": players["loser2"]["firstName"],
              "lastName": players["loser2"]["lastName"],
            }
          };

        } catch {
          scores[event]["results"][round]["players"] = {
            "winner1": {
              "firstName": players["winner1"]["firstName"],
              "lastName": players["winner1"]["lastName"],
            },
            "loser1": {
              "firstName": players["loser1"]["firstName"],
              "lastName": players["loser1"]["lastName"],
            }
          };
        }
        
      }
    }
  }
  return scores;
}

export { convertToScore };
