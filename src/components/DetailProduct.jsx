import { ShoppingCart } from "@mui/icons-material";
import { Button, Container, Input, TableBody, TableCell, TableRow, TextareaAutosize, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";

const DetailProduct = () => {
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
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        getDetail(params.id);
    }, []);

    if (!detail) {
        return <h2>Loadingg...</h2>;
    }
    console.log(coments)
    return (
        <div>
            <Container>

                <div className="detail-page">
                    <div className="detail-left">
                        <img src={detail.image} alt="detail-img" />
                    </div>
                    <div className="detail-right">
                        <ul>
                            <h3>{detail.name}:</h3>
                            <li>
                                Цена: <strong>{detail.prise} сом/кг.</strong>
                            </li>
                            <li>
                                Описание: <strong>{detail.dispatch}</strong>
                            </li>
                            {checkProductInCart(detail.id) ? (
                                <Button
                                    color="warning"
                                    variant="contained"
                                    // sx={{ opacity: 1 }}
                                    onClick={() => deleteProductFromCart(detail.id)}
                                >
                                    <img width="30px" src="https://cdn-icons-png.flaticon.com/512/1008/1008010.png" alt="" />
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={() => addProductToCart(detail)}
                                >
                                    <img width="30px" src="https://cdn-icons.flaticon.com/png/512/2662/premium/2662503.png?token=exp=1644418305~hmac=6b331ac7f090389f078e5b2275817d73" alt="" />

                                </Button>
                            )}
                            <Button style={{ marginLeft: '10px' }} onClick={() => navigate(-1)} variant="contained">
                                Hазад
                            </Button>
                        </ul>
                    </div>
                </div>
              
            </Container>
        </div>
    );
};

export default DetailProduct;