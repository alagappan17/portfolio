import React from 'react'
import querystring from "querystring";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = 'ab3999a80379407a9a62642df4a7b7c7';
const client_secret = '3eb1afcbaebe4605bbd8a7a990d17607';
const refresh_token = 'AQCI1ykgJJ76OTJr9PLmIHjoEx0If7_0lULLwDmiINHnHCa6rEYM9lZRKQXi4lK59HQEBqyLz_9IlK-fH7ZP6d8h3ngbFNbHrsKsTk1fE92xkjrpGHtViojewENeSf1dFew';

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

export const getNowPlaying = async (client_id, client_secret, refresh_token) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );

  console.log(access_token)

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function getNowPlayingItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getNowPlaying(client_id, client_secret, refresh_token);
  // console.log(response)
  if (response.status === 204 || response.status > 400) {
    return false;
  }

  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;
  console.log(title, artist, isPlaying)

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
}

getNowPlayingItem();

const NowPlayingNew = () => {
  return (
    <div>NowPlayingNew</div>
  )
}

export default NowPlayingNew