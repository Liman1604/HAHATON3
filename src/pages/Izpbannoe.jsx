import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ClientContext } from "../context/ClientProvider";
import { TableFooter, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Izpbannoe = () => {
    const { getBest, best, changeBest, deleteProductFromBest } = React.useContext(ClientContext);
    React.useEffect(() => {
        getBest();
    }, []);
    if (!best) {
        return <h2 style={{color:'white'}}>Loading...</h2>;
    }
    console.log(best);
    return (
        <>
        <h2 style={{color:'white',textAlign:'center'}}>Избранное:</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="right">Фото</TableCell>
                            <TableCell align="right">Цена</TableCell>
                            <TableCell align="right">Сумма</TableCell>
                            <TableCell align="right">Удолить</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {best.products.map((item) => (
                            <TableRow
                                key={item.product.id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.product.name}
                                </TableCell>
                                <TableCell align="right">
                                    <img src={item.product.image} alt="cart-img" width={100} />
                                </TableCell>
                                <TableCell align="right">{item.product.prise} сом</TableCell>
                                <TableCell align="right">{item.subPrice} сом</TableCell>
                                <TableCell align="right">
                                    <Button
                                        startIcon={<Delete />}
                                        type="submit"
                                        variant="contained"
                                        onClick={() => deleteProductFromBest(item.product.id)}
                                    ></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Izpbannoe;