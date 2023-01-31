import UTR from "./class.js";

const utr = new UTR();

/**
 * It takes the raw json data and converts it into a more readable format
 * @param data - the raw json data from the API
 * @returns An array of objects. Each object represents a tournament. Each tournament has a name, id,
 * and results. Results is an object that contains the round and the score.
 */
function convertToScore(data) {
  const scores = [];
  for (let event in data["events"]) {
    scores[event] = {
      name: data["events"][event]["name"],
      id: data["events"][event]["id"],
    };
    for (let draw in data["events"][event]["draws"]) {
      scores[event]["results"] = {};

      for (let match in data["events"][event]["draws"][draw]["results"]) {
        const matchData =
          data["events"][event]["draws"][draw]["results"][match];
        const players = matchData["players"];
        var round = null;

        try {
          round = matchData["round"]["name"];
        } catch {
          round = "no round";
        }
        const score = matchData["score"];

        scores[event]["results"][round] = {
          score: score,
          date: matchData["date"],
        };

        try {
          scores[event]["results"][round]["players"] = {
            winner1: {
              firstName: players["winner1"]["firstName"],
              lastName: players["winner1"]["lastName"],
              doublesUtr: players["winner1"]["doublesUtr"],
            },
            winner2: {
              firstName: players["winner2"]["firstName"],
              lastName: players["winner2"]["lastName"],
              doublesUtr: players["winner2"]["doublesUtr"],
            },
            loser1: {
              firstName: players["loser1"]["firstName"],
              lastName: players["loser1"]["lastName"],
              doublesUtr: players["loser1"]["doublesUtr"],
            },
            loser2: {
              firstName: players["loser2"]["firstName"],
              lastName: players["loser2"]["lastName"],
              doublesUtr: players["loser2"]["doublesUtr"],
            },
          };
        } catch {
          scores[event]["results"][round]["players"] = {
            winner1: {
              firstName: players["winner1"]["firstName"],
              lastName: players["winner1"]["lastName"],
              singlesUtr: players["winner1"]["singlesUtr"],
            },
            loser1: {
              firstName: players["loser1"]["firstName"],
              lastName: players["loser1"]["lastName"],
              singlesUtr: players["loser1"]["singlesUtr"],
            },
          };
        }
      }
    }
  }
  return scores;
}

export { convertToScore };
