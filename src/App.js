import './App.css';
import Translate from './components/Translate';
import langContext from './components/langContext';
function App() {

  const contextType = langContext;

  return (
    <div className="App">
      <Translate/>
    </div>
  );
}

export default App;
