import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";

function Calculator() {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <CalculatorKeypad />
    </div>
  );
}

export default Calculator;
