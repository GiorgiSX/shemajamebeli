
import React, { useState, useEffect } from 'react';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  
  useEffect(() => {
    
    const mockEpisodes = [
      { id: 1, title: 'Episode 1', description: 'Description of Episode 1', thumbnail: '/path/to/episode1-thumbnail.jpg' },
      { id: 2, title: 'Episode 2', description: 'Description of Episode 2', thumbnail: '/path/to/episode2-thumbnail.jpg' },
      
    ];
    setEpisodes(mockEpisodes);
  }, []);

  return (
    <div className="episode-list">
      {episodes.map(episode => (
        <div key={episode.id} className="episode-card">
          <img src={episode.thumbnail} alt={episode.title} />
          <h3>{episode.title}</h3>
          <p>{episode.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EpisodeList;
