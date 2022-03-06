const { Router } = require('express');


const routes = Router();

routes.get('/', (req, res) => {
    return res.send({message: "API Online! =)"});
});

module.exports = routes;