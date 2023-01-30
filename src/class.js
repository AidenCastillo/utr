import fetch from "node-fetch";
class UTR {
  constructor() {
    this.url = "https://api.universaltennis.com";
    this.auth_url = "https://app.universaltennis.com/api";
  }
  async login(email, password) {
    // Login to UTR
    console.log("Logging in");
    const url = this.auth_url + "/v1/auth/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getPlayer(player_id) {
    // Get Player
    console.log("Getting Player");
    const url = this.auth_url + `/v1/player/${player_id}`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async searchPlayer(query, top = 10) {
    // Search for a player
    console.log("Searching for a player");
    query = query.replace(" ", "%20");
    const url = this.auth_url + `/v2/search/players?query=${query}`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async getResults(player_id, top = 10) {
    // Get Player Results
    console.log("Getting Player Results");
    const url = this.auth_url + `/v1/player/${player_id}/results`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default UTR;
