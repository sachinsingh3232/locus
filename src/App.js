import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
const App = () => {
  // return <Button variant="contained">Hello world</Button>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
