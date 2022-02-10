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
const CartTable = () => {
    const { getCart, cart, changeCount, deleteProductFromCart } = React.useContext(ClientContext);
    React.useEffect(() => {
        getCart();
    }, []);
    if (!cart) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="right">Фото</TableCell>
                            <TableCell align="right">Цена</TableCell>
                            <TableCell align="right">Кол-во</TableCell>
                            <TableCell align="right">Сумма</TableCell>
                            <TableCell align="right">Удолить</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.products.map((item) => (
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
                                <TableCell align="right">
                                    <input
                                        min={1}
                                        type="number"
                                        onChange={(e) => {
                                            if (e.target.value < 1) {
                                                return;
                                            }
                                            changeCount(e.target.value, item.product.id);
                                        }}
                                        value={item.count}
                                    />
                                </TableCell>
                                <TableCell align="right">{item.subPrice} сом</TableCell>
                                <TableCell align="right">
                                    <Button
                                        startIcon={<Delete />}
                                        type="submit"
                                        variant="contained"
                                        onClick={() => deleteProductFromCart(item.product.id)}
                                    ></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4} align="right">
                                <strong style={{ fontSize: 22 }}>Примерная сумма:</strong>
                            </TableCell>
                            <TableCell colSpan={1} align="right">
                                <strong style={{ fontSize: 22 }}>{cart.totalPrice} сом</strong>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <div className="order-button">
                <Link to="/form-sale">
                    <Button variant="contained">Оформить заказ</Button>
                </Link>
            </div>
        </>
    );
};

export default CartTable;