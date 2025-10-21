import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const IngredientList = ({ ingredents, isExpanded, setExpanded, checked, handleToggle }) => {
    return (
        <div className="list">
            <List
                sx={{ padding: 0, width: "100%" }}
                className="compact-list"
            >
                {/* item compacto que expande/colapsa (resumo) */}
                <ListItem
                    disablePadding
                    className={`compact-summary ${isExpanded ? "expanded" : ""
                        }`}
                >
                    <ListItemButton onClick={() => setExpanded(!isExpanded)}>
                        <ListItemText
                            sx={{ color: "white" }}
                            primary={`Ingredientes (${checked.length} selecionados)`}
                        />
                        <span className="expand-icon" aria-hidden>
                            {isExpanded ? "▾" : "▸"}
                        </span>
                    </ListItemButton>
                </ListItem>
                {/* lista completa visível somente quando expandido */}
                {isExpanded &&
                    ingredents.map((item) => {
                        const labelId = `checkbox-list-label-${item}`;
                        return (
                            <ListItem
                                key={item}
                                disablePadding
                                className="ingredient-item"
                            >
                                <ListItemButton
                                    role={undefined}
                                    onClick={handleToggle(item)}
                                    dense
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.includes(
                                                item
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
                                        primary={item}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
            </List>
        </div>
    )
}

export default IngredientList