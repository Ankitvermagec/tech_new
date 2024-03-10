import logo from './logo.svg';
import './App.css';
import Login from './login';
import Register from './Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './navbar';
import Stock from './stock';

function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route  path="/"  element={<Login/>}/>
              </Routes>
              <Routes>
                  <Route  path="/register"  element={<Register/>}/>
              </Routes>
              <Routes>
                <Route path='/navbar' element={<Navbar/>}/>
              </Routes>
              <Routes>
                <Route path='/stock' element={<Stock/>}/>
              </Routes>
          </BrowserRouter>
  );
}

export default App;
