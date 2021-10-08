import "./App.css";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import RenderPhotos from "./RenderPhotos";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode") === "false" ? false : true
  );
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <div className={`App ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <RenderPhotos darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
