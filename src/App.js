import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
