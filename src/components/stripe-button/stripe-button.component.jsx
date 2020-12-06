import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HvPBpI4iKhn3SwHCqxtvWFodsV5MMFxwecQJZGvXZgKUnqSLKnb0V4ixR3PqlcLA7Oq7KrbqAnYd8CH5v0XiV9x00fRjpc6Kp";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };
  return (
    <StripeCheckout
      label="Pay now"
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
