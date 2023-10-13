import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing pages
import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import PeternakanAnalisis from "./pages/Peternakan";
import PeternakanTabel from "./pages/Peternakan/tabel";
import SapiTerdataRiwayat from "./pages/SapiTerdata/riwayat";
import SapiTabel from "./pages/SapiTerdata/tabel";
import SapiTerdataAnalisis from "./pages/SapiTerdata/analisis";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/peternakan' element={<PeternakanAnalisis />} />
        <Route path='/peternakan/tabel' element={<PeternakanTabel />} />
        <Route path='/sapi-terdata' element={<SapiTerdataAnalisis />} />
        <Route path='/sapi-terdata/tabel' element={<SapiTabel />} />
        <Route path='/sapi-terdata/riwayat' element={<SapiTerdataRiwayat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
