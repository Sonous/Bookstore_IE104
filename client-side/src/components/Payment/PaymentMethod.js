import React, { useState } from "react";

function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="payment-method">
      <h2>Phương thức thanh toán</h2>
      <form>
        <input
          type="radio"
          name="payment"
          value="vnpay"
          checked={paymentMethod === "vnpay"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label>VNPay</label><br />

        <input
          type="radio"
          name="payment"
          value="shopeepay"
          checked={paymentMethod === "shopeepay"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label>Ví ShopeePay</label><br />

        <input
          type="radio"
          name="payment"
          value="momo"
          checked={paymentMethod === "momo"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label>Ví Momo</label><br />

        <input
          type="radio"
          name="payment"
          value="cod"
          checked={paymentMethod === "cod"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label>Thanh toán khi nhận hàng</label><br />

        <input
          type="radio"
          name="payment"
          value="atm"
          checked={paymentMethod === "atm"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label>ATM/Internet Banking</label><br />

        <input
          type="radio"
          name="payment"
          value="card"
          checked={paymentMethod === "card"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label>Visa/Master/JCB</label>
      </form>
    </div>
  );
}

export default PaymentMethod;
