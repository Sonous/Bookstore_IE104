import React, { useState } from "react";
import './ShippingAddress.module.css';

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
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="shipping-address">
      <h2>Địa chỉ giao hàng</h2>
      <form>
        <div>
          <label htmlFor="fullname">Họ và tên người nhận:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Số điện thoại:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="country">Quốc gia:</label>
          <select
            id="country"
            name="country"
            value={form.country}
            onChange={handleChange}
          >
            <option value="vietnam">Việt Nam</option>
          </select>
        </div>

        <div>
          <label htmlFor="province">Tỉnh/Thành phố:</label>
          <input
            type="text"
            id="province"
            name="province"
            value={form.province}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="district">Quận/Huyện:</label>
          <input
            type="text"
            id="district"
            name="district"
            value={form.district}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="ward">Phường/Xã:</label>
          <input
            type="text"
            id="ward"
            name="ward"
            value={form.ward}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address">Địa chỉ chi tiết:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default ShippingAddress;
