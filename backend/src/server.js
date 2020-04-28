const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
                    // . significa a pasta atual, e a / para colocar o nome do arquivo
const app = express();

mongoose.connect('mongodb+srv://campanelli2:campanelli2@omnistack-xlfok.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// get, put, post, delete

// req.query = acessar query params (para filtros)
// req.params = acessar rout params para (edição, delete)
// req.body = acessar corpo da requisação ( para criação/edição)

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);


app.listen(3333);
