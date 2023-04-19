import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';
import RequireAuth from './components/RequireAuth';
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
      <Route path='/dashboard'element={<RequireAuth><Dashboard/></RequireAuth>}/>
     </Routes>
    </div>
  );
}

export default App;
