class UTR {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.url = "https://api.universaltennis.com";
    this.auth_url = "https://app.universaltennis.com/api";
  }
  login() {
    // Login to UTR
    console.log("Logging in");
    const url = this.auth_url + "/v1/auth/login";
    fetch(url, {
      method: "POST",

      body: JSON.stringify({
        email: this.email,
        password: this.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  getPlayer(player_id) {
    // Get Player
    console.log("Getting Player");
    const url = this.auth_url + `/v1/player/${player_id}`;
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

module.exports = { UTR };
