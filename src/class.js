import fetch from "node-fetch";
const url = "https://api.universaltennis.com";
const auth_url = "https://app.universaltennis.com/api";

/**
 * It takes an email and password, and returns a JSON object containing a token and user object.
 * @param email - email address of the user
 * @param password - "password"
 * @returns The response from the server.
 */
async function login(email, password) {
  // Login to UTR
  console.log("Logging in");
  const url = auth_url + "/v1/auth/login";
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

/**
 * It takes a player_id as an argument, and returns the player's data from the API.
 * @param player_id - The player ID of the player you want to get.
 * @returns The data is being returned as a promise.
 */
async function getPlayer(player_id) {
  console.log("Getting Player");
  const url = auth_url + `/v1/player/${player_id}`;
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

/**
 * It takes a query and returns a list of players that match the query
 * @param query - The name of the player you want to search for
 * @param [top=10] - The number of results to return.
 * @returns An array of objects.
 */
async function searchPlayer(query, top = 10) {
  console.log("Searching for a player");
  query = query.replace(" ", "%20");
  const url = auth_url + `/v2/search/players?query=${query}`;
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
async function getEvent(eventID) {
  console.log("Getting Event");
  const url = auth_url + `/v1/tms/events/${eventID}`;
  
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch {
    console.error(error);
  }
} 

/**
 * It takes a player_id and a top number and returns the top number of results for that player.
 * @param player_id - The player's ID.
 * @param [top=10] - The number of results to return.
 * @returns An array of objects.
 */
async function getResults(player_id, top = 10) {
  console.log("Getting Player Results");
  const url = auth_url + `/v1/player/${player_id}/results`;
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

export {
  login,
  getPlayer,
  searchPlayer,
  getEvent,
  getResults,
};
