import { Container, Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import Coments from '../components/Coments';
import FiltersBlock from '../components/FiltersBlock';
import Footer from '../components/Footer';
import ProductCart from '../components/ProductCart'
import ProductsPagination from '../components/ProductsPagination';
import Slider from '../components/Slider';
import { ClientContext } from '../context/ClientProvider';

const HomePage = () => {

    const { getProducts, products } = useContext(ClientContext);
    useEffect(() => {
        getProducts();
    }, []);

    if (!products) {
        return <h2>Loading...</h2>;
    }


    return (
        <div>
            <Slider />
            <Container style={{ marginTop: '30px' }}>
                <FiltersBlock />
                <Grid container spacing={4}>
                    {products.map((item) => (
                        <Grid xs={12} sm={6} md={4} item key={item.id}>
                            <ProductCart item={item} />
                        </Grid>
                    ))}
                </Grid>
                <ProductsPagination />
                <Coments/>
            </Container>
            <Footer />
        </div>
    );
};

export default HomePage;