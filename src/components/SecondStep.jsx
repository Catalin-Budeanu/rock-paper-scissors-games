import paper from '../assets/paper.svg';
import rock from '../assets/rock.svg';
import scissors from '../assets/scissors.svg';

const getSelectedOptionImage = (option) => {
  if (option === 'paper') return paper;
  if (option === 'rock') return rock;
  if (option === 'scissors') return scissors;
};

const SecondStep = ({ currentGame, handleReset }) => {
  return (
    <div>
      <div className="selected-option-image">
        <div className="option-card">
          <img src={getSelectedOptionImage(currentGame.selectedOption)} />
          <h3>You picked</h3>
        </div>
        <div className="option-card">
          <img src={getSelectedOptionImage(currentGame.houseChoice)} />
          <h3>The house picked</h3>
        </div>
      </div>
      <div className="final-message">
        <h3>{currentGame.finalMessage}</h3>
        <button onClick={handleReset}>PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default SecondStep;
