import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import { Container, CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from '../Container/Header/Header'
type Props = {}

const App = (props: Props) => {
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
        </Routes>
    </Container>
</StyledEngineProvider>
  )
}

export default App