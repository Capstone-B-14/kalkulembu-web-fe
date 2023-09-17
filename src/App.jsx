import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing pages
import HomePage from "./pages/Home";
import PeternakanIndex from "./pages/Peternakan";
import PeternakanAnalisis from "./pages/Peternakan/analisis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/peternakan' element={<PeternakanIndex />} />
        <Route path='/peternakan/analisis' element={<PeternakanAnalisis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
