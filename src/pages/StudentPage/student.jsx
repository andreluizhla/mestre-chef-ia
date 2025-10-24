import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import IconButton from "@mui/material/IconButton";
import Check from "@mui/icons-material/Check";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

import CustomButton from "../../components/CustomButton";
import { ingredients } from "../../mock";
import "./student.css";
import IngredientList from "../../components/List";

const Student = () => {
    const navigate = useNavigate();

    // selected ingredient names
    const [checked, setChecked] = useState([]);
    const [mockIngredients, setMockIngredients] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [reptition, setReptition] = useState(false);

    // carregar lista e seleções salvas ao montar
    useEffect(() => {
        setMockIngredients(ingredients);
        try {
            // const saved = localStorage.getItem('selectedIngredients');
            // if (saved) {
            //     setChecked(JSON.parse(saved));
            // } else {
            // por padrão, marcar todos os ingredientes quando não houver seleção salva
            setChecked(ingredients);
            // }
        } catch {
            // ignore parse errors
        }
    }, []);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    // persistir seleção
    // useEffect(() => {
    //     try {
    //         localStorage.setItem('selectedIngredients', JSON.stringify(checked));
    //     } catch {
    //         // ignore storage errors
    //     }
    // }, [checked]);
    return (
        <section className="main">
            <div className="menu-main">
                <div className="weekday-countainer">
                    {/* <IconButton>
                        <ArrowBackIosNewIcon sx={{ color: "#FF9D00" }} />
                    </IconButton> */}
                    <p className="weekday">Segunda</p>
                    {/* <IconButton>
                        <ArrowForwardIosIcon sx={{ color: "#FF9D00" }} />
                    </IconButton> */}
                </div>
                <img
                    src="https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg"
                    alt="prato de comida"
                    className="menu-image"
                />
            </div>

            <div className="menu-infor">
                <h1 className="menu-name">Arroz, Feijão, Farofa e Salada</h1>
                <IngredientList
                    ingredents={mockIngredients}
                    checked={checked}
                    handleToggle={handleToggle}
                    setExpanded={setExpanded}
                    isExpanded={expanded}
                />
                <div className="buttons">
                    <CustomButton
                        icon={
                            reptition ? <CheckBox /> : <CheckBoxOutlineBlank />
                        }
                        text="Repetições"
                        action={() => {
                            setReptition(!reptition);
                        }}
                    />
                    <CustomButton
                        icon={<Check />}
                        text="Confirmar"
                        action={() => navigate("/enviado")}
                    />
                </div>
            </div>
        </section>
    );
};

export default Student;
