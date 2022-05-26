require('dotenv').config();
const mysql = require('mysql');
class BaseData {
    db = null;

    constructor() {
        this.db = mysql.createConnection({
            user: process.env.USER,
            host: process.env.HOST,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });
        this.db.connect();
    }

    getThreads () {
        const query = `select * from customerdb.threads;`

        const promise = new Promise((resolve, reject) => {
            this.db.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    addThread (creator, title, threadtime) {
        if(!creator || !title || !threadtime) {
            return;
        }
        const query = `insert into threads (creator,title,threadtime)
        values("${creator}","${title}","${threadtime}");`

        const promise = new Promise((resolve, reject) => {
            this.db.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    getCustomers () {
        const query = `select * from customerdb.customers;`

        const promise = new Promise((resolve, reject) => {
            this.db.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    addCustomer (username, content, msgtime) {
        if(!content || !username || !msgtime) {
            return;
        }
        const query = `insert into customers (username,content,msgtime)
        values("${username}","${content}","${msgtime}");`

        const promise = new Promise((resolve, reject) => {
            this.db.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }
}

module.exports = BaseData;