import React from 'react';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
  return (
    <>
      
          <MenuItem to="/">Калькулятор</MenuItem>
        
          <MenuItem to="/pifagor">Теорема Піфагора</MenuItem>
       
    </>
  )
}

export default Menu;
