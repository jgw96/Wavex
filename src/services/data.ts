import { get, set } from 'idb-keyval';

const dbName = 'musically_saved_tracks';

export async function saveSong(song: any): Promise<boolean> {
  const savedSongs = (await get(dbName) as Set<any>);

  if (savedSongs) {
    console.log(checkSongs(savedSongs, song));

    if (checkSongs(savedSongs, song) === undefined) {
      savedSongs.add(song);
      await set(dbName, savedSongs);
      return true;
    } else {
      return false;
    }
  }
  else {
    console.log(song);
    await set(dbName, new Set([song]));
    return true;
  }
}

export async function getSaved() {
  const savedSongs = (await get(dbName) as Set<any>);

  const fixedSongs = [...savedSongs];

  if (fixedSongs) {
    return await fixedSongs;
  } else {
    return [];
  }
}

function checkSongs(songs: Set<any>, song: any) {
  const songsArray = [...songs];

  for (let i = 0; i < songsArray.length; i++) {
    console.log('saved', songsArray[i].id);
    console.log('new', song.id);

    if (songsArray[i].id === song.id) {
      return true;
    }
  }
}