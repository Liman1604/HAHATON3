import { ShoppingCart } from "@mui/icons-material";
import { Button, Container, Input, TableBody, TableCell, TableRow, TextareaAutosize, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";


const Coments = () => {
    const {
        getDetail,
        detail,
        checkProductInCart,
        deleteProductFromCart,
        addProductToCart,
        addComent,
        getComments,
        coments,
    } = useContext(ClientContext);

    const [newComent, setNewComent] = useState({
        log: '',
        coment: '',
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        addComent(newComent)
        setNewComent({
            log: '',
            coment: '',
        })
    }

    React.useEffect(() => {
        getComments();
    }, []);
    if (!coments) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2 style={{ color: 'white' }}>Комментарии:</h2>
            <div style={{ marginTop: '20px', backgroundColor: "white", padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <TextField value={newComent.log} onChange={(e) => setNewComent({ ...newComent, log: e.target.value })} type="text" placeholder="Введите имя" />
                    <TextareaAutosize minRows={2} value={newComent.coment} onChange={(e) => setNewComent({ ...newComent, coment: e.target.value })} type="text" placeholder='Введите коментарий...' />
                    <div>
                    <Button type="submit" variant="contained">Оставть Комментарий</Button>
                    </div>
                </form>
                <div>
                    <TableBody>
                        {coments.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <strong>
                                        {item.log}:
                                    </strong>
                                </TableCell>
                                <TableCell>
                                    {item.coment}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </div>
            </div>
        </div>
    );
};

export default Coments;