import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField,
} from '@mui/material';
import React, { useContext, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { AdminContext } from '../context/AdminProvider';



const AddProduct = () => {

    const { addProduct } = useContext(AdminContext)

    const [newProduct, setNewProduct] = useState({
        image: '',
        name: '',
        dispatch: '',
        prise: '',
        type:''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in newProduct) {
            if (!newProduct[key]) {
              alert("Заполните поля!!!");
              return;
            }
          }
        addProduct(newProduct)
        setNewProduct({
            image: '',
            name: '',
            dispatch: '',
            prise: '',
            type:'',
        })
    }

    return (
        <div className='add-edit-page'>
            <Container style={{backgroundColor:'white',marginTop:'50px',padding:'20px',borderRadius:'10px'}}>
                <form onSubmit={handleSubmit}>
                    <TextField value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} type="text" placeholder='Введите название продукта...' variant='standard' />
                    <TextareaAutosize minRows={3} value={newProduct.dispatch} onChange={(e) => setNewProduct({ ...newProduct, dispatch: e.target.value })} type="text" placeholder='Введите описание...' variant='standard' />
                    <TextField value={newProduct.prise} onChange={(e) => setNewProduct({ ...newProduct, prise: +e.target.value })} type="number" placeholder='Введите цену за кг...' variant='standard' />
                    <TextField value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} type="text" placeholder='Введите фото(url)' variant='standard' />
                    <FormControl fullWidth>
                        <InputLabel id="type-select">Тип</InputLabel>
                        <Select
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, type: e.target.value })
                            }
                            value={newProduct.type}
                            labelId="type-select"
                            label="Выберите тип"
                        >
                            <MenuItem value="Копченная">Копчёная</MenuItem>
                            <MenuItem value="Варённая">Варённая</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type='submit' variant='contained'>Добавить товар</Button>
                </form>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;