import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import FeedbackForm from "./pages/FeedbackForm"
import About from "./pages/About";
import Reciter from "./pages/Reciter";
import Translator from "./pages/Translator";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/reciter" element={<Reciter />} />
          <Route path="/translator" element={<Translator />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
