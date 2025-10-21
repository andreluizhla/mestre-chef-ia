import { CheckBox, CheckBoxOutlineBlank, Padding } from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const style = {
    borderBottom: '2px solid #BB712A',
    fontFamily: 'Itim, sans-serif',
    fontSize: '1.2rem',
    padding: '5px',
    textAline: 'center',
    justifyContent: 'center',
}

const CustomTable = ({ data }) => {
    return (
        <TableContainer sx={{ maxWidth: "80%" }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={style}>Nº</TableCell>
                        <TableCell align="left" sx={style}>Aluno</TableCell>
                        <TableCell align="center" sx={style}>Vai comer?</TableCell>
                        <TableCell align="center" sx={style}>Repetir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >   
                            <TableCell scope="row" sx={style}>
                                {row.id}
                            </TableCell>
                            <TableCell align="left" sx={style}>{row.name}</TableCell>
                            <TableCell align="center" sx={style}>
                                {row.willEat ? <CheckBox sx={{color:"var(--action)", fontSize:'2rem'}}/> : <CheckBoxOutlineBlank sx={{color:"var(--action)", fontSize:'2rem'}}/>}
                            </TableCell>
                            <TableCell align="center" sx={style}>
                                {row.repeat ? <CheckBox sx={{color:"var(--action)", fontSize:'2rem'}}/> : <CheckBoxOutlineBlank sx={{color:"var(--action)", fontSize:'2rem'}}/>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
