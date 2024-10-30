// export const convertToSlug = (str) => {
//     return str
//         .normalize('NFD') // Chuẩn hóa chuỗi
//         .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
//         .replace(/-/g, '') // Loại bỏ tất cả dấu '-'
//         .replace(/\s+/g, '-') // Thay thế dấu cách bằng dấu '-'
//         .toLowerCase(); // Chuyển tất cả chữ thành chữ thường
// };

export const sum = (input, property = null) => {
    let arr = [...input];
    if (property) {
        arr = arr.map((item) => {
            if (property === 'cart') return item[property].quantity;
            else
                return {
                    cost: parseFloat(item[property]),
                    quantity: item.cart.quantity,
                };
        });
    }

    if (property === 'cart') {
        return arr.reduce((total, current) => {
            return (total += current) && total;
        }, 0);
    } else {
        return arr.reduce((total, current) => {
            return (total += current.cost * current.quantity) && total;
        }, 0);
    }
};

export const convertPriceToString = (price) => {
    let number = parseFloat(price);
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
