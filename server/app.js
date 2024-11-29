const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'userTeste',
    password: 'senhaTeste',
    database: 'ultraregistros'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

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

app.get('/api/consultas', (req, res) => {
    const sql = 'SELECT * FROM consultas';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao buscar registros no banco.' });
        }
        res.status(200).json(results);
    });
});

app.delete('/api/consultas/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM consultas WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao excluir registro.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }
        res.status(200).json({ message: 'Registro excluído com sucesso!' });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
