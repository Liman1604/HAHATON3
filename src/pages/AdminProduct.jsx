import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdminContext } from '../context/AdminProvider';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import AdminFilter from '../components/AdminFilter';
import { ClientContext } from '../context/ClientProvider';
import { ToastContainer } from 'react-toastify';
import ProductsPagination from '../components/ProductsPagination';


export default function BasicTable() {

  const { deleteProduct, ProductToEdit, } = React.useContext(AdminContext)


  const { getProducts, products } = React.useContext(ClientContext);
  React.useEffect(() => {
    getProducts();
  }, []);
  const deleteProducts = (id) => {
    deleteProduct(id)
    getProducts()
  }
  if (!products) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container>
      <AdminFilter />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> <strong>Название</strong> </TableCell>
              <TableCell align="right"> <strong>Описание</strong> </TableCell>
              <TableCell align="right"> <strong>Тип</strong> </TableCell>
              <TableCell align="right"> <strong>Цена за (кг)</strong> </TableCell>
              <TableCell align="right"> <strong>Фотография</strong> </TableCell>
              <TableCell align="right"> <strong>Удалить</strong> </TableCell>
              <TableCell align="right"> <strong>Изменить</strong> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.dispatch}</TableCell>
                <TableCell align="right">{item.type}</TableCell>
                <TableCell align="right">{item.prise}</TableCell>
                <TableCell align="right"><img width={100} src={item.image} alt="product image" /></TableCell>
                <TableCell align="right"><Button onClick={() => deleteProducts(item.id)}><img width={30} src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1643959225~hmac=2f9d00f2cca00cc958a8dc7509c6518a" alt="" /></Button></TableCell>
                <TableCell align="right">
                  <Link to='/edit'>
                    <Button onClick={() => ProductToEdit(item.id)} ><img width={30} src="https://cdn-icons.flaticon.com/png/512/3686/premium/3686809.png?token=exp=1643959301~hmac=86875fdfdb01dd88aa2fd90e6456481e" alt="" /></Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ProductsPagination />
      <ToastContainer />

    </Container>

  );
}
