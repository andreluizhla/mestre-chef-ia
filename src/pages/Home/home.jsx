import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Selecione a página</h1>
            <Link to="/aluno/">Aluno</Link>
            <Link to="/cozinha/">Cozinha</Link>
            <Link to="/representante/">Representante</Link>
        </>
    )
}

export default Home