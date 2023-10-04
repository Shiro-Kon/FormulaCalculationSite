import React, { useState } from "react";
import "./CosineTheoreme.scss";

type Props = {};

const CosineTheoreme = (props: Props) => {
  const [sideA, setSideA] = useState<number | null>(null);
  const [sideB, setSideB] = useState<number | null>(null);
  const [angleBeta, setAngleBeta] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleSideAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSideA(parseFloat(e.target.value));
  };

  const handleSideBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSideB(parseFloat(e.target.value));
  };

  const handleAngleBetaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAngleBeta(parseFloat(e.target.value));
  };

  const calculateSide = () => {
    if (sideA !== null && sideB !== null && angleBeta !== null) {
      const radians = (angleBeta * Math.PI) / 180;
      const sideC = Math.sqrt(sideA ** 2 + sideB ** 2 - 2 * sideA * sideB * Math.cos(radians));
      setResult(sideC);
    }
  };

  const clearFields = () => {
    setSideA(null);
    setSideB(null);
    setAngleBeta(null);
    setResult(null);
  };

  return (
    <div className="box">
      <span className="title">Теорема косінусів</span>
      <span className="sub-title">Знайти сторону трикутника</span>
      <img src="./images/cosine.png" className="title" width={150} alt="cosine" />
      <input
        type="number"
        name=""
        id=""
        placeholder="Сторона трикутника a"
        value={sideA || ""}
        onChange={handleSideAChange}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Сторона трикутника b"
        value={sideB || ""}
        onChange={handleSideBChange}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Кут у градусах β"
        value={angleBeta || ""}
        onChange={handleAngleBetaChange}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Відповідь :"
        value={result !== null ? result : ""}
        readOnly
      />
      <input type="button" value="Обчислити" onClick={calculateSide} />
      <input type="button" value="Очистити" onClick={clearFields} />
    </div>
  );
};

export default CosineTheoreme;
