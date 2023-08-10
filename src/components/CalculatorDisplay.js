// eslint-disable-next-line react/prop-types
function CalculatorDisplay({ digits }) {
  return (
    <div className="calculator-display">
      {/* eslint-disable-next-line react/prop-types */}
      <div>{digits.next || digits.total || '0'}</div>
    </div>
  );
}

export default CalculatorDisplay;
