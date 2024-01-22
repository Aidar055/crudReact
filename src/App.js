import React from "react";
import Navbar from "./components/Navbar";
import MainRoute from "./routes/MainRoute";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoute />
      <Footer />
    </div>
  );
};

export default App;
