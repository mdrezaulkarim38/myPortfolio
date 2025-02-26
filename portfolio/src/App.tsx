import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from "./pages/MainLayout";
import About from "./pages/About";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout component={<Home />} />} />
        <Route path="/about" element={<MainLayout component={<About />} />} />
      </Routes>
    </Router>
  );
}

export default App;
