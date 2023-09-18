import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing pages
import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import PeternakanTabel from './pages/Peternakan/tabel';
import PeternakanAnalisis from "./pages/Peternakan/analisis";
import SapiTerdataRiwayat from "./pages/SapiTerdata/riwayat";
import SapiTabel from './pages/SapiTerdata/tabel';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/peternakan/tabel" element={<PeternakanTabel />} />
        <Route path="/peternakan/analisis" element={<PeternakanAnalisis />} />
        <Route path="/sapi-terdata/tabel" element={<SapiTabel />} />
        <Route path='/sapi-terdata/riwayat' element={<SapiTerdataRiwayat />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
