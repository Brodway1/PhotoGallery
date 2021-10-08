import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import RenderPhotos from "./RenderPhotos";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`App ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <RenderPhotos darkMode={darkMode} />
    </div>
  );
}

export default App;
