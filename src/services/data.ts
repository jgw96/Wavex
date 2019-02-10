import { get, set } from 'idb-keyval';

const dbName = 'musically_saved_tracks';

export async function saveSong(song: any): Promise<boolean> {
  const savedSongs = (await get(dbName) as Array<any>);

  if (savedSongs) {
    console.log(checkSongs(savedSongs, song));

    if (checkSongs(savedSongs, song) === undefined) {
      savedSongs.push(song);
      await set(dbName, savedSongs);
      return true;
    } else {
      return false;
    }
  }
  else {
    console.log(song);
    await set(dbName, [song]);
    return true;
  }
}

export async function getSaved() {
  const savedSongs = (await get(dbName) as Array<any>);

  if (savedSongs) {
    return savedSongs;
  } else {
    return [];
  }
}

function checkSongs(songs: Array<any>, song: any) {
  const songsArray = [...songs];

  for (let i = 0; i < songsArray.length; i++) {
    console.log('saved', songsArray[i].id);
    console.log('new', song.id);

    if (songsArray[i].id === song.id) {
      return true;
    }
  }
}