import { Title } from '@mui/icons-material';
import { Container, List, ListItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer style={{marginTop:'50px'}} id="footer" class="footer-1">
            <div class="main-footer widgets-dark typo-light">
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="widget subscribe no-box">
                                <h5 class="widget-title">ХАЯТ<span></span></h5>
                                <p>🥩 Халал продукция высшего качества
                                    🥩 Официальная сертификация
                                    🥩 Исключительно натуральные ингредиенты
                                    🥩 Колбасы / сосиски</p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="widget no-box">
                                <h5 class="widget-title">Наши страници<span></span></h5>
                                <ul class="thumbnail-widget">
                                    <li>
                                        <div class="thumb-content"><a href="https://www.instagram.com/hayat_kolbasa_kg/">Instagram</a></div>
                                    </li>
                                    <li>
                                        <div class="thumb-content"><a href="https://www.facebook.com/profile.php?id=100054419292822">Facebook</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="widget no-box">
                                <h5 class="widget-title">Get Started<span></span></h5>
                                <p>Get access to your full Training and Marketing Suite.</p>
                                <a class="btn" href="#." target="_blank">Register Now</a>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">

                            <div class="widget no-box">
                                <h5 class="widget-title">Admin Panel<span></span></h5>

                                <p><Link to='add'>Add Product</Link></p>
                                <p><Link to='admin-product'>Admin Product</Link></p>
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="footer-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p>Авторское право ХАЯТ © 2022. Все права защищены.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;