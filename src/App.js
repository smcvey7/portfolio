import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import CV from './CV';
import Contact from './Contact';
import Error from './Error';
import Maintenance from './Maintenance'


function App() {
  const location = useLocation();
  const isCV = location.pathname.startsWith('/cv');

  const message = "🚧 Site currently undermaintenance 🚧"

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-6">
        <Header />
      </header>
      <nav className="sticky top-0 z-40 shadow-sm">
        <NavBar />
      </nav>
      <main className={isCV ? "w-full px-4 sm:px-6 flex-1" : "container-page flex-1 py-10"}>
        {/* <Routes>
          <Route path="*" element={<Maintenance message={message} />} />
          <Route path="/" element={<Maintenance message={message} />} />
          <Route path="/projects" element={<Maintenance message={message} />} />
          <Route path="/cv" element={<Maintenance message={message} />} />
          <Route path="/contact" element={<Maintenance message={message} />} />
          <Route path="/error" element={<Maintenance message={message} />} />
        </Routes> */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
