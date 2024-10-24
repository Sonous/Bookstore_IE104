import React, { useState } from "react";

function PromoCode() {
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="promo-code">
      <h2>Mã khuyến mãi/Mã quà tặng</h2>
      <input
        type="text"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        placeholder="Nhập mã khuyến mãi"
      />
      <button onClick={() => alert("Áp dụng mã: " + promoCode)}>
        Chọn mã khuyến mãi
      </button>
    </div>
  );
}

export default PromoCode;
