import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import GetQuotation from './components/GetQuotation';
import GenerateQR from './components/GenerateQR';
import SendQuotation from './components/SendQuotation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/getQuote' element={<GetQuotation />} />
          <Route path='/sendQuote' element={<SendQuotation />} />
          <Route path='/getQR' element={<GenerateQR />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
