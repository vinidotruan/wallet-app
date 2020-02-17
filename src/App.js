import React from 'react';
import Routes from './routes';
import FooterBar from './components/FooterBar';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Routes />
      <FooterBar />
    </div>
  );
}

export default App;
