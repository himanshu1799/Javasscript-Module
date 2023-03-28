# GITHUB FINDER PROJECT

```
const form = document.querySelector('form');
const input = document.querySelector('#username');
const results = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally
  const username = input.value.trim();

  try {
    // Make a GET request to the GitHub API to get the user's information
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`Failed to get user information: ${response.status} ${response.statusText}`);
    }
    const user = await response.json();

    // Make a GET request to the GitHub API to get the user's commit, repo and follower information
    const commitResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (!commitResponse.ok) {
      throw new Error(`Failed to get user repo information: ${commitResponse.status} ${commitResponse.statusText}`);
    }
    const commits = await commitResponse.json().then(data => {
      return data.map(repo => repo.commits_url.replace('{/sha}','')).reduce(async (accumulator, repo) => {
          try {
            const res = await fetch(repo)
            if(!res.ok){
              throw new Error(`Failed to get user commit information: ${res.status} ${res.statusText}`);
            }
            const data = await res.json()
            return (await accumulator) + data.length
          } catch(error) {
            console.error(error);
            return accumulator;
          }
      }, 0)
    })

    const followerResponse = await fetch(`https://api.github.com/users/${username}/followers`);
    if (!followerResponse.ok) {
      throw new Error(`Failed to get user follower information: ${followerResponse.status} ${followerResponse.statusText}`);
    }
    const followers = await followerResponse.json().then(data => data.length);

    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (!repoResponse.ok) {
      throw new Error(`Failed to get user repo information: ${repoResponse.status} ${repoResponse.statusText}`);
    }
    const repos = await repoResponse.json().then(data => data.length);
    ```