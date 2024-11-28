//foi usada para ver se estava puxando o banco
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'userTeste',
    password: 'senhaTeste',
    database: 'ultraregistros'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err);
    } else {
        console.log('Conexão bem-sucedida!');
    }
    connection.end();
});
