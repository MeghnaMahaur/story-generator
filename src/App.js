import './App.css';
import StoryPromptForm from "./myComponents/StoryPromptForm";
import GeneratedStory from "./myComponents/GeneratedStory";
import Leaderboard from "./myComponents/Leaderboard";

function App() {
  return (
    <>
      <div className='App'>
        <h1 className='App-head'>Story Prompt App</h1>
        <StoryPromptForm />
        <GeneratedStory />
        <Leaderboard />
      </div>
    </>
  );
}


export default App;
