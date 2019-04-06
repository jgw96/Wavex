const key = "28fa0e57d906499180792c0397ebdf73";
const root = "https://listen-api.listennotes.com/api/v2";

export async function getTracks() {
  const url = `${root}/curated_podcasts?page=1`;

  const response = await fetch(url, {
    headers: {
      "X-ListenAPI-Key": key
    }
  });
  const data = await response.json();
  console.log(data);
  
  return data.curated_lists;
}

/*const unirest = require('unirest');

unirest.get('https://listen-api.listennotes.com/api/v2/curated_podcasts?page=1')
  .header('X-ListenAPI-Key', '28fa0e57d906499180792c0397ebdf73')
  .end(function (response) {
    console.log(response.body);
});*/

export async function getListDetail(id: string) {
  const url = `${root}/curated_podcasts/${id}`;

  const response = await fetch(url, {
    headers: {
      "X-ListenAPI-Key": key
    }
  });
  const data = await response.json();
  console.log(data);
  
  return data;
}

export async function getSingleTrack(id: string) {
  const url = `${root}/podcasts/${id}`;

  const response = await fetch(url, {
    headers: {
      "X-ListenAPI-Key": key
    }
  });
  const data = await response.json();

  console.log(data);
 
  return data;
}

export async function searchTracks(query: string) {
  const url = `${root}/tracks?client_id=${key}&q=${query}`;

  const response = await fetch(url, {
    headers: {
      "X-ListenAPI-Key": key
    }
  });
  const data = await response.json();

  return data;
}