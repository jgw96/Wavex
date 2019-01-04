const key = "a7Ucuq0KY8Ksn8WzBG6wj4x6pcId6BpU";
const root = "https://api.soundcloud.com";

export async function getTracks() {
  const url = `${root}/tracks?client_id=${key}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  
  return data;
}

export async function getTrackDetail(id: string) {
  const url = `${root}/tracks/${id}?client_id=${key}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  
  return data;
}

export async function getSingleTrack(genre: string) {
  const url = `${root}/tracks?client_id=${key}&genres=${genre}`;

  const response = await fetch(url);
  const data = await response.json();

  const random = Math.floor(Math.random() * data.length) + 1;  
  return data[random];
}

export async function searchTracks(query: string) {
  const url = `${root}/tracks?client_id=${key}&q=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}