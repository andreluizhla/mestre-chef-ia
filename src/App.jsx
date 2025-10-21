import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Student from "./pages/Student/student";
import Kitchen from "./pages/Kitchen/kitchen";
import Representative from "./pages/Representative/representative";
import Header from "./components/Header";
import "./App.css";

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
                </Routes>
            </div>
        </>
    );
}

export default App;
