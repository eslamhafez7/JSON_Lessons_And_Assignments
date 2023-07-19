/*
    [JSON - What is API] L172
    API Overview
    Github API
*/
const accessToken = "https://api.github.com/users/eslamhafez7/repos";
// const accessToken = "https://api.github.com/users/eslamhafez7";
fetch("https://api.github.com/user", {
  headers: {
    Authorization: `token ${accessToken}`
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  console.log(accessToken);