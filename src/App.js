import './App.css';
import ContentInput from './ContentInput';

function App() {
  return (
    <div className="App">
      <ContentInput 
      instructions="What type of entrepreneur?" 
      placeholder="What type of entrepreneur?"
      ></ContentInput>
      <ContentInput 
      instructions="What is your focus?" 
      placeholder="What is your focus?"
      ></ContentInput>
      <ContentInput 
      instructions="What are the trends of your region?" 
      placeholder="What are the trends of your region?"
      ></ContentInput>
      <ContentInput 
      instructions="Enter your CV" 
      placeholder="Enter your CV" 
      ></ContentInput>
    </div>
  );
}

export default App;
