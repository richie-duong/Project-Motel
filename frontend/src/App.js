import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage'
import RoomsAndRatesPage from './pages/RoomsAndRatesPage'
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/rooms-and-rates' element={<RoomsAndRatesPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact-us' element={<ContactUsPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
