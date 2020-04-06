const express = require('express');
const cors = require('cors');
//Importando rota
const routes = require('./routes');

//Criando aplicacao
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Ouvir a porta
app.listen(3333);
