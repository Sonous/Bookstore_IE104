import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const PayingMethod = sequelize.define(
    'payingmethod',
    {
        pay_method_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: sequelize.literal('DEFAULT'),
        },
        pay_method_name: DataTypes.STRING,
    },
    {
        timestamps: false,
        freezeTableName: true,
    },
);

export default PayingMethod;
