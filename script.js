let matches = document.getElementById("matches");

async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=0eca4550-c6a1-4603-9c49-77430392a097&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      const actualData = matchesList.map(
        (match) => `${match.name}, ${match.status}`
      );
      console.log(actualData);
      matches.innerHTML = actualData.map((match) => `<li>${match}</li>`);
      return actualData;
    })
    .catch((error) => {
      console.log(error);
    });
}

getMatchData();
