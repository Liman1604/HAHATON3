import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import { API, API_COM } from '../helpers/const';

export const ClientContext = React.createContext();

const INIT_STATE = {
    products: null,
    cartCount: JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart")).products.length
        : 0,
    bestCount: JSON.parse(localStorage.getItem("best"))
        ? JSON.parse(localStorage.getItem("best")).products.length
        : 0,
    cart: null,
    detail: null,
    coments: null,
    best: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_BEST":
            return { ...state, bestCount: action.payload };
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
        case "GET_COMENTS":
            return { ...state, coments: action.payload };
        case "ADD_PRODUCT_TO_CART":
            return { ...state, cartCount: action.payload };
        case "DELETE_PRODUCT_FORM_CART":
            return { ...state, cartCount: action.payload };
        case "DELETE_PRODUCT_FORM_BEST":
            return { ...state, bestCount: action.payload };
        case "GET_CART":
            return { ...state, cart: action.payload };
        case "GET_BEST":
            return { ...state, best: action.payload };
        case "GET_DETAIL":
            return { ...state, detail: action.payload }
        default:
            return state;
    }
};




const ClientProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getProducts = async () => {
        try {
            const response = await axios(`${API}/${window.location.search}`);
            let action = {
                type: "GET_PRODUCTS",
                payload: response.data,
            };
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    };


    const productsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (state.products) {
            setPosts(state.products);
        }
    }, [state.products]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalProductsCount = posts.length;

    const getDetail = async (id) => {
        try {
            const response = await axios(`${API}/${id}`)
            let action = {
                type: "GET_DETAIL",
                payload: response.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }

    const addProductToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let productCart = {
            product,
            count: 1,
            subPrice: product.prise,
        };
        cart.products.push(productCart);
        cart.totalPrice = cart.products.reduce((prev, item) => {
            return prev + item.subPrice;
        }, 0);
        localStorage.setItem("cart", JSON.stringify(cart));
        let action = {
            type: "ADD_PRODUCT_TO_CART",
            payload: cart.products.length,
        };
        dispatch(action);
    };

    const addProductToBest = (product) => {
        let best = JSON.parse(localStorage.getItem("best"));
        if (!best) {
            best = {
                products: [],
                totalPrice: 0,
            };
        }
        let productbest = {
            product,
            count: 1,
            subPrice: product.prise,
        };
        best.products.push(productbest);
        best.totalPrice = best.products.reduce((prev, item) => {
            return prev + item.subPrice;
        }, 0);
        localStorage.setItem("best", JSON.stringify(best));
        let action = {
            type: "ADD_PRODUCT_TO_BEST",
            payload: best.products.length,
        };
        dispatch(action);
    };

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let action = {
            type: "GET_CART",
            payload: cart,
        };
        dispatch(action);
    };

    const getBest = () => {
        let best = JSON.parse(localStorage.getItem("best"));
        if (!best) {
            best = {
                products: [],
                totalPrice: 0,
            };
        }
        let action = {
            type: "GET_BEST",
            payload: best,
        };
        dispatch(action);
    };

    const checkProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
            };
        }
        let check = cart.products.find((item) => {
            return item.product.id === id;
        });
        if (!check) {
            return false;
        } else {
            return true;
        }
    };

    const checkProductInBest = (id) => {
        let best = JSON.parse(localStorage.getItem("best"));
        if (!best) {
            best = {
                products: [],
            };
        }
        let check = best.products.find((item) => {
            return item.product.id === id;
        });
        if (!check) {
            return false;
        } else {
            return true;
        }
    };

    const changeCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.product = cart.products.map((item) => {
            if (item.product.id === id) {
                item.count = count;
                item.subPrice = item.count * item.product.prise;
                return item;
            } else {
                return item;
            }
        });
        cart.totalPrice = cart.products.reduce((prev, item) => {
            return prev + item.subPrice;
        }, 0);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    };

    const deleteProductFromCart = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.products = cart.products.filter((item) => {
            return item.product.id !== id;
        });
        cart.totalPrice = cart.products.reduce((prev, item) => {
            return prev + item.subPrice;
        }, 0);
        localStorage.setItem("cart", JSON.stringify(cart));
        let action = {
            type: "DELETE_PRODUCT_FORM_CART",
            payload: cart.products.length,
        };
        dispatch(action);
        getCart();
    };

    const deleteProductFromBest = (id) => {
        let best = JSON.parse(localStorage.getItem("best"));
        best.products = best.products.filter((item) => {
            return item.product.id !== id;
        });
        best.totalPrice = best.products.reduce((prev, item) => {
            return prev + item.subPrice;
        }, 0);
        localStorage.setItem("best", JSON.stringify(best));
        let action = {
            type: "DELETE_PRODUCT_FORM_BEST",
            payload: best.products.length,
        };
        dispatch(action);
        getBest();
    };

    const addComent = async (newComent) => {
        try {
            await axios.post(API_COM, newComent);
            toast.success('Успешно добавленно')

        } catch (error) {
            console.log(error);
            toast.error('Произошла ошибка! Попробуйте позже.')

        }
        getComments()
    };

    const getComments = async () => {
        try {
            const response = await axios(API_COM)
            let action = {
                type: 'GET_COMENTS',
                payload: response.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }

    const getProductsToBot = (info, cart) => {
        axios.get(
            "https://api.telegram.org/bot5117422389:AAEI1fKR8-na7Ak4W5gAY8EXwssHIWe6LX0/sendMessage",
            {
                params: {
                    parse_mode: "HTML",
                    text: ` Заказы 
              Ф.И.О. ${info.name}
              Почта: ${info.email}
              Адрес: ${info.address}
              Город: ${info.city}
              ${cart.products.reduce(
                        (item, cur) =>
                            item +
                            `category: ${cur.product.category}, price:${cur.product.price},id:${cur.product.id}\n`,
                        ""
                    )}\ntotalPrice: ${cart.totalPrice}`,

                    chat_id: "1054740335",
                },
            }
        );
    };

    return (
        <ClientContext.Provider
            value={{
                deleteProductFromBest,
                getBest,
                addProductToBest,
                getProductsToBot,
                getComments,
                addComent,
                getCart,
                deleteProductFromCart,
                checkProductInCart,
                checkProductInBest,
                addProductToCart,
                getProducts,
                setCurrentPage,
                changeCount,
                getDetail,
                totalProductsCount,
                productsPerPage,
                currentPage,
                cart: state.cart,
                best: state.best,
                coments: state.coments,
                products: state.products,
                products: currentProducts,
                cartCount: state.cartCount,
                bestCount: state.bestCount,
                detail: state.detail,
                products: currentProducts,
            }}
        >
            {props.children}
        </ClientContext.Provider>
    );
};

export default ClientProvider;