import './App.css';
import { Shop } from './components/Shop';
import { FooterPage } from './components/Footer/Footer';
// Routing configuration
import { Routes, Route } from 'react-router-dom';
import { About } from './assets/pages/About';
import { BasketList } from './components/BasketList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<BasketList />} />
      </Routes>
      <FooterPage />
    </>
  );
}
export default App;
