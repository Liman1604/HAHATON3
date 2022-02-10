import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { toast } from 'react-toastify';
import { API } from '../helpers/const';

export const AdminContext = createContext()

const INIT_STATE = {
    products: null,
    productsToEdit: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
        case 'GET_PRODUCT_TO_EDIT':
            return { ...state, productsToEdit: action.payload }
        default:
            return state;
    }
};

const AdminProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const addProduct = async (newProduct) => {
        try {
            await axios.post(API, newProduct);
            toast.success('Успешно добавленно')

        } catch (error) {
            console.log(error);
            toast.error('Произошла ошибка! Попробуйте позже.')

        }
    };

    const getProduct = async () => {
        try {
            const response = await axios(API)
            let action = {
                type: 'GET_PRODUCTS',
                payload: response.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (id) => {
        let conf = window.confirm("You want to delette ?");
        try {
            if (conf) {
                await axios.delete(`${API}/${id}`);
                getProduct();
                toast.success('Успешно удолено!')

            } else {
                alert("ok we won't delete it ");
                return;
            }
        } catch (error) {
            console.log(error);
            toast.error('Ошибка! Попробуйте позже!')
        }
    };

    const ProductToEdit = async (id) => {
        try {
            const response = await axios(`${API}/${id}`);
            let action = {
                type: "GET_PRODUCT_TO_EDIT",
                payload: response.data,
            };
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    };

    const getProductsToEdit = async (id) => {
        try {
            const response = await axios(`${API}/${id}`)
            let action = {
                type: "GET_PRODUCT_TO_EDIT",
                payload: response.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }

    const saveEditedProduct = async (productEdit) => {
        try {
            await axios.patch(`${API}/${productEdit.id}`, productEdit);
            getProduct();
            toast.success('Изменения сохранены')

        } catch (error) {
            toast.error('Ошибка попробуйте позже')

            console.log(error);
        }
    };

    return (
        <AdminContext.Provider
            value={{
                addProduct,
                getProduct,
                deleteProduct,
                ProductToEdit,
                saveEditedProduct,
                getProductsToEdit,
                products: state.products,
                productsToEdit: state.productsToEdit,
            }}
        >
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;