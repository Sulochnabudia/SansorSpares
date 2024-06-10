import './App.css';
import Navbar from './componenets/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Footer from './componenets/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Faq from './pages/Faq';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/faq' element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
