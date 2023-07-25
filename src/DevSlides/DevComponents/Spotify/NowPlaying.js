import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import {AiOutlinePauseCircle} from 'react-icons/ai';
import {BiErrorCircle} from 'react-icons/bi'
import {HiOutlineStatusOffline} from 'react-icons/hi'


const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
// const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5&offset=0'

// const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
// const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;
const client_id = 'ab3999a80379407a9a62642df4a7b7c7';
const client_secret = '3eb1afcbaebe4605bbd8a7a990d17607';
const refresh_token = 'AQCI1ykgJJ76OTJr9PLmIHjoEx0If7_0lULLwDmiINHnHCa6rEYM9lZRKQXi4lK59HQEBqyLz_9IlK-fH7ZP6d8h3ngbFNbHrsKsTk1fE92xkjrpGHtViojewENeSf1dFew';

export const getAccessToken = async (client_id, client_secret, refresh_token) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  return response.json();
};

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    // console.log(access_token)

    if (response.status > 400) {
      // throw new Error('Unable to fetch currently playing song');
      throw new Error('UFS');
    } else if(response.status === 204) {
      // throw new Error('Alagappan is currenly not listening')
      throw new Error('CNP')
    }

    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;
    // console.log(song)

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl
    };
  } catch (error) {
    console.error('Error fetching currently playing song:', error);
    return error.message.toString();
  }
};

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data)
      // console.log(data)
    };

    setInterval(() => {
      fetchNowPlaying();
    }, 1000);

    // fetchNowPlaying();
  }, []);

  let playerState = ''
  let secondsPlayed = 0, minutesPlayed = 0, secondsTotal = 0, minutesTotal = 0;
  let albumImageUrl = './images/albumCover.png'
  let title = ''
  let artist = ''

  // console.log(nowPlaying)

  if (nowPlaying != null && nowPlaying.title) {
    nowPlaying.isPlaying ? playerState = 'PLAY' : playerState = 'PAUSE'

    secondsPlayed = Math.floor(nowPlaying.timePlayed/1000);
    minutesPlayed = Math.floor(secondsPlayed/60);
    secondsPlayed = secondsPlayed % 60;

    secondsTotal = Math.floor(nowPlaying.timeTotal/1000);
    minutesTotal = Math.floor(secondsTotal/60);
    secondsTotal = secondsTotal % 60;
    // console.log(minutesPlayed + ':' + secondsPlayed + ' / ' + minutesTotal + ':' + secondsTotal)

    albumImageUrl = nowPlaying.albumImageUrl
    title = nowPlaying.title
    artist = nowPlaying.artist
  } else if (nowPlaying === 'CNP') {
    playerState = 'OFF'
    title = 'Alagappan is'
    artist = 'currently Offline'
  } else {
    playerState = 'ERROR'
    title = 'Failed to'
    artist = 'fetch song'
  }

  const pad = (n) =>{
    return (n < 10) ? ("0" + n) : n;
  }

  return (
    <a target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none', color: 'black'}} href={playerState === 'PLAY' || playerState === 'PAUSE' ? nowPlaying.songUrl : 'https://open.spotify.com/user/rafe1703?si=68f2f1a3eeef45ab'}>
    <div className='nowPlayingCard'>
      <div className='nowPlayingImage'>
        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a target='_blank' rel="noopener noreferrer" href={nowPlaying.songUrl}><img src={albumImageUrl} alt="Album" /></a> : <img src={albumImageUrl} alt="Album" />}
      </div>
      <div id='nowPlayingDetails'>
        <div className={`nowPlayingTitle ${title.length > 15 ? 'marquee-content' : ' '}`}>
          {playerState === 'PLAY' || playerState === 'PAUSE' ? <a target='_blank' rel="noopener noreferrer" href={nowPlaying.songUrl}>{title}</a> : title}
        </div>
        <div className='nowPlayingArtist'>
        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a target='_blank' rel="noopener noreferrer" href={nowPlaying.artistUrl}>{artist}</a> : artist}
        </div>
        <div className='nowPlayingTime'>{pad(minutesPlayed)}:{pad(secondsPlayed)} / {pad(minutesTotal)}:{pad(secondsTotal)}</div>
      </div>
      <div className='nowPlayingState'>
      {playerState === 'PLAY' ? <img alt='soundbar' src='./images/soundbar.gif' title='Now Listening'/> : playerState === 'PAUSE' ? <AiOutlinePauseCircle size={40} /> : playerState === 'OFF' ? <HiOutlineStatusOffline size={40}/> : <BiErrorCircle size={40}/> }</div>
    </div>
    </a>
  );
};

export default NowPlaying;