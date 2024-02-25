import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statics from "./components/Statics";
import About from "./components/About";
import Features from "./components/Features";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Animation from "./components/Animation";

function App() {
  return (
    <div className="App">
      <Animation component={<Navbar />} />
      <Animation component={<Hero />} />
      <Animation component={<Statics />} />
      <Animation component={<About />} />
      <Animation component={<Features />} />
      <Animation component={<Works />} />
      <Animation component={<Contact />} />
      <Animation component={<Footer />} />
    </div>
  );
}

export default App;
