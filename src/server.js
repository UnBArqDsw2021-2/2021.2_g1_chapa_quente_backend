const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/router');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4000;

try {
  mongoose
    .connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      app.listen(PORT, () => {
        console.log('Conexão estabelecida com sucesso com o MongoDB');
        console.log(`Server running on http://localhost:${PORT}`);
      }),
    )
    .catch(error => {
      console.log(`Erro ao tentar conectar com o mongoDB: ${error}`);
    });
} catch (er) {
  console.log('Não foi possível inicializar o BD!');
  console.log(er);
}

app.use(cors());
app.use(express.json());

//Rotas
app.use('/', router);
