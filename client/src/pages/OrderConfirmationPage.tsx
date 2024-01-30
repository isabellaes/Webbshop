import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { CartItem } from "../types";

const OrderConfirmationPage = () => {
  const order = useSelector((state: RootState) => state.order);
  console.log(order);
  function calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
  const totalCost = calculateTotal(order.cartItems);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit">
          Order
        </Link>
      </Breadcrumbs>
      <div className="container-checkout">
        <h1>Thank you for your order!</h1>
        <p>Products</p>
        <ul>
          {order.cartItems.map((item) => (
            <li key={item.product.id}>
              {item.product.name} - ${item.product.price.toFixed(2)} - Quantity:{" "}
              {item.quantity}
            </li>
          ))}
          <p>Total: ${totalCost.toFixed(2)}</p>
        </ul>
        <p>Shipping and payment</p>
        <p>{order.firstName}</p>
        <p>{order.lastName}</p>
        <p>{order.adress}</p>
        <p>{order.city}</p>
        <p>{order.zipCode}</p>
        <p>{order.phoneNumber}</p>
        <p>{order.email}</p>
        <p>{order.date.toLocaleDateString()}</p>
        <p>
          You will recieve your order in 1-3 days. <br />
          Welcome back!
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
