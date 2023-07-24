import React from 'react'
import { getAccessToken } from './NowPlaying'
import { useState,useEffect } from 'react';


const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5&offset=0'

const client_id = 'ab3999a80379407a9a62642df4a7b7c7';
const client_secret = '3eb1afcbaebe4605bbd8a7a990d17607';
const refresh_token = 'AQCI1ykgJJ76OTJr9PLmIHjoEx0If7_0lULLwDmiINHnHCa6rEYM9lZRKQXi4lK59HQEBqyLz_9IlK-fH7ZP6d8h3ngbFNbHrsKsTk1fE92xkjrpGHtViojewENeSf1dFew';

const getTopSongs = async () => {
  try {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status > 400) {
      // throw new Error('Unable to fetch currently playing song');
      throw new Error('UFS');
    } else if(response.status === 204) {
      // throw new Error('Alagappan is currenly not listening')
      throw new Error('CNP')
    }

    const topSongs = await response.json();
    const songsArray = topSongs.items
    // const albumImageUrl = song.item.album.images[0].url;
    // const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    // const isPlaying = song.is_playing;
    // const songUrl = song.item.external_urls.spotify;
    // const title = song.item.name;
    // const timePlayed = song.progress_ms;
    // const timeTotal = song.item.duration_ms;
    console.log(topSongs.items[0].duration_ms)

    return { songsArray };
  } catch (error) {
    console.error('Error fetching currently playing song:', error);
    return error.message.toString();
  }
}

const SpotifyTopList = () => {
  
  const [topSongs, setTopSongs] = useState(null)

  useEffect(() => {
    const fetchTopSongs = async () => {
      const topSongsData = await getTopSongs();
      setTopSongs(topSongsData)
      console.log(topSongsData.songsArray[0].duration_ms)
    }
    
    fetchTopSongs();
  }, []);

  if (!topSongs || !topSongs.songsArray) {
    return <div>Loading...</div>; // Or any other loading indicator you prefer
  }

  console.log(topSongs.songsArray)
  
  return (
    <div>
        {/* <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/1BYFqAprvayu7YyuQlhboF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        <div>{topSongs.songsArray[0].name}</div>
        <div>{topSongs.songsArray[0].artists.map((_artist) => _artist.name).join(', ')}</div>
        <div><img src={topSongs.songsArray[0].album.images[0].url} style={{width: '60px'}}/></div>
        <div></div>
    </div>
  )
}

export default SpotifyTopList