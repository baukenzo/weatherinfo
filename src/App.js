import {Routes, Route, useLocation} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import {AnimatePresence} from 'framer-motion';


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar/>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage/>} />
          <Route path='/firstpage' element={<FirstPage/>} />
          <Route path='/secondpage' element={<SecondPage/>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
