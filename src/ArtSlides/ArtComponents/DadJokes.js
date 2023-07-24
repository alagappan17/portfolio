import React, { useState, useEffect } from 'react';

const DadJokes = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJoke = () => {
    setLoading(true);
    setError('');

    fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch joke.');
        }
        return response.json();
      })
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke(); // Fetch a joke when the component mounts
  }, []);

  return (
    <div className='dadJokeContainer'>
      {error && <p>{error}</p>}
      {joke && <p>{joke}</p>}
      <button onClick={fetchJoke} disabled={loading} className='jokeButton'>
        {loading ? 'Fetching...' : 'Get New Joke'}
      </button>
    </div>
  );
};

export default DadJokes;
