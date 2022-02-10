import { Button, Container, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminContext } from '../context/AdminProvider';

const EditModal = () => {
    const params = useParams();
    const {getProductsToEdit,productsToEdit, saveEditedProduct} = useContext(AdminContext)
    const [productEdit, setProductEdit] = useState(productsToEdit);
    const navigate = useNavigate();
    useEffect(()=>{
        setProductEdit(productsToEdit)
    },[productsToEdit])
    useEffect(()=>{
        getProductsToEdit(params.id)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        //! proverka na pustotu
        for (const key in productEdit) {
          if (!productEdit[key]) {
            alert("Заполните поля!!!");
            return;
          }
        }
        saveEditedProduct(productEdit);
        navigate("/admin-product");
      };

    if (!productEdit) {
        return <h2>Loading...</h2>;
      }
    return (
        <Container className='add-edit-page'>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={(e) =>
              setProductEdit({ ...productEdit, name: e.target.value })} value={productEdit.name} type="text" placeholder='Введите название продукта...' variant='standard' />
                    <TextField onChange={(e) =>
              setProductEdit({ ...productEdit, dispatch: e.target.value })}  value={productEdit.dispatch}  type="text" placeholder='Введите описание...' variant='standard' />
                    <TextField onChange={(e) =>
              setProductEdit({ ...productEdit, prise: e.target.value })} value={productEdit.prise} value={productEdit.prise} type="number" placeholder='Введите цену за кг...' variant='standard' />                    
                    <TextField onChange={(e) =>
              setProductEdit({ ...productEdit, image: e.target.value })} value={productEdit.image} value={productEdit.image}  type="text" placeholder='Введите фото(url)' variant='standard' />
                    <Button type='submit' variant='contained'>Сохранить изменения</Button>
                </form>
            </Container>
    );
};

export default EditModal;