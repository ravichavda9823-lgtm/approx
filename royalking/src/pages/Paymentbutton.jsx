import React from "react";
import api from "../../../../royalking/src/utils/AxiosConfig";

const PaymentButton = () => {
  const handelPayment = async () => {
    try {
      const response = await api.post("/payment/createorder", {
        amout: 500,
      });

      const { id: order_id, amout } = response.data;

      const options = {
        key: "",
        amout: amout,
        name: "App Name",
        desc: "Test Transaction",
        order_id: order_id,
        handler: (response) => {
          alert(
            `Payment Successful! Payment ID: ${response.razorpay_payment_id}`,
          );
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (e) {
      console.log(e);
    }
  };
};

export default PaymentButton;
