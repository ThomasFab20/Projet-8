import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar";

export default function Router(){
    return(
        <div class="routes">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/A-propos" element={<About/>} />
            </Routes>
        </div>
    )
}


