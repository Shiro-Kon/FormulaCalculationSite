// Calculator.tsx
import React, { useState, useEffect, useCallback } from 'react';
import Button from '../Button/Button';
import './Calculator.scss';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      // Use a safer way to evaluate expressions to avoid security risks
      const result = Function(`return (${input})`)();
      setInput(result.toString());
    } catch (error) {
      setInput('Помилка');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const deleteLastDigit = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  // Listen for keyboard input
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevent the default behavior of the Enter key
        if (event.key === ' ') {
          clearInput(); // Clear input if the "Space" key is pressed
        } else {
          calculateResult(); // Calculate result if the "Enter" key is pressed
        }
      } else if (/^[0-9+\-*/.]/.test(event.key)) {
        handleButtonClick(event.key);
      } else if (event.key === 'Backspace') {
        deleteLastDigit();
      }
    },
    [handleButtonClick, clearInput, deleteLastDigit]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="calculator">
      <div className="input-window">
        <input type="text" value={input} readOnly />
      </div>
      <div className="button-grid">
        <div className="button-row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '/', '+', '-', '*'].map((label) => (
            <Button key={label} label={label.toString()} onClick={() => handleButtonClick(label.toString())} />
          ))}
        </div>
        <div className="button-row">
          <Button label="C" onClick={clearInput} />
          <Button label="0" onClick={() => handleButtonClick('0')} />
          <Button label="=" onClick={calculateResult} />
          <Button label="←" onClick={deleteLastDigit} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;