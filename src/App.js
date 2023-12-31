import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navigaton_bar from './Components/Navigation/Navigaton_bar';
import { Routes, Route } from 'react-router-dom';
import About from './Components/AboutPage/About';
import Work from './Components/Workpage/Work';
import Price from './Components/Pricingpage/Price';
import Blog from './Components/Blogpage/Blog';
function App() {
  return (
    <div >
      <Navigaton_bar />
      <div className=''>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/howitworks' element={<Home />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/pricing' element={<Price />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
