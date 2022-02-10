import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { ClientContext } from '../context/ClientProvider';
import { Link } from 'react-router-dom';

export default function ProductCart(props) {
    const { addProductToCart, checkProductInCart, deleteProductFromCart, addProductToBest, deleteProductFromBest, checkProductInBest } =
        React.useContext(ClientContext);
    return (

        <Card key={props.item.id} sx={{ maxWidth: 345, }}>
            <CardActionArea>

                <CardMedia
                    component="img"
                    height="200"
                    image={props.item.image}
                    alt="green iguana"
                    style={{ objectFit: "contain", paddingTop: '10px' }}
                />
                <CardContent style={{ padding: '30px' }}>
                    <Typography gutterBottom variant="h5" component="div" style={{ height: 30, overflow: "hidden" }}
                    >
                        {props.item.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <strong>{props.item.prise} сом/кг</strong>
                    </Typography>
                    <CardActions style={{ marginTop: '20px', padding: '0' }}>
                        {checkProductInCart(props.item.id) ? (
                            <Button
                                onClick={() => deleteProductFromCart(props.item.id)}
                                size="small"
                                variant="contained"
                                color="warning"
                            >
                                <img width="30px" src="https://cdn-icons-png.flaticon.com/512/1008/1008010.png" alt="" />
                            </Button>
                        ) : (
                            <Button
                                onClick={() => addProductToCart(props.item)}
                                size="small"
                                variant="contained"
                            >
                                <img width="30px" src="https://cdn-icons.flaticon.com/png/512/2662/premium/2662503.png?token=exp=1644418305~hmac=6b331ac7f090389f078e5b2275817d73" alt="" />

                            </Button>
                        )}
                        <Link to={`/product-detail/${props.item.id}`}>
                            <Button style={{ marginLeft: '10px' }} size="small" color="primary" variant="contained">
                                Подробнее
                            </Button>
                        </Link>

                        {checkProductInBest(props.item.id) ? (
                            <Button
                                onClick={() => deleteProductFromBest(props.item.id)}
                                size="small"
                                variant="contained"
                                color="warning"
                            >
                                <img width="30px" src="https://cdn-icons.flaticon.com/png/512/4208/premium/4208408.png?token=exp=1644432302~hmac=91aac127ee782b9a190415e9aad16fb0" alt="" />
                            </Button>
                        ) : (
                            <Button
                                onClick={() => addProductToBest(props.item)}
                                size="small"
                                variant="contained"
                            >
                                <img width="30px" src="https://cdn-icons.flaticon.com/png/512/4208/premium/4208394.png?token=exp=1644432298~hmac=33c87eae97d25977599436d45f217537" alt="" />

                            </Button>
                        )}

                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>

    );
}
