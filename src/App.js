import './App.css';
import Menubar from './components/Menubar.js';
import Home from './pages/Home.js';
import Home2 from './pages/Home2.js';
import A from './components/A.js';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    // <Home/>
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/meal" element={<Home />} />
        <Route path="/meal" element={<Home />} />
        {/* <Route path="/meal/:mealname" element={<A />} /> */}
        <Route path="/meal/:mealname" element={<A />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
