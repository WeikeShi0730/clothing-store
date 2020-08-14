import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = (props) => {
  const { price } = props;
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HFrc0KSQN4yZMGTtZpFyVDpTIOxzjrAlEzIGovpkc46lCyparDkhnttiDyCtfG1XIcW4sR9u2A8cRhzIv5vffdP009G5gKKjU";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="F1 Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your totla is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
