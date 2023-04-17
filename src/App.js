import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SingUP from './components/SingUP';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/sing-up'element={<SingUP/>}/>
      <Route path='/sign-in'element={<SignIn/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
