const app = require("./src/app");

const PORT = process.env.PORT;

const server = app.listen( PORT, () => {
    console.log(`Test connect with PORT ${PORT}`);
});

// process.on('SIGINT', () => {
//     server.close( () => console.log("Exit server."));
// });