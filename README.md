# Bookstore Website - IE104

<p align="center">
  <a href="https://www.uit.edu.vn/" title="Trường Đại học Công nghệ Thông tin" style="border: none;">
    <img src="https://i.imgur.com/WmMnSRt.png" alt="Trường Đại học Công nghệ Thông tin | University of Information Technology">
  </a>
</p>

<h1 align="center"><b>INTERNET VÀ CÔNG NGHỆ WEB - IE104</b></h1>

## 📚 GIỚI THIỆU MÔN HỌC

- **Tên môn học:** Internet và công nghệ web
- **Mã môn học:** IE104
- **Mã lớp:** IE104.P11
- **Năm học:** HK1 (2024 - 2025)

## LIÊN KẾT & TÀI NGUYÊN

- **Github Repository:** [Bookstore_IE104](https://github.com/Sonous/Bookstore_IE104)
- **Figma Design:** [Thiết kế giao diện website bán sách](https://www.figma.com/design/MXLgDDLxqJKobmXGYxmRoy/Thi%E1%BA%BFt-k%E1%BA%BF-giao-di%E1%BB%87n-website-b%C3%A1n-s%C3%A1ch?node-id=0-1&t=SloHttcu6hYrRaej-1)
- **Video báo cáo:** [Playlist trên YouTube](https://www.youtube.com/playlist?list=PLE2z-be-Kr9ZHImhfiE_vN02TYEQpRq8z)

## GIỚI THIỆU ĐỒ ÁN

**BookStar** là một nền tảng thương mại điện tử chuyên về bán sách trực tuyến, cung cấp trải nghiệm mua sắm thuận tiện và đa dạng cho người yêu sách.

### ✨ Tính năng chính

#### 🔐 Người dùng

- **Xác thực & Phân quyền:**
  - Đăng ký, đăng nhập, quên mật khẩu
  - Quản lý thông tin cá nhân và địa chỉ giao hàng
  - Thay đổi mật khẩu
- **Quản lý sản phẩm:**

  - Tìm kiếm sách theo tên, tác giả, thể loại
  - Xem chi tiết sách (mô tả, giá, đánh giá, bình luận)
  - Lọc sách theo danh mục, thể loại, khoảng giá
  - Xem sách mới, sách bán chạy, sách theo bộ sưu tập

- **Giỏ hàng & Thanh toán:**

  - Thêm/xóa/cập nhật số lượng sách trong giỏ hàng
  - Chọn phương thức vận chuyển và thanh toán
  - Xác nhận đơn hàng với thông tin giao hàng chi tiết

- **Quản lý đơn hàng:**

  - Xem lịch sử đơn hàng và trạng thái giao hàng
  - Theo dõi tiến trình đơn hàng (Đang xác nhận → Đang xử lý → Đang giao → Hoàn tất)
  - Hủy đơn hàng, mua lại đơn hàng đã hoàn tất
  - Xem chi tiết từng đơn hàng

- **Tương tác & Đánh giá:**
  - Đánh giá và bình luận sách đã mua
  - Thêm sách vào danh sách yêu thích
  - Đọc bài viết blog về sách, sự kiện, tin tức

## 🏗️ KIẾN TRÚC HỆ THỐNG

### 📁 Cấu trúc thư mục

```
Bookstore-website-IE104/
├── client-side/          # Frontend React application
│   ├── public/          # Static files
│   ├── src/
│   │   ├── apis/        # API service layer
│   │   ├── assets/      # Images, icons, fonts
│   │   ├── components/  # Reusable components
│   │   ├── configs/     # Configuration files
│   │   ├── context/     # React Context (UserContext)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── layouts/     # Layout components (Header, Footer)
│   │   ├── pages/       # Page components
│   │   ├── routes/      # Route configuration
│   │   └── utils/       # Utility functions
│   └── package.json
│
└── server-side/         # Backend Node.js application
    ├── src/
    │   ├── config/      # Database configuration
    │   ├── controllers/ # Request handlers
    │   ├── middleware/  # Authentication, file upload
    │   ├── models/      # Sequelize models
    │   └── routes/      # API routes
    ├── .env             # Environment variables
    └── package.json
```

### 🔧 Công nghệ sử dụng

#### Frontend

- **React.js** - UI framework
- **React Router** - Navigation
- **Ant Design** - UI components
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **SweetAlert2** - Alert dialogs
- **FontAwesome** - Icons

#### Backend

- **Node.js** & **Express.js** - Server framework
- **Sequelize ORM** - Database management
- **MySQL** - Database
- **JWT** - Authentication
- **Multer** - File upload
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service

## 🚀 HƯỚNG DẪN CÀI ĐẶT

### Yêu cầu hệ thống

- Node.js >= 14.x
- MySQL >= 8.0
- npm

### Cài đặt Backend

```bash
# Di chuyển vào thư mục server
cd server-side

# Cài đặt dependencies
npm install

# Tạo file .env và cấu hình
# (Xem phần cấu hình bên dưới)

# Import database
mysql -u root -p < ql_ban_sach_db_create.sql

# Chạy server
npm start
```

**Cấu hình file `.env`:**

```env
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ql_ban_sach_db
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### Cài đặt Frontend

```bash
# Di chuyển vào thư mục client
cd client-side

# Cài đặt dependencies
npm install

# Chạy development server
npm start
```

Application sẽ chạy tại:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`

## 📱 CHỨC NĂNG CHI TIẾT

### 🏠 Trang chủ

- Hiển thị banner slider quảng cáo
- Danh sách sách theo các bộ sưu tập: Sách mới, Sách bán chạy, Manga-Comic, Tâm lí - Kĩ năng sống, Văn học
- Hiển thị bài viết blog nổi bật

### 📚 Trang chi tiết sách

- Thông tin chi tiết: tác giả, hình thức, số trang, thể loại, bộ sưu tập
- Hiển thị giá, % giảm giá, đánh giá sao
- Chức năng: thêm vào giỏ hàng, mua ngay, thêm vào yêu thích
- Xem và gửi bình luận, đánh giá
- Sách gợi ý liên quan

### 🛒 Giỏ hàng

- Danh sách sách trong giỏ hàng với checkbox
- Cập nhật số lượng, xóa sản phẩm
- Chọn phương thức vận chuyển
- Tính tổng tiền tự động (bao gồm VAT và phí ship)
- Nút thanh toán

### 💳 Thanh toán

- Nhập/chọn địa chỉ giao hàng (tỉnh/thành phố, quận/huyện, phường/xã)
- Chọn phương thức thanh toán
- Thêm ghi chú cho đơn hàng
- Xem tóm tắt đơn hàng
- Xác nhận đặt hàng

### 📦 Quản lý đơn hàng

- Xem danh sách đơn hàng theo trạng thái
- Chi tiết đơn hàng:
  - Tiến trình đơn hàng với các bước
  - Thông tin người nhận, địa chỉ giao hàng
  - Phương thức thanh toán và vận chuyển
  - Danh sách sản phẩm trong đơn
  - Tổng tiền chi tiết
- Hủy đơn hàng (nếu đang xác nhận)
- Mua lại đơn hàng đã hoàn tất

### 👤 Trang cá nhân

- Cập nhật thông tin: tên, email, số điện thoại
- Thay đổi avatar
- Quản lý địa chỉ giao hàng
- Danh sách sách yêu thích
- Đổi mật khẩu

### 🔍 Tìm kiếm & Lọc

- Tìm kiếm sách theo từ khóa
- Lọc theo thể loại, danh mục
- Lọc theo khoảng giá
- Sắp xếp: mới nhất, cũ nhất, giá tăng/giảm dần, bán chạy nhất
- Phân trang kết quả

### 📰 Blog

- Danh sách bài viết theo danh mục: Hoạt động, Tin sách, Sự kiện
- Chi tiết bài viết
- Phân trang

### ℹ️ Thông tin

- Về BookStar
- Chính sách đổi trả
- Hướng dẫn mua hàng

## 🗄️ CƠ SỞ DỮ LIỆU

### Các bảng chính:

- **user**: Thông tin người dùng
- **book**: Thông tin sách
- **bookimage**: Hình ảnh sách
- **category**: Danh mục sách
- **genre**: Thể loại sách
- **cart**: Giỏ hàng
- **order**: Đơn hàng
- **ratingbook**: Đánh giá sách
- **favoritebook**: Sách yêu thích
- **address**: Địa chỉ người dùng
- **transportmethod**: Phương thức vận chuyển
- **payingmethod**: Phương thức thanh toán
- **banner**: Banner quảng cáo
- **blog**: Bài viết blog

Chi tiết schema có trong file `ql_ban_sach_db_create.sql`

## 🔑 API ENDPOINTS

### Authentication

- `POST /auth/register` - Đăng ký
- `POST /auth/login` - Đăng nhập
- `POST /auth/forgot-password` - Quên mật khẩu

### Books

- `GET /book` - Lấy danh sách sách
- `GET /book/:name` - Lấy chi tiết sách theo tên

### User

- `GET /user/:userId` - Lấy thông tin user
- `PUT /user/:userId` - Cập nhật thông tin user
- `POST /user/:userId/cart` - Thêm sách vào giỏ hàng
- `GET /user/:userId/cart` - Lấy giỏ hàng
- `GET /user/:userId/favorite` - Lấy sách yêu thích
- `POST /user/:userId/address` - Tạo địa chỉ mới
- `POST /user/upload-avatar` - Upload avatar

### Orders

- `POST /order` - Tạo đơn hàng
- `GET /order/:orderId` - Chi tiết đơn hàng
- `PUT /order/:orderId` - Cập nhật trạng thái đơn

### Others

- `GET /category` - Lấy danh mục
- `GET /banner` - Lấy banner
- `GET /blog` - Lấy bài viết
- `GET /transport-method` - Phương thức vận chuyển
- `GET /paying-method` - Phương thức thanh toán
