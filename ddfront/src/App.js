import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./Pages/AboutUs";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CSheet from "./Pages/CSheet";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/CSheet" element={<CSheet/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
