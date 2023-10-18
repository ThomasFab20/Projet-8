import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Error from "./Error_Page/Error";
import Logements from "./Logements/Logements";


export default function Router(){
    return(
        <div className="routes">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/A-propos" element={<About/>} />
                    <Route path="/Logements/:logementId" element={<Logements />}/>
                    <Route path="*" element={<Error />} />
                </Routes>
        </div>
    )
}


