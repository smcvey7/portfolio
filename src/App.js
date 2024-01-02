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

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between flex-fill">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
