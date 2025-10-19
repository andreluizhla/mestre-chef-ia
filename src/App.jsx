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
        <Student />
        {/* <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/aluno/" element={<Student />} />
          <Route path="/representante/" element={<Kitchen />} />
          <Route path="/cozinha/" element={<Representative />} />
          </Routes> */}
      </div>
    </>
  );
}

export default App;
