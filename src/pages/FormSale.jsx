import { ShoppingCart } from '@mui/icons-material';
import { Badge, Button, Input } from '@mui/material';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClientContext } from '../context/ClientProvider';

const FormSale = () => {

  const { getCart, cart, deleteProductFromCart, cartCount, } = useContext(ClientContext)

  const [info, setInfo] = React.useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in info) {
      if (!info[key]) {
        alert("Заполните поля!!!");
        return;
      }
    }
    navigate('/')
  };

  React.useEffect(() => {
    getCart();
  }, []);
  if (!cart) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="FormBlock">
        <div className="firstBlock">
          <form>
            <h3>Платежный адрес</h3>
            <div>
              <strong>
                <p>
                  <img
                    width="30"
                    src="https://cdn-icons.flaticon.com/png/512/552/premium/552721.png?token=exp=1643178843~hmac=49d38d3ae62c267747289c97c100588c"
                    alt=""
                  />{" "}
                  ФИО:
                </p>
              </strong>
              <Input
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                value={info.name}
                required
                placeholder="Asanov Nurik"
                type="text"
              />
            </div>
            <div>
              <strong>
                <p>
                  <img
                    width="30"
                    src="https://cdn-icons.flaticon.com/png/512/542/premium/542689.png?token=exp=1643179102~hmac=735dd4d474160057b661bfa76683fa06"
                    alt=""
                  />{" "}
                  Email:
                </p>
              </strong>
              <Input
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                value={info.email}
                required
                placeholder="asanov.n@gmail.com"
                type="email"
              />
            </div>
            <div>
              {" "}
              <strong>
                <p>
                  {" "}
                  <img
                    width="30"
                    src="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
                    alt=""
                  />{" "}
                  Адрес:
                </p>
              </strong>
              <Input
                onChange={(e) => setInfo({ ...info, address: e.target.value })}
                value={info.address}
                required
                placeholder="Томская 44-29"
                type="text"
              />
            </div>
            <div>
              <strong>
                <p>
                  {" "}
                  <img
                    width="30"
                    src="https://cdn-icons.flaticon.com/png/512/2882/premium/2882328.png?token=exp=1643179258~hmac=ed4756cbaa3afb5e8dee1dd15a3cc3b6"
                    alt=""
                  />{" "}
                  Город:
                </p>
              </strong>
              <Input
                onChange={(e) => setInfo({ ...info, city: e.target.value })}
                value={info.city}
                required
                placeholder="Москва"
                type="text"
              />{" "}
            </div>
            {/* <Link to="/"> */}
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                 Оформить:
              </Button>
            {/* </Link> */}
          </form>
        </div>
        <div className="ProductPage">
          <div>
            <strong>
              <Link to="/cart">Корзина</Link>{" "}
            </strong>
            <Badge color="success" badgeContent={cartCount}>
              <ShoppingCart />
            </Badge>
          </div>

          {cart.products.map((item) => (
            <div key={item.product.id}>
              <p>
                {" "}
                Название: <strong>
                  {item.product.name}.
                </strong> <br /> Кол: <strong>{item.count}шт.</strong> <br />{" "}
                <span>
                  Итоговая цена: <strong>{item.subPrice} сом</strong>
                </span>{" "}
              </p>
              <Button
                type="submit"
                variant="contained"
                onClick={() => deleteProductFromCart(item.product.id)}
              >
                Убрать с корзины
              </Button>
            </div>
          ))}
          <p>
            <strong>Общая сумма: {cart.totalPrice} сом</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSale;