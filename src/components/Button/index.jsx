import Button from "@mui/material/Button";

const CustomButton = ({icon, text, action}) => {
    return (
        <Button
            onClick={action}
            sx={{
                backgroundColor: "var(--action)",
                color: "white",
                borderRadius: "var(--border-radius)",
                marginTop: "20px",
            }}
            startIcon={icon}
        >
            {text}
        </Button>
    )
}

export default CustomButton;