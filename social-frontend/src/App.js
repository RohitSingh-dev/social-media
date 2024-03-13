import './App.css';
import {AboutPage, BlogPage, ContactPage, Dashboard, Homepage, RegisterPage, SignInPage} from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />} />
        <Route path='/RegisterPage' element={<RegisterPage />} />
        <Route path='/SignInPage' element={<SignInPage />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Blog' element={<BlogPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
