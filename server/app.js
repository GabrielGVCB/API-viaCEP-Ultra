const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'userTeste',
    password: 'senhaTeste',
    database: 'ultraregistros'
});

// conexão do mysql
db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

// Rota para inserir CEP
app.post('/api/cep', (req, res) => {
    const { cep, logradouro, complemento, bairro, localidade, uf } = req.body;
    const consultaData = new Date();

    const sql = 'INSERT INTO consultas (cep, logradouro, complemento, bairro, localidade, uf, consulta_data) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [cep, logradouro, complemento, bairro, localidade, uf, consultaData], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao inserir dados no banco.' });
        }
        res.status(200).json({ message: 'Dados inseridos com sucesso!', id: result.insertId });
    });
});

// Rota para buscar todos os registros
app.get('/api/consultas', (req, res) => {
    const sql = 'SELECT * FROM consultas'; // Query para selecionar todos os registros
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao buscar registros no banco.' });
        }
        res.status(200).json(results); // Retorna os registros como JSON
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
