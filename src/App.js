import './App.css';
import { Route, Routes } from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styled from "styled-components";
import CV from './CV';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between flex-fill">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
