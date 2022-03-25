require('dotenv').config();
const mysql = require('mysql');
class BaseData {
    db = null;

    connect() {
        try {
        this.db = mysql.createConnection({
            user: process.env.USER,
            host: process.env.HOST,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    async getCustomers () {
        if (!this.db) {
            return;
        }
        const query = `select * from customerdb.customers;`
        const result = await this.db.query(query);
        return result;
    }
}

module.exports = BaseData;