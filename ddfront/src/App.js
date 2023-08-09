import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./Pages/AboutUs";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/AboutUs" element={<AboutUs/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
