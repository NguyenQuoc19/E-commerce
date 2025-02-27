const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

// Init middleware`
app.use(morgan("dev")); //combined/common/short/tiny
app.use(helmet());
app.use(compression());

// Init Database
require("./dbs/init.mongodb");
const {checkOverLoad} = require("./helper/check.connect");
checkOverLoad();

// Init Router
app.get("/", ( req, res, next) => {
    const test = "This is a text";
    return res.status(200).json({
        message: "Hello world 2!",
        metadata: test.repeat(200000),
    });
});

// Handling Errors

module.exports = app