import './App.css';
import './bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Components/Home'
import Add from './Components/Add'
import Edit from './Components/Edit'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" className='navbar'>
        <Container>
        <h1 className='text-light fs-3 m-3'>Employe Management System</h1>
        </Container>
      </Navbar>

        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
