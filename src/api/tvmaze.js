const BASE_URL = 'https://api.tvmaze.com';

export async function fetchAllShows() {
  const response = await fetch(`${BASE_URL}/shows`);
  if (!response.ok) {
    throw new Error(`Failed to fetch shows from TVMaze (status: ${response.status})`);
  }
  const data = await response.json();
  return data;
}

export async function searchShows(query) {
  const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Failed to search shows from TVMaze (status: ${response.status})`);
  }
  const data = await response.json();
  return data.map((item) => item.show);
}