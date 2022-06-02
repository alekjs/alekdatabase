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

    getComments () {
        const query = `SELECT * FROM customerdb.comments;`

        const promise = new Promise((resolve, reject) => {
            this.db.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    addComment (username, content, comment_time, threadid) {
        if(!username || !content || !comment_time || !threadid) {
            return;
        }
        const query = `insert into comments (username,content,comment_time,threadid)
        values("${username}","${content}","${comment_time}","${threadid}");`

        const promise = new Promise((resolve, reject) => {
            this.db.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
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

    addThread (creator, title, threadtime, content) {
        if(!creator || !title || !threadtime || !content) {
            return;
        }
        const query = `insert into threads (creator,title,threadtime,content)
        values("${creator}","${title}","${threadtime}","${content}");`

        const promise = new Promise((resolve, reject) => {
            this.db.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    deleteThread(autoint, threadtodelete) {
        const query = `alter table threads auto_increment=${autoint-1};
        delete from customerdb.threads where (id=${threadtodelete});`

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