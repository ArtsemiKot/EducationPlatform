import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RegPage from './pages/RegPage/RegPage';
import AuthPage from './pages/AuthPage/AuthPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<HomePage></HomePage>}></Route>
        <Route path='/reg' element = {<RegPage></RegPage>}></Route>
        <Route path='/auth' element = {<AuthPage></AuthPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
