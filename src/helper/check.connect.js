'use strict'

const os = require("os");
const process = require("process");
const mongoose = require("mongoose");
const __SECOND = 5000;

// Check number of connections to MongoDB
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    return numConnection;
}

// Check system is overload
const checkOverLoad = () => {
    setInterval(() => {
        const numCore = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        const numConnection = countConnect();

        // Example we have maximum is 5 connect on 1 core cpu
        const $maximum = numCore * 5;

        console.log(`Memory is already in use: ${memoryUsage / 1024 / 1024} MB.`);
        console.log(`Have ${numConnection} connected to the Database.`);
        if (numConnection >= $maximum) {
            console.log("Connection Overload detected!");
        }

    }, __SECOND); // Monitor every 5 second
}

module.exports = {
    countConnect,
    checkOverLoad
}