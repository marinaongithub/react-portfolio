import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import ProjectPage from './components/pages/projects/ProjectsPage';

function App() {
  return (
    <div>
      <Router basename="/react-portfolio">
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
