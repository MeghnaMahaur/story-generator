// Leaderboard.js
import React, { useState } from 'react';
import "./Leaderboard.css";

const Leaderboard = () => {
  const [stories, setStories] = useState([
    { prompt: 'Story Prompt 1', story: 'Story 1', upvotes: 10 },
    { prompt: 'Story Prompt 2', story: 'Story 2', upvotes: 8 },
    { prompt: 'Story Prompt 3', story: 'Story 3', upvotes: 15 },
    // Add more stories as needed
  ]);

  // Sort the stories by upvotes in descending order
  const sortedStories = stories.slice().sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {sortedStories.map((story, index) => (
          <li key={index}>
            <p>Prompt: {story.prompt}</p>
            <p>Story: {story.story}</p>
            <p>Upvotes: {story.upvotes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
