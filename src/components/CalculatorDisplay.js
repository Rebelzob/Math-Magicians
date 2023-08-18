import Proptypes from 'prop-types';

function CalculatorDisplay({ digits }) {
  return (
    <div className="calculator-display">
      <div>{digits.next || digits.total || '0'}</div>
    </div>
  );
}

CalculatorDisplay.propTypes = {
  digits: Proptypes.shape({
    total: Proptypes.string,
    next: Proptypes.string,
  }),
};

CalculatorDisplay.defaultProps = {
  digits: {
    total: 0,
    next: null,
  },
};

export default CalculatorDisplay;
