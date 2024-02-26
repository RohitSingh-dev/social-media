import './App.css';
import {Homepage, RegisterPage, SignInPage} from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />} />
        <Route path='/RegisterPage' element={<RegisterPage />} />
        <Route path='/Homepage' element={<Homepage />} />
        <Route path='/SignInPage' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
