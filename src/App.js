import './App.css';
import BoxQuote from './components/BoxQuote';
import color from './color.json';
import listPhrase from './quotes.json';
import { useState } from 'react';

function App() {

  const [phrase, setPhrase] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  function phraseRandom(){
    setPhrase(Math.floor(Math.random() * listPhrase.length ))
    setColorIndex(Math.floor(Math.random() * color.length))
  }

  document.body.style = `background: ${color[colorIndex]}`;

  return (
    <div className="App" style={{color: color[colorIndex]}}>
      <BoxQuote 
        textPhrase={listPhrase[phrase].quote}
        authorPhrase={listPhrase[phrase].author}
        phraseRandom={phraseRandom}
      />
    </div>
  );
}

export default App;
