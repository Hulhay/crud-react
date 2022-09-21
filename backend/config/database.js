import { Sequelize } from "sequelize"

const db = new Sequelize("crud-react", "root", "MyPassword@123", {
    host: "localhost",
    dialect: "mysql"
});

export default db;