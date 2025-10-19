import './App.css'

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

export default App
