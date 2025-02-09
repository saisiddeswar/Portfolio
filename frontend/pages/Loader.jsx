import { useState, useEffect } from "react";
import "../styles/loader.css"; // Import CSS

const greetings = [
  "Hi", "హలో", "नमस्ते"
];

const Loader = ({ onFinish }) => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        index = (index + 1) % greetings.length;
        setCurrentGreeting(greetings[index]);
        setFade(true);
      }, 500); // Transition faster
    }, 1000); // Change text every 1 second

    setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, 3000); 

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <span className={`loader-text ${fade ? "fade-in" : "fade-out"}`}>
        {currentGreeting}
      </span>
    </div>
  );
};

export default Loader;
