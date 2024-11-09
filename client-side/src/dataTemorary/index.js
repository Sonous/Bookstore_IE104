const categories = [
    { title: 'Văn học', genres: ['Tiểu thuyết', 'Truyện ngắn', 'Light novle', 'Trinh thám'], isContinue: true },
    { title: 'Manga-Comic', genres: ['Trinh thám', 'Hành động', 'Fantasty', 'Slice of Life'], isContinue: true },
    { title: 'Văn học', genres: ['Tiểu thuyết', 'Truyện ngắn', 'Light novle', 'Trinh thám'], isContinue: true },
    { title: 'Manga-Comic', genres: ['Trinh thám', 'Hành động', 'Fantasty', 'Slice of Life'] },
    { title: 'Văn học', genres: ['Tiểu thuyết', 'Truyện ngắn', 'Light novle', 'Trinh thám'], isContinue: true },
    { title: 'Manga-Comic', genres: ['Trinh thám', 'Hành động', 'Fantasty', 'Slice of Life'] },
];


const searchResult = [
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 35000,
        quantity: 3,
      
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: '',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: '',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
        rate: 4
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
        rate: 3
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
        rate: 5
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 3,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 10',
        image: 'searchResult1',
        currentPrice: 36000,
        quantity: 2,
    },
    {
        title: 'Hồi Kí Vanitas - Tập 14 (Tái bản)',
        image: 'searchResult2',
        currentPrice: 36000,
        quantity: 1,
        rate: 5
    },
];

const bannersSlider = [
    {
        title: 'onePieceBanner',
    },
    {
        title: 'trinhThamCoTrangBanner',
    },
    {
        title: 'boxSetTokyoBabylonBanner',
    },
];


const images = {
    act_1: require('~/assets/images/act_1.webp'),
    act_2: require('~/assets/images/act_2.webp'),
    act_3: require('~/assets/images/act_3.webp'),
    act_4: require('~/assets/images/act_4.webp'),
    news_1: require('~/assets/images/news_1.webp'),
    news_2: require('~/assets/images/news_2.webp'),
    news_3: require('~/assets/images/news_3.webp'),
    news_4: require('~/assets/images/news_4.webp'),
    events_1: require('~/assets/images/events_1.webp'),
    events_2: require('~/assets/images/events_2.webp'),
    Order_1: require('~/assets/images/Order_1.webp'),
    Order_2: require('~/assets/images/Order_2.webp'),
};

const activities = [
    {
        id: '1',
        title: 'Chạy bộ cùng cộng đồng',
        activityDate: '15/10/2024',
        location: 'Công viên Lê Văn Tám, TP. Hồ Chí Minh',
        description: 'Một sự kiện chạy bộ nhằm nâng cao sức khỏe và kết nối cộng đồng. Hoạt động dành cho mọi lứa tuổi, khuyến khích mọi người tham gia cùng bạn bè và gia đình.',
        organizer: 'Nhóm chạy bộ Sài Gòn Runners',
        image: images.act_1,
    },
    {
        id: '2',
        title: 'Ngày hội đọc sách thiếu nhi',
        activityDate: '25/10/2024',
        location: 'Nhà văn hóa Thanh Niên, Hà Nội',
        description: 'Sự kiện đặc biệt dành cho các em nhỏ với nhiều hoạt động như kể chuyện, vẽ tranh, và gặp gỡ các tác giả sách thiếu nhi nổi tiếng.',
        organizer: 'Nhà xuất bản Kim Đồng',
        image: images.act_2,
    },
    {
        id: '3',
        title: 'Khám phá nghệ thuật tranh truyện',
        activityDate: '05/11/2024',
        location: 'Bảo tàng Mỹ Thuật, Đà Nẵng',
        description: 'Triển lãm và hội thảo về nghệ thuật tranh truyện, từ truyền thống đến hiện đại. Đây là cơ hội để tìm hiểu thêm về quá trình sáng tác và lịch sử của truyện tranh.',
        organizer: 'Hiệp hội Truyện tranh Việt Nam',
        image: images.act_3,
    },
    {
        id: '4',
        title: 'Chương trình "Sách và cuộc sống"',
        activityDate: '12/11/2024',
        location: 'Trung tâm sách quốc gia, TP. Hồ Chí Minh',
        description: 'Chương trình giao lưu với các tác giả và chuyên gia văn hóa để khám phá vai trò của sách trong đời sống hiện đại. Bao gồm hội thảo và ký tặng sách.',
        organizer: 'Hội xuất bản sách Việt Nam',
        image: images.act_4,
    },
];

const news = [
    { id: '1', title: 'Viện Pháp thúc đẩy sự phát triển công nghiệp truyện tranh', pDate: '30/09/2024', image: images.news_1 },
    { id: '2', title: 'Triển lãm sách quốc tế tại TP. Hồ Chí Minh', pDate: '01/10/2024', image: images.news_2 },
    { id: '3', title: 'Ra mắt bộ tiểu thuyết mới của tác giả A', pDate: '02/10/2024', image: images.news_3 },
    { id: '4', title: 'Hội sách Hà Nội tháng 10', pDate: '03/10/2024', image: images.news_4 },
];

const events = [
    {
        id: '1',
        title: 'Ra mắt sách "Dược sư"',
        eventDate: '10/10/2024',
        location: 'Hà Nội',
        image: images.events_1,
    },
    {
        id: '2',
        title: 'Hội sách quốc tế tháng 11',
        eventDate: '15/11/2024',
        location: 'TP. Hồ Chí Minh',
        image: images.events_2,
    },
];

const orderData = {
    items: [
        {
            id: '1',
            title: 'Sách ABC',
            price: 200000,
            quantity: 1, // Giả sử số lượng là 1
            imageUrl: images.Order_1, // Thay đổi từ 'image' thành 'imageUrl' để phù hợp
        },
        {
            id: '2',
            title: 'Sách XYZ',
            price: 300000,
            quantity: 1, // Giả sử số lượng là 1
            imageUrl: images.Order_2, // Thay đổi từ 'image' thành 'imageUrl' để phù hợp
        },
    ],
    shippingFee: 30000, // Thêm phí vận chuyển
};



export { images, categories, searchResult, bannersSlider, news, events, activities, orderData };

