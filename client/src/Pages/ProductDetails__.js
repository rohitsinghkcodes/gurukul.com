import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const YouTubePlayerPage = () => {
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState('');

  useEffect(() => {
    fetchPlaylistVideos();
  }, []);

  // Function to fetch playlist videos from YouTube Data API
  const fetchPlaylistVideos = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/playlistItems',
        {
          params: {
            part: 'snippet',
            maxResults: 10, // Adjust the number of videos to fetch as per your requirement
            playlistId: 'YOUR_PLAYLIST_ID',
            key: 'YOUR_API_KEY',
          },
        }
      );

      setPlaylistVideos(response.data.items);
      if (response.data.items.length > 0) {
        setSelectedVideoId(response.data.items[0].snippet.resourceId.videoId);
      }
    } catch (error) {
      console.error('Error fetching playlist videos:', error);
    }
  };

  const onVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div className="youtube-player-page">
      <div className="playlist-container">
        <h2>Playlist Videos</h2>
        <ul>
          {playlistVideos.map((video) => (
            <li key={video.snippet.resourceId.videoId}>
              <button
                onClick={() => onVideoSelect(video.snippet.resourceId.videoId)}
              >
                {video.snippet.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="player-container">
        <h2>Video Player</h2>
        <YouTube videoId={selectedVideoId} />
      </div>
    </div>
  );
};

export default YouTubePlayerPage;
