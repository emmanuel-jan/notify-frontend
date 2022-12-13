import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './components';

function App() {
  return (
    <>
    <Routes>
     <Route index element={<LandingPage/>}/>
     <Route path="landing-page" element={<LandingPage/>}/>
   </Routes>
   </>
  );
}

export default App;
