import './App.css';
import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Cầu Vồng Trong Nhà', price: 20500, image: '/cầu vồng trong nhà.jpg', country: 'Việt Nam', coverType: 'hardcover' },
  { id: 2, name: 'Bí Mật Của Trăng', price: 17000, image: '/bimatcuatrang.jpg', country: 'Mỹ', coverType: 'paperback' },
  { id: 3, name: 'Bánh Mì Kẹp Chuột', price: 25000, image: '/banhmikepchuot.jpg', country: 'Việt Nam', coverType: 'hardcover' },
  { id: 4, name: 'Bố xấu, bố tốt', price: 50000, image: '/boxaubotot.jpg', country: 'Trung Quốc', coverType: 'paperback' },
  { id: 5, name: 'Úm ba la biến ra nhà sạch', price: 50000, image: '/nhasach.jpg', country: 'Khác', coverType: 'hardcover' },
  { id: 6, name: 'Úm ba la ánh sáng hiện ra', price: 50000, image: '/anhsang.jpg', country: 'Việt Nam', coverType: 'paperback' },
  { id: 7, name: 'Gấu Hoggs dũng cảm', price: 21500, image: '/gauhogg.jpg', country: 'Mỹ', coverType: 'hardcover' },
  { id: 8, name: 'Chơi vui cùng bè bạn', price: 20500, image: '/choivui.jpg', country: 'Trung Quốc', coverType: 'paperback' },
  { id: 9, name: 'Hà mã lên Mặt Trăng', price: 22000, image: '/hama.jpg', country: 'Khác', coverType: 'hardcover' },
  { id: 10, name: 'Công chúa nhỏ', price: 60500, image: '/congchuanho.jpg', country: 'Việt Nam', coverType: 'paperback' },
  { id: 11, name: 'Gấu trúc mứt cam', price: 70000, image: '/gautruc.webp', country: 'Việt Nam', coverType: 'hardcover' },
  { id: 12, name: 'Cậu voi phiền phức', price: 100000, image: '/cauvoi.webp', country: 'Việt Nam', coverType: 'hardcover' },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [priceThreshold, setPriceThreshold] = useState(0);
  const [sliderColor, setSliderColor] = useState('lightgray');
  const [selectedCountries, setSelectedCountries] = useState({
    'Việt Nam': false,
    'Mỹ': false,
    'Trung Quốc': false,
    'Khác': false,
  });
  const [selectedCoverType, setSelectedCoverType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Số sản phẩm trên mỗi trang

  const navigate = (index) => {
    console.log(`Navigating to ${index}`);
  };

  const handleCountryChange = (country) => {
    setSelectedCountries((prev) => ({
      ...prev,
      [country]: !prev[country],
    }));
  };

  const handleCoverTypeChange = (type) => {
    setSelectedCoverType(type);
  };

  const handlePriceChange = (event) => {
    const value = Number(event.target.value);
    setPriceThreshold(value);
    setSliderColor(value === 0 ? 'lightgray' : '#228B22');
  };

  const clearCountrySelection = () => {
    setSelectedCountries({
      'Việt Nam': false,
      'Mỹ': false,
      'Trung Quốc': false,
      'Khác': false,
    });
  };

  const clearPriceSelection = () => {
    setPriceThreshold(0);
    setSliderColor('lightgray');
  };

  const filteredProducts = products
    .filter(product => product.price >= priceThreshold)
    .filter(product => {
      const countrySelected = Object.keys(selectedCountries).some(country => selectedCountries[country]);
      return countrySelected ? selectedCountries[product.country] : true;
    })
    .filter(product => selectedCoverType === 'all' || product.coverType === selectedCoverType);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="page3">
      <aside>
        <div className="nav3-1">
          <span>Sắp xếp theo</span>
          <div className="sorting-bar">
            <button onClick={() => setProducts(initialProducts)}>Mặc định</button>
            <button onClick={() => setProducts([...products].sort((a, b) => a.price - b.price))}>Giá thấp - cao</button>
            <button onClick={() => setProducts([...products].sort((a, b) => b.price - a.price))}>Giá cao - thấp</button>
          </div>
        </div>
      </aside>
      <div className="product-page3">
        <div className="firstpart3">
          <nav className="nav3-2">
            <ol>
              <li><a href="#" onClick={() => navigate(0)}>Trang chủ</a></li>
              <li><a href="#" onClick={() => navigate(1)}>Truyện thiếu nhi</a></li>
            </ol>
          </nav>
          <hr className="divider" />
          <div className="country-filter">
            <span>Quốc Gia</span>
            <button onClick={clearCountrySelection}>Xóa</button>
            <div>
              {Object.keys(selectedCountries).map(country => (
                <label key={country}>
                  <input
                    type="checkbox"
                    checked={selectedCountries[country]}
                    onChange={() => handleCountryChange(country)}
                  />
                  {country}
                </label>
              ))}
            </div>
          </div>
          <hr className="divider" />
          <div className="country-filter">
            <span>Hình thức bìa</span>
            <div>
              <label>
                <input
                  type="radio"
                  name="coverType"
                  checked={selectedCoverType === 'all'}
                  onChange={() => handleCoverTypeChange('all')}
                />
                Tất cả
              </label>
              <label>
                <input
                  type="radio"
                  name="coverType"
                  checked={selectedCoverType === 'hardcover'}
                  onChange={() => handleCoverTypeChange('hardcover')}
                />
                Bìa cứng
              </label>
              <label>
                <input
                  type="radio"
                  name="coverType"
                  checked={selectedCoverType === 'paperback'}
                  onChange={() => handleCoverTypeChange('paperback')}
                />
                Bìa mềm
              </label>
            </div>
          </div>
          <hr className="divider" />
          <div className="country-filter">
            <span className="font-bold">Mức giá</span>
            <button className="reset-button" onClick={clearPriceSelection}>Xóa</button>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max={500000}
                value={priceThreshold}
                onChange={handlePriceChange}
                className="slider"
                style={{
                  background: `linear-gradient(to right, ${sliderColor} ${priceThreshold / 500000 * 100}%, lightgray ${priceThreshold / 500000 * 100}%)`
                }}
              />
              <div className="slider-labels">
                <span className="min-label">0</span>
                <span className="value-display">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceThreshold)}
                </span>
              </div>
            </div>
          </div>
          <hr className="divider1" />
        </div>
        <div className="secondpart3">
          <div className="book-row">
            {currentProducts.map((product) => (
              <div key={product.id} className="book-item">
                <img src={product.image} alt={product.name} className="book-image" />
                <span className="book-title">{product.name}</span>
                <span className="book-price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </span>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
