import React from 'react'
import { getAccessToken } from './NowPlaying'
import { useState,useEffect } from 'react';


const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5&offset=0'
const GET_PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/playlists/1BYFqAprvayu7YyuQlhboF'

const client_id = 'ab3999a80379407a9a62642df4a7b7c7';
const client_secret = '3eb1afcbaebe4605bbd8a7a990d17607';
const refresh_token = 'AQCI1ykgJJ76OTJr9PLmIHjoEx0If7_0lULLwDmiINHnHCa6rEYM9lZRKQXi4lK59HQEBqyLz_9IlK-fH7ZP6d8h3ngbFNbHrsKsTk1fE92xkjrpGHtViojewENeSf1dFew';

const getPlaylist = async () => {
  try {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);
    const response = await fetch(GET_PLAYLIST_ENDPOINT, {
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

    const playlist = await response.json();
    const playlistUrl = playlist.external_urls.spotify;
    const playlistCover = playlist.images[0].url;
    const playlistName = playlist.name;
    const songCount = playlist.tracks.total;
    // console.log(playlist)

    return { 
      playlistUrl,
      playlistCover,
      playlistName,
      songCount
    };
  } catch (error) {
    console.error('Error fetching Playlist:', error);
    return error.message.toString();
  }
}

const SpotifyTopList = () => {
  
  const [playlist, setPlaylist] = useState(null)

  useEffect(() => {
    const fetchPlaylist = async () => {
      const playlistData = await getPlaylist();
      setPlaylist(playlistData)
    //   console.log(playlistData)
    }
    
    fetchPlaylist();
  }, []);

  let playlistCover = './images/albumCover.png'
  let playlistName = ''
  let playlistSongCount = ''
  let playlistUrl = ''

  if(playlist != null && playlist.playlistName) {
    playlistCover = playlist.playlistCover
    playlistName = playlist.playlistName
    playlistSongCount = playlist.songCount
    playlistUrl = playlist.playlistUrl
  } else {
    playlistName = 'Loading'
    playlistSongCount = '###'
  }

//   if (!playlist && !playlist.playlistName) {
//     return <div>Loading...</div>; // Or any other loading indicator you prefer
//   }

//   console.log(playlist.playlistName)
  
  return (
    <div className='playlistContainer'>
        {/* <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/1BYFqAprvayu7YyuQlhboF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        <div className='playlistCover'><img src={playlistCover}/></div>
        <div className='playlistInfo'>
            <div className='playlistHeader'>My Playlist</div>
            <div className='playlistName'><a href={playlistUrl}>{playlistName}</a></div>
            <div className='playlistSongCount'>{playlistSongCount} Songs</div> 
        </div>
    </div>
  )
}

export default SpotifyTopList