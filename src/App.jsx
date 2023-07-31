import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import FeedbackForm from "./pages/FeedbackForm"
import About from "./pages/About";
import Reciter from "./pages/Reciter";
import Translator from "./pages/Translator";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chapter from "./pages/Chapter";
import Languages from "./pages/Languages";
import Player from "./pages/Player";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send_feedback" element={<FeedbackForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/change_reciter" element={<Reciter />} />
          <Route path="/language" element={<Languages />} />
          <Route path="/translation/:name" element={<Translator />} />
          <Route path="/chapter/:id" element={<Chapter />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
