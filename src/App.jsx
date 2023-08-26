import "./styles.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Lessons from "./routes/Lessons";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/o-mnie" element={<About/>}/>
        <Route path="/lekcje" element={<Lessons/>}/>
        <Route path="/kontakt" element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
