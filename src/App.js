import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Projects from './Projects';
// import Home from './Home';
// import NavBar from './NavBar';
// import Header from './Header';
// import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import CV from './CV';
// import Contact from './Contact';
// import Error from './Error';
import Maintenance from './Maintenance';

function App() {

  const message = "test"

  return (
    <div className="App d-flex flex-column justify-content-between flex-fill">
      <Header />
      <NavBar />
      <Routes>
        <Route path="*" element={<Maintenance message={message} />} />
        <Route path="/" element={<Maintenance message={message} />} />
        <Route path="/projects" element={<Maintenance message={message} />} />
        <Route path="/cv" element={<Maintenance message={message} />} />
        <Route path="/contact" element={<Maintenance message={message} />} />
        <Route path="/error" element={<Maintenance message={message} />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
