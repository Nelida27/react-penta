
import './App.css';
import Ana00 from './pages/anagrafica-generale/ana00'
import Ana01 from './pages/anagrafica-generale/ana01'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Ana00 />} />
        <Route path="blogs" element={<Ana01 />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
