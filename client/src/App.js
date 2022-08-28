import { Route, Routes } from "react-router-dom";
import Home from "./features/customer/home";
import Company from "./features/company";
import Admin from "./features/admin";

import Test from "./features/Test";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/company/*" element={<Company />} />
      <Route path="/admin/*" element={<Admin />} />

      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
