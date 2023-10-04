import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button/Button";
import "./Calculator.scss";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      const result: string = evaluateExpression(input);
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLastDigit = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Enter" || key === " ") {
        event.preventDefault();
        key === " " ? clearInput() : calculateResult();
      } else if (/^[0-9+\-*/.]$/.test(key)) {
        handleButtonClick(key);
      } else if (key === "Backspace") {
        deleteLastDigit();
      }
    },
    [handleButtonClick, clearInput, deleteLastDigit, calculateResult]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const evaluateExpression = (expression: string) => {
    throw new Error("Evaluation not implemented");
  };

  return (
    <div className="calculator">
      <input type="text" className="calc-input" value={input} readOnly />
      <div className="button-grid">
        <div className="button-row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "/", "+", "-", "*"].map((label) => (
            <Button
              key={label}
              label={label.toString()}
              onClick={() => handleButtonClick(label.toString())}
            />
          ))}
        </div>
        <div className="button-row">
          <Button label="C" onClick={clearInput} />
          <Button label="0" onClick={() => handleButtonClick("0")} />
          <Button label="=" onClick={calculateResult} />
          <Button label="←" onClick={deleteLastDigit} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
