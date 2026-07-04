import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeLayout from './components/HomeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Collaboration from './pages/Collaboration';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Anasayfa: Eyebrow'lu layout */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* Diğer sayfalar: Eyebrow'suz layout */}
        <Route path="/" element={<Layout />}>
          <Route path="hakkinda" element={<About />} />
          <Route path="is-birligi" element={<Collaboration />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
