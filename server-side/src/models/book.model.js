import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import BookImage from './bookImage.model.js';

const Book = sequelize.define(
    'book',
    {
        book_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: sequelize.literal('DEFAULT'),
        },
        book_name: DataTypes.STRING,
        book_cost: DataTypes.DECIMAL(20, 2),
        book_discount: DataTypes.DECIMAL(4, 2),
        book_end_cost: DataTypes.DECIMAL(20, 2),
        book_available: DataTypes.INTEGER,
        book_sold: DataTypes.INTEGER,
        book_star_rating: DataTypes.INTEGER,
        book_rating_num: DataTypes.INTEGER,
        book_description: DataTypes.TEXT,
        book_author: DataTypes.STRING,
        book_format: DataTypes.STRING,
        book_page_num: DataTypes.INTEGER,
        book_collection: DataTypes.STRING,
        book_status: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
    },
    {
        timestamps: false,
        freezeTableName: true,
    },
);
Book.hasOne(BookImage, {
    foreignKey: 'book_id',
    as: 'image', // Use this alias in your query
});
export default Book;
