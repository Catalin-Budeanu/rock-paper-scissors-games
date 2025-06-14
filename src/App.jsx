import { useState } from 'react';
// import paperImage from "./assets/paper.svg";
import paper from './assets/paper.svg';
import rock from './assets/rock.svg';
import scissors from './assets/scissors.svg';
import title from './assets/title.svg';
import triangle from './assets/image-triangle-background.svg';
import rules from './assets/rules.svg';
import './App.css';

const getSelectedOptionImage = (option) => {
  if (option === 'paper') return paper;
  if (option === 'rock') return rock;
  if (option === 'scissors') return scissors;
};

// --- varianta 2 ---
// const icons = {
//   paper: paper,
//   rock: rock,
//   scissors: scissors,
// };

const playerOptions = ['rock', 'paper', 'scissors'];
//                       0        1          2

const getRandomOption = () => {
  // 1. genereaza un numar random din lista: 0, 1 sau 2
  const number = Math.floor(Math.random() * 3);
  // 2. foloseste numarul pe post de index ca sa returnezi elementul din playerOptions care sta pe acel index
  return playerOptions[number];
};

const App = () => {
  let [selectedOption, setSelectedOption] = useState(undefined);
  let [currentStep, setCurrentStep] = useState(1);
  let [gamesWon, setGamesWon] = useState(0);
  let [finalMessage, setFinalMessage] = useState('');
  let [houseChoice, setHouseChoice] = useState('');
  let [showRules, setShowRules] = useState(false);

  const handleSelectPaper = () => {
    setSelectedOption('paper');
    setCurrentStep(2);
    // --- de explicat de ce nu ---
    // rps(selectedOption, houseChoice);
    // --- asa da ---
    const newHouseChoice = getRandomOption();
    setHouseChoice(newHouseChoice);
    rps('paper', newHouseChoice);
  };

  const handleSelectRock = () => {
    setSelectedOption('rock');
    setCurrentStep(2);
    const newHouseChoice = getRandomOption();
    setHouseChoice(newHouseChoice);
    rps('rock', newHouseChoice);
  };

  const handleSelectScissors = () => {
    setSelectedOption('scissors');
    setCurrentStep(2);
    const newHouseChoice = getRandomOption();
    setHouseChoice(newHouseChoice);
    rps('scissors', newHouseChoice);
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  const handleRules = () => {
    setShowRules(true);
  };

  const handleCloseRules = () => {
    setShowRules(false);
  };

  const rps = (p1, p2) => {
    console.log('p1: ', p1);
    console.log('p2: ', p2);

    if (p1 === p2) setFinalMessage('DRAW');

    if (p1 === 'rock') {
      if (p2 === 'paper') setFinalMessage('YOU LOSE');
      if (p2 === 'scissors') {
        setGamesWon(gamesWon + 1);
        setFinalMessage('YOU WIN');
      }
    }

    if (p1 === 'paper') {
      if (p2 === 'rock') {
        setGamesWon(gamesWon + 1);
        setFinalMessage('YOU WIN');
      }
      if (p2 === 'scissors') setFinalMessage('YOU LOSE');
    }

    if (p1 === 'scissors') {
      if (p2 === 'rock') setFinalMessage('YOU LOSE');
      if (p2 === 'paper') {
        setGamesWon(gamesWon + 1);
        setFinalMessage('YOU WIN');
      }
    }
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
          {currentStep === 1 ? (
            <div>
              <img className="triangle" src={triangle} />
              <div className="button-section">
                <div className="the-first-two-buttons">
                  <button onClick={handleSelectPaper}>
                    <img src={paper} />
                  </button>
                  <button onClick={handleSelectRock}>
                    <img src={rock} />
                  </button>
                </div>
                <button onClick={handleSelectScissors}>
                  <img src={scissors} />
                </button>
              </div>
              <div className="rules-button-card">
                <button className="rules-button" onClick={handleRules}>
                  RULES
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="selected-option-image">
                <div className="option-card">
                  <img src={getSelectedOptionImage(selectedOption)} />
                  <h3>You picked</h3>
                  {/* --- varianta 2 --- */}
                  {/* <img src={icons[selectedOption]} /> */}
                </div>
                <div className="option-card">
                  <img src={getSelectedOptionImage(houseChoice)} />
                  <h3>The house picked</h3>
                </div>
              </div>
              <div className="final-message">
                <h3>{finalMessage}</h3>
                <button onClick={handleReset}>PLAY AGAIN</button>
              </div>
            </div>
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
