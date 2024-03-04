const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const texto = 'Ola';
    await fs.writeFile('./src/a.txt', texto);
    res.json('ok');
});


app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    const teste = await fs.readFile('./src/usuarios.json');

    const pessoas = JSON.parse(teste);

    pessoas.push({ nome, idade });

    const pessoasStringify = JSON.stringify(pessoas);

    await fs.writeFile('./src/usuarios.json', pessoasStringify)

    return res.json('Pessoa cadastrada com sucesso.')
});

app.listen(3000);