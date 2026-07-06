import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeLayout from './components/HomeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Collaboration from './pages/Collaboration';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

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
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
