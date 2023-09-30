import React from 'react';
import {useState} from 'react';
import './GeneratedStory.css';

const GeneratedStory = ({story}) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(story)
    .then(() => {
      alert('Story copied to clipboard! You can now paste and share it.');
    })
    .catch((error) => {
      console.error('Error copying to clipboard:', error);
    });
  };

  return (
    <div className='div'>
      <h2>Generated Story</h2>
      <p>The farmer decided to cut the goose and remove all the golden eggs from its stomach. As soon as they 
        killed the bird and opened the goose's stomach, they found no eggs. The foolish farmer realized they had 
        destroyed their last resource out of greed. Moral: Greed destroys your resource.</p>
      <p>A shepherd boy in a village used to take his herd of sheep across the fields near the forest. He felt 
        this job was very dull and wanted to have some fun. One day while grazing the sheep, he shouted, "Wolf! 
        Wolf! The wolf is carrying away a lamb!" Farmers working in the nearby fields came running for help but 
        didn’t find any wolf. The boy laughed and replied, "It was just fun. There is no wolf here". 
      <p>Having a best friend by Shaikh Subuhi is one of the best friendship moral stories in English. The story 
        is about two friends who were walking through the desert. During the journey, they argued over something,
        and one friend slapped the other. The one who got slapped was hurt by this gesture of his best friend but
        did not react. He quietly wrote in the sand, “Today my best friend slapped me.”
        After some time, they found an oasis and started taking a bath in the lake. Suddenly, the one who had 
        been slapped started drowning. Then his friend came to his rescue and saved him. After he recovered from 
        the drowning, he engraved “Today my best friend saved my life” on a stone.</p>
      </p>
      <div>
        {isSaved ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <span>Story Saved</span>
        )}
        <button onClick={handleShare}>Share</button>
      </div>
    </div>
  );
};

export default GeneratedStory
