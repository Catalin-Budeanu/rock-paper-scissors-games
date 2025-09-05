import { useEffect, useState } from 'react';
import title from './assets/title.svg';
import rules from './assets/rules.svg';
import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';

const initialGame = {
  step: 1,
  selectedOption: undefined,
  houseChoice: '',
  finalMessage: '',
};

const App = () => {
  let [currentGame, setCurrentGame] = useState(initialGame);

  const initialGamesWon = localStorage.getItem('score') || 0;
  let [gamesWon, setGamesWon] = useState(initialGamesWon);

  useEffect(() => {
    localStorage.getItem('score', gamesWon);
  }, [gamesWon]);

  let [showRules, setShowRules] = useState(false);

  const handleReset = () => {
    setCurrentGame(initialGame);
  };

  const handleCloseRules = () => {
    setShowRules(false);
  };

  return (
    <>
      {showRules ? (
        <div>
          <div className="rules-card">
            <h2>RULES</h2>
            <img src={rules} />
          </div>
          <button className="exit-rules-button" onClick={handleCloseRules}>
            X
          </button>
        </div>
      ) : (
        <>
          <div className="table-score-container">
            <img src={title} />
            <div className="table-score">
              <h4>Score</h4>
              <p>{gamesWon}</p>
            </div>
          </div>
          {currentGame.step === 1 ? (
            <FirstStep
              setCurrentGame={setCurrentGame}
              setGamesWon={setGamesWon}
              setShowRules={setShowRules}
            />
          ) : (
            <SecondStep currentGame={currentGame} handleReset={handleReset} />
          )}
        </>
      )}
    </>
  );
};

export default App;
