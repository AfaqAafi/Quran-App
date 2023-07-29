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
          <Route path="/change_translation" element={<Translator />} />
          <Route path="/chapter/:id" element={<Chapter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
