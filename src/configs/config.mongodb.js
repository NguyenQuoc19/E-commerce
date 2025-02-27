'use strict'

const DEFAULT_ENV = 'dev';

const dev = {
    app: {
        port: process.env.DEV_PORT
    },
    db: {
        port: process.env.DEV_DB_PORT,
        host: process.env.DEV_DB_HOST,
        name: process.env.DEV_DB_NAME,
    }
};

const prod = {
    app: {
        port: process.env.PROD_PORT
    },
    db: {
        port: process.env.PROD_DB_PORT,
        host: process.env.PROD_DB_HOST,
        name: process.env.PROD_DB_NAME,
    }
};

const config = {dev, prod};

const env = process.env.ENVIRONMENT || DEFAULT_ENV;

console.log(env, config[env]);
module.exports = config[env];