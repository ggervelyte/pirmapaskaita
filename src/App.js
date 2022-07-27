import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import UsersComp from './components/UsersComp';
import Logo from './components/Logo';
import SingleProfilePage from './pages/SingleProfilePage';
import ConversationPage from './pages/ConversationPage';

function App() {

  return (
      <div className="App" >       
        <BrowserRouter>
          <Logo />
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/allusers' element={<UsersComp/>} />
            <Route path='/profile/:id' element={<SingleProfilePage/>} />
            <Route path='/conversations' element={<ConversationPage/>} />
          </Routes>
        </BrowserRouter>
      </div>

  )
}

export default App;
