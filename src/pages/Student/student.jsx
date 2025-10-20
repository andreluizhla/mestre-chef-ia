import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Check from "@mui/icons-material/Check";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

import CustomButton from "../../components/Button";
import { ingredients } from "../../mock";
import "./student.css";

const Student = () => {
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
                <div className="weekday">
                    <IconButton>
                        <ArrowBackIosNewIcon sx={{ color: "#FF9D00" }} />
                    </IconButton>
                    <p>Segunda</p>
                    <IconButton>
                        <ArrowForwardIosIcon sx={{ color: "#FF9D00" }} />
                    </IconButton>
                </div>
                <img
                    src="https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg"
                    alt="prato de comida"
                    className="menu-image"
                />
            </div>

            <div className="menu-infor">
                <h1 className="menu-name">Arroz, Feijão, Farofa e Salada</h1>
                <List
                    sx={{ padding: 0, marginTop: "20px" }}
                    className="compact-list"
                >
                    {/* item compacto que expande/colapsa (resumo) */}
                    <ListItem
                        disablePadding
                        className={`compact-summary ${
                            expanded ? "expanded" : ""
                        }`}
                    >
                        <ListItemButton onClick={() => setExpanded(!expanded)}>
                            <ListItemText
                                sx={{ color: "white" }}
                                primary={`Ingredientes (${checked.length} selecionados)`}
                            />
                            <span className="expand-icon" aria-hidden>
                                {expanded ? "▾" : "▸"}
                            </span>
                        </ListItemButton>
                    </ListItem>

                    {/* lista completa visível somente quando expandido */}
                    {expanded &&
                        mockIngredients.map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    disablePadding
                                    className="ingredient-item"
                                >
                                    <ListItemButton
                                        role={undefined}
                                        onClick={handleToggle(value)}
                                        dense
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.includes(
                                                    value
                                                )}
                                                tabIndex={-1}
                                                disableRipple
                                                sx={{
                                                    color: "var(--action)",
                                                    "&.Mui-checked": {
                                                        color: "var(--action)",
                                                    },
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            id={labelId}
                                            primary={value}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                </List>
                <div className="observation">
                    <p className="obs-text-p">Observação</p>
                    <TextareaAutosize className="obs-textarea" minRows={6} />
                </div>
                <div className="buttons">
                    <CustomButton 
                        icon={reptition ? <CheckBox /> : <CheckBoxOutlineBlank />}
                        text="Repetições"
                        action={() => {setReptition(!reptition)}}
                    />
                    <CustomButton
                        icon={<Check />}
                        text="Confirmar"
                    />
                </div>
                </div>
        </section>
    );
};

export default Student;
