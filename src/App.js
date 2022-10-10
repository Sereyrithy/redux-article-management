import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './pages/Read';

function App() {
  return (
    <Container>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/read/:id' element={<Read /> } />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
