import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './pages/Header';
import { HomePage } from './pages/HomePage';
import { AdoptPage } from './pages/AdoptPage';
import { PreAdoptPage } from './pages/PreAdoptPage';
import { Footer } from './pages/Footer';
import { AdoptionForm } from './pages/AdoptionForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/preadopt" element={<PreAdoptPage />} />
          <Route path="/adoptionform" element={<AdoptionForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;