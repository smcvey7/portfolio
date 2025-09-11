import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Maintenance from './Maintenance';

function App() {

  const message = "🚧 Site currently undermaintenance 🚧"

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
