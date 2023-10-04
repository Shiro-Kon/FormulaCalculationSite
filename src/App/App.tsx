import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, StyledEngineProvider } from '@mui/material';
import Header from '../Container/Header/Header';
import Home from '../Pages/Home/Home';
import Pifagor from '../Pages/Pifagor/Pifagor';
import Cosine from '../Pages/Cosine theorem/Cosine';

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
          <Route path="/cosine" element={<Cosine />} />
          
        </Routes>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
