import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from '../componets/MyNavbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Loader from '../pages/Loader';
import { useState, useEffect } from "react";

function App() {
  // Load dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [loading, setLoading] = useState(true);

  // Function to toggle dark mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          {/* Pass toggleTheme function to Navbar */}
          <MyNavbar darkMode={darkMode} toggleTheme={toggleTheme} />

          <div className={`page-container ${darkMode ? "dark-mode" : "light-mode"}`}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
