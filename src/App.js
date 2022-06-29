import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/firstpage' element={<FirstPage/>} />
        <Route path='/secondpage' element={<SecondPage/>} />
      </Routes>
    </>
  );
}

export default App;
