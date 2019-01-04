import { get, set } from 'idb-keyval';

const dbName = 'musically_saved_tracks';

export async function saveSong(song: any) {
  const savedSongs = (await get(dbName) as any[]);

  if (savedSongs) {
    savedSongs.push(song);
    await set(dbName, savedSongs);
  }
  else {
    await set(dbName, [song]);
  }

  return savedSongs;
}

export async function getSaved() {
  const savedSongs = (await get(dbName) as any[]);

  if (savedSongs) {
    return await savedSongs;
  } else {
    return [];
  }
}