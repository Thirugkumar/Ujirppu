import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { Post } from "./Components/Post";
import { Footer } from "./Components/Footer";
import { Error404 } from "./Components/Error404";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector("body").classList.add("darkMode");
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("body").classList.remove("darkMode");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar handleThemeToggle={handleThemeToggle} currentTheme={theme} />
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/news" element={<News />} />
          </Routes>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
