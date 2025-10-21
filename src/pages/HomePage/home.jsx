import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Selecione a página</h1>
            <CustomButton text="Aluno" action={() => {navigate("/aluno")}} />
            <CustomButton text="Cozinha" action={() => {navigate("/cozinha")}} />
            <CustomButton text="Representante" action={() => {navigate("/representante")}} />
        </>
    )
}

export default Home