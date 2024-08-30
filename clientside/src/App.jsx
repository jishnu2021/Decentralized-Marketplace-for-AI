import { BrowserRouter, Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Login from './components/Login'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Wallet from './components/Wallet'
import Services from './components/Services'
import Setting from "./components/Setting"
import About from "./components/About"
import NLP from "./components/NLP"
import Sentiment from "./components/Sentiment"
import NLGillustration from "./components/NLGillustration"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="service" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="setting" element={<Setting />} />
          <Route path="signup" element={<Login />} />
          <Route path="nlp" element={<NLP />} />
          <Route path="sentimentanalysis" element={<Sentiment />} />
          <Route path="nlg" element={<NLGillustration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
