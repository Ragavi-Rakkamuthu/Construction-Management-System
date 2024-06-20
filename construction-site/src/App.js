import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductsDiplay from './Pages/ProductsDiplay';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer' ;
import About from './Components/About/About';
import Explore from './Components/Explore/Explore';
function App() {
  return (   
    <div >
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/Residential' element={< ProductsDiplay banner={null} category="Residential" />} /> 
        <Route path='/Commercial' element={< ProductsDiplay banner={null} category="Commercial" />} /> 
        <Route path='/Interior' element={< ProductsDiplay banner={null} category="Interior" />} /> 
        <Route path='/about' element={< About />} /> 
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/explore' element={<Explore/>} />
        <Route path='/login' element={<LoginSignup />} /> 
      </Routes>
      <Footer/>
      {/* <About/> */}
      </BrowserRouter>  
    </div>
  );
}   

export default App;
