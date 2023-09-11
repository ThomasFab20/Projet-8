import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";

export default function Router(){
    return(
        <div className="routes">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/A-propos" element={<About/>} />
            </Routes>
        </div>
    )
}


