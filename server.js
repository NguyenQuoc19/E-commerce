const app = require("./src/app");

const PORT = 3055;

const server = app.listen( 3055, () => {
    console.log(`Test connect with PORT ${PORT}`);
});

// process.on('SIGINT', () => {
//     server.close( () => console.log("Exit server."));
// });