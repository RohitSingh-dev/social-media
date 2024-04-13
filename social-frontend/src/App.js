import './App.css';
import {AboutPage, BlogPage, ChatPage, ContactPage, Dashboard, FriendsPage, Homepage, ProfilePage, ProfilePageEdit, RegisterPage, SignInPage, UserPostsPage} from './components';
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
        <Route path='/Profile' element={<ProfilePage />} />
        <Route path='/Friends' element={<FriendsPage />} />
        <Route path='/Chat' element={<ChatPage />} />
        <Route path='/MyPosts' element={<UserPostsPage />} />
        <Route path='/Profile/edit' element={<ProfilePageEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
