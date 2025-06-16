// hooks
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

  // varianta 2
  const initialGamesWon = localStorage.getItem('score') || 0;
  let [gamesWon, setGamesWon] = useState(initialGamesWon);

  // varianta 1
  // const initialGamesWon = localStorage.getItem('score');
  // let [gamesWon, setGamesWon] = useState(
  //   initialGamesWon !== null ? Number(initialGamesWon) : 0
  // );

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

// Cum se executa getSelectedOptionImage(getRandomOption())
// 1. Se executa functia getRandomOption
// 2. Se executa functia getSelectedOptionImage

export default App;
