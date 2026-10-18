import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import About from './Screens/About';
import Contact from './Screens/Contact';

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Hero />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
