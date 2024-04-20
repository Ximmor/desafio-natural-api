import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FotoProvider } from './contexts/FotoContext';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favoritos from './views/Favoritos';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <div>
        <FotoProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/natural-api/" element={<Home />} />
              <Route path="/natural-api/favoritos" element={<Favoritos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </FotoProvider>
      </div>
    </>
  );
}

export default App;