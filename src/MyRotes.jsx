import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navibar';
import HomePage from './pages/HomePage';
import AddProduct from './components/AddProduct'
import AdminProduct from './pages/AdminProduct';
import AdminProvider from './context/AdminProvider';
import EditModal from './components/EditModal';
import AuthProvider from './context/AuthProvider';
import ClientProvider from './context/ClientProvider';
import DetailProduct from './components/DetailProduct';
import CartPage from './pages/CartPage';
import FormSale from './pages/FormSale';
import Izbrannoe from "./pages/Izpbannoe";
import Login from './components/Login';
import SignUp from './components/SignUp';

const MyRoutes = () => {
    return (
        <AuthProvider>
            <ClientProvider>
                <AdminProvider>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/add' element={<AddProduct />} />
                            <Route path='/admin-product' element={<AdminProduct />} />
                            <Route path='/edit' element={<EditModal />} />
                            <Route path='/product-detail/:id' element={<DetailProduct/>}/>
                            <Route path='/cart' element={<CartPage/>}/>
                            <Route path='/form-sale' element={<FormSale/>}/>
                            <Route path='/best' element={<Izbrannoe/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/sign-up' element={<SignUp/>}/>
                        </Routes>
                    </BrowserRouter>
                </AdminProvider>
            </ClientProvider>
        </AuthProvider>
    );
};

export default MyRoutes;