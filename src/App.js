import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Destination from './Pages/Destinations/Destinations.jsx';
import Holidays from './Pages/Holidays/Holidays.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Footer from './Components/footer/footer.jsx';
import ShortCityBreaks from './Pages/ShortCityBreaks/ShortCityBreaks.jsx';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Holidays' element={<Holidays />} />
        <Route path='/Short City-Breaks' element={<ShortCityBreaks />} />
        <Route path='/destinations' element={<Destination />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
