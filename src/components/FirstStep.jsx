import paper from '../assets/paper.svg';
import rock from '../assets/rock.svg';
import scissors from '../assets/scissors.svg';
import triangle from '../assets/image-triangle-background.svg';

const playerOptions = ['rock', 'paper', 'scissors'];
//                       0        1          2

const getRandomOption = () => {
  const number = Math.floor(Math.random() * 3);

  return playerOptions[number];
};

const FirstStep = ({ setCurrentGame, setGamesWon, setShowRules }) => {
  const handlePlayerSelect = (newSelectedOption) => {
    const newHouseChoice = getRandomOption();
    setCurrentGame({
      step: 2,
      selectedOption: newSelectedOption,
      houseChoice: newHouseChoice,
      finalMessage: rps(newSelectedOption, newHouseChoice),
    });
  };

  const rps = (p1, p2) => {
    console.log('p1: ', p1);
    console.log('p2: ', p2);

    if (p1 === p2) return 'DRAW';

    if (p1 === 'rock') {
      if (p2 === 'paper') return 'YOU LOSE';
      if (p2 === 'scissors') {
        setGamesWon((prev) => prev + 1);
        return 'YOU WIN';
      }
    }

    if (p1 === 'paper') {
      if (p2 === 'rock') {
        setGamesWon((prev) => prev + 1);
        return 'YOU WIN';
      }
      if (p2 === 'scissors') return 'YOU LOSE';
    }

    if (p1 === 'scissors') {
      if (p2 === 'rock') return 'YOU LOSE';
      if (p2 === 'paper') {
        setGamesWon((prev) => prev + 1);
        return 'YOU WIN';
      }
    }
  };

  const handleRules = () => {
    setShowRules(true);
  };
  return (
    <div>
      <img className="triangle" src={triangle} />
      <div className="button-section">
        <div className="the-first-two-buttons">
          <button onClick={() => handlePlayerSelect('paper')}>
            <img src={paper} />
          </button>
          <button onClick={() => handlePlayerSelect('rock')}>
            <img src={rock} />
          </button>
        </div>
        <button onClick={() => handlePlayerSelect('scissors')}>
          <img src={scissors} />
        </button>
      </div>
      <div className="rules-button-card">
        <button className="rules-button" onClick={handleRules}>
          RULES
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
