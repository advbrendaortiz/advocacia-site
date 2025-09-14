import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  const basename = import.meta.env.PROD ? "/advocacia-site" : "";
  
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;  // CERTIFIQUE-SE QUE ESTA LINHA EXISTE