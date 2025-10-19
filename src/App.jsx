import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Kitchen from "./pages/Kitchen";
import Representative from "./pages/Representative";
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
