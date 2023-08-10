// eslint-disable-next-line react/prop-types
function CalculatorKeypad({ handler }) {
  return (
    <div className="calculator-keypad">
      <div className="input-keys">
        <div className="function-keys">
          <button type="button" onClick={() => { handler('AC'); }}>AC</button>
          <button type="button" onClick={() => { handler('±'); }}>±</button>
          <button type="button" onClick={() => { handler('%'); }}>%</button>
        </div>
        <div className="digit-keys">
          <button type="button" onClick={() => { handler('7'); }}>7</button>
          <button type="button" onClick={() => { handler('8'); }}>8</button>
          <button type="button" onClick={() => { handler('9'); }}>9</button>
          <button type="button" onClick={() => { handler('4'); }}>4</button>
          <button type="button" onClick={() => { handler('5'); }}>5</button>
          <button type="button" onClick={() => { handler('6'); }}>6</button>
          <button type="button" onClick={() => { handler('1'); }}>1</button>
          <button type="button" onClick={() => { handler('2'); }}>2</button>
          <button type="button" onClick={() => { handler('3'); }}>3</button>
          <button type="button" className="key-0" onClick={() => { handler('0'); }}>0</button>
          <button type="button">●</button>
        </div>
      </div>
      <div className="operator-keys">
        <button type="button" onClick={() => { handler('÷'); }}>÷</button>
        <button type="button" onClick={() => { handler('x'); }}>×</button>
        <button type="button" onClick={() => { handler('-'); }}>−</button>
        <button type="button" onClick={() => { handler('+'); }}>+</button>
        <button type="button" onClick={() => { handler('='); }}> =</button>
      </div>
    </div>
  );
}

export default CalculatorKeypad;
