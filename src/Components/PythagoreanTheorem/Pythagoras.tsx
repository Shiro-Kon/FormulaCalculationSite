import React, { useState } from 'react';
import './Pythagoras.scss';

const Pythagoras = () => {
  const [a, setA] = useState<number | null>(null);
  const [b, setB] = useState<number | null>(null);
  const [c, setC] = useState<number | null>(null);
  const [result, setResult] = useState<string>('');

  const calculate = () => {
    if (a !== null && b !== null) {
      const cSquared = a ** 2 + b ** 2;
      const cValue = Math.sqrt(cSquared);
      setC(cValue);
      setResult(`c = ${cValue}`);
    } else if (a !== null && c !== null) {
      const bSquared = c ** 2 - a ** 2;
      if (bSquared >= 0) {
        const bValue = Math.sqrt(bSquared);
        setB(bValue);
        setResult(`b = ${bValue}`);
      } else {
        setResult('Неможливо обчислити b з заданими значеннями a та c');
      }
    } else if (b !== null && c !== null) {
      const aSquared = c ** 2 - b ** 2;
      if (aSquared >= 0) {
        const aValue = Math.sqrt(aSquared);
        setA(aValue);
        setResult(`a = ${aValue}`);
      } else {
        setResult('Неможливо обчислити a з заданими значеннями b та c');
      }
    } else {
      setResult('Будь ласка, введіть два значення для обчислення');
    }
  };

  const clearInputs = () => {
    setA(null);
    setB(null);
    setC(null);
    setResult('');
  };

  return (
    <div className='box'>
      <span className='title'>Теорема Піфагора</span>
      <span className='sub-title'>
        Теорема Піфагора де,
        a = Прилегла сторона (a)
        b = Протилежна сторона (b)
        c = Гіпотенуза (c) прямокутного трикутника.
        ( a^2 + b^2 = c^2 )
      </span>
      <input
        type='number'
        name='a'
        id='a'
        placeholder='Введіть число a'
        value={a !== null ? a : ''}
        onChange={(e) => setA(parseFloat(e.target.value))}
      />
      <input
        type='number'
        name='b'
        id='b'
        placeholder='Введіть число b'
        value={b !== null ? b : ''}
        onChange={(e) => setB(parseFloat(e.target.value))}
      />
      <input
        type='number'
        name='c'
        id='c'
        placeholder='Введіть число c'
        value={c !== null ? c : ''}
        onChange={(e) => setC(parseFloat(e.target.value))}
      />

      <input type='button' value='Обчислити' onClick={calculate} />
      <input type='button' value='Очистити' onClick={clearInputs} />
      
      
    </div>
  );
};

export default Pythagoras;
