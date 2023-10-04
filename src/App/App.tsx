import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, StyledEngineProvider } from '@mui/material';
import Header from '../Container/Header/Header';
import Home from '../Pages/Home/Home';
import Pifagor from '../Pages/Pifagor/Pifagor';

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <Container
        sx={{
          padding: '40px 0',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pifagor" element={<Pifagor />} />
          
        </Routes>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
