const express = require("express");
const app = express();
app.get("/sum", (request, response) => {
    let num1 = parseInt(request.query.num1);
    let num2 = parseInt(request.query.num2);
    let sum = num1 + num2;
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    response.send({ result: sum });
});
app.listen(3000, "localhost", () => {
    console.log("Сервер начал прослушивание на порту 3000");
});
