import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './header';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  path='/about' element={<About />} />
      <Route  path='/contact' element={<Contact />} />
      
    </Routes>
    
    </BrowserRouter>
</>
  );
}

export default App;
