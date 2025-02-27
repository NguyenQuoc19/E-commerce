'use strict'

const mongoose = require('mongoose');
const connectDB = 'mongodb://localhost:27017/e-commerce';
const {countConnect} = require("../helper/check.connect");

class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongoDb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }

        mongoose.connect(connectDB, {
            maxPoolSize: 50,
        }) 
            .then(_ => console.log(`Have ${countConnect()} connected to DB is successfully!`))
            .catch(error => console.log("The DB connect failed."));
    }

    static getInstance = () => {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongoDB = Database.getInstance();
mongoose.exports = instanceMongoDB;