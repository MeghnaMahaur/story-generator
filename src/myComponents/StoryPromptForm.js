import React, { useState } from 'react';
import './StoryPromptForm.css';

const StoryForm = () => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted prompt:', prompt)
  };

  return (
    <div>
      <h2 className='head'>Story Prompt Form</h2>
      <form onSubmit={handleSubmit} className='form'>
        <textarea rows="4" cols="50" placeholder="Enter your story" value={prompt} onChange={(e) => setPrompt(e.target.value)}></textarea>
        <button type="submit" className='btn-style'>Generate Story</button>
      </form>
    </div>
  );
};

export default StoryForm;
