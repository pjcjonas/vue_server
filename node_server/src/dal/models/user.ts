// sequelize user model

import { Model, DataTypes } from "sequelize";
import { connect } from "../connection";

export class User extends Model {
    public user_id!: number;
    public username!: string;
    public password!: string;
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: new DataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        tableName: "users",
        sequelize: connect(),
        timestamps: false,
    }
);