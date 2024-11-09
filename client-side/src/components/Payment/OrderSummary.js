import React from "react";

function OrderSummary() {
  return (
    <div className="order-summary">
      <h2>Kiểm tra lại đơn hàng</h2>
      <div className="order-item">
        <p>Góc nhắc cổ năng <span>54.400 đ</span></p>
      </div>
      <div className="order-item">
        <p>Tập vẽ lá xo <span>54.400 đ</span></p>
      </div>
    </div>
  );
}

export default OrderSummary;
