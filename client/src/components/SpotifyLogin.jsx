import React from 'react';

const SpotifyAuthorizationButton = () => {
  const handleButtonClick = () => {
    const spotifyAuthorizationUrl = "https://accounts.spotify.com/authorize?client_id&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

    // Redirect the user to the Spotify authorization URL
    window.location.href = spotifyAuthorizationUrl;
  };

  return (
    <button onClick={handleButtonClick}>Authorize with Spotify</button>
  );
};

export default SpotifyAuthorizationButton;
