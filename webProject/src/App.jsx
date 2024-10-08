  import Navbar from "./components/navbar";      
import Carousel from "./components/Carousel";  
import Cards from "./components/Cards";        
import AboutUs from "./components/AboutUs";    
import Footerlast from "./components/footer";  
import HomePage from "./HomePage.jsx";         
import Login from './Login.jsx';            
import Register from './Register.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  


const App = () => {
  return (
    <Router>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </Router>
  );
};

export default App;
