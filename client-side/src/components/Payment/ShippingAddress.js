import React, { useState } from "react";

function ShippingAddress() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    country: "vietnam",
    province: "",
    district: "",
    ward: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="shipping-address">
      <h2>Địa chỉ giao hàng</h2>
      <form>
        <label>Họ và tên người nhận:</label>
        <input
          type="text"
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Số điện thoại:</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <label>Quốc gia:</label>
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="vietnam">Việt Nam</option>
        </select>

        <label>Tỉnh/Thành phố:</label>
        <input
          type="text"
          name="province"
          value={form.province}
          onChange={handleChange}
        />

        <label>Quận/Huyện:</label>
        <input
          type="text"
          name="district"
          value={form.district}
          onChange={handleChange}
        />

        <label>Phường/Xã:</label>
        <input
          type="text"
          name="ward"
          value={form.ward}
          onChange={handleChange}
        />

        <label>Địa chỉ chi tiết:</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ShippingAddress;
