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
import DiabetesPrediction from "./components/DiabetesPrediction "
import Payment from "./components/Payment"
import LoginasOwner from "./components/LoginasOwner"
import { useState } from "react"
import Dashboard from "./components/Dashboard"
function App() {

  const [email,setEmailglobal]=useState('')
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
          <Route path="setting" element={<Setting email={email} />} />
          <Route
            path="signupasuser"
            element={<Login setEmailglobal={setEmailglobal} />}
          />
          <Route path="signupasowner" element={<LoginasOwner />} />
          <Route path="nlp" element={<NLP />} />
          <Route path="sentimentanalysis" element={<Sentiment />} />
          <Route path="nlg" element={<NLGillustration />} />
          <Route path="trydiabetispredict" element={<DiabetesPrediction />} />
          <Route path="payment" element={<Payment />} />
          <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
