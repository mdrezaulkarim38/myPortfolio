import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from "./pages/MainLayout";
import About from "./pages/About";
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout component={<Home />} />} />
        <Route path="/about" element={<MainLayout component={<About />} />} />
        <Route path="/project" element={<MainLayout component={<Project />} />} />
        <Route path="/contact" element={<MainLayout component={<Contact />} />} />
      </Routes>
    </Router>
  );
}

export default App;
