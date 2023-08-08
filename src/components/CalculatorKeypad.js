function CalculatorKeypad() {
  return (
    <div className="calculator-keypad">
      <div className="input-keys">
        <div className="function-keys">
          <button type="button">AC</button>
          <button type="button">±</button>
          <button type="button">%</button>
        </div>
        <div className="digit-keys">
          <button type="button">7 </button>
          <button type="button">8</button>
          <button type="button">9 </button>
          <button type="button">4</button>
          <button type="button">5 </button>
          <button type="button">6</button>
          <button type="button">1 </button>
          <button type="button">2</button>
          <button type="button">3 </button>
          <button type="button" className="key-0">
            0
          </button>
          <button type="button">●</button>
        </div>
      </div>
      <div className="operator-keys">
        <button type="button">÷</button>
        <button type="button">×</button>
        <button type="button">−</button>
        <button type="button">+</button>
        <button type="button"> =</button>
      </div>
    </div>
  );
}

export default CalculatorKeypad;
