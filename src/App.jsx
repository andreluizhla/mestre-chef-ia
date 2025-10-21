import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/home";
import Student from "./pages/StudentPage/student";
import Kitchen from "./pages/KitchenPage/kitchen";
import Representative from "./pages/RepresentativePage/representative";
import Header from "./components/Header";
import "./App.css";
import Sended from "./pages/SendedPage/sended";

function App() {
    return (
        <>
            <Header />
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aluno/" element={<Student />} />
                    <Route path="/representante/" element={<Representative />} />
                    <Route path="/cozinha/" element={<Kitchen />} />
                    <Route path="/enviado/" element={<Sended />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
