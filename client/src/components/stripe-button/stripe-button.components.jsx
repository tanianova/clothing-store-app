import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KQZqxBMnZVy1Y8XpwK4tx0lqKj8Yf48uVrfP5pXNwXjX6cjyo8fBlJZq9bLwqjYeXegAjEGzdUzUkfbJaQdL50E00VmqrxbGZ";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment succesful");
      })
      .catch((error) => {
        console.log("payment error:", JSON.parse(error));
        alert(
          "There was the issue with your payment. Please make sure you used the provided cart"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
