

```markdown
# API viaCEP

Este projeto é uma API que utiliza o serviço [viaCEP](https://viacep.com.br/) para realizar consultas de CEP e armazena os resultados em um banco de dados MySQL.

## 💻 Tecnologias Utilizadas
- **Node.js**
- **Bootstrap**
- **JavaScript**
- **Html**
- **Css**  
- **MySQL**  
- **viaCEP API**  
- **Vercel** (para deploy)

## 🚀 Configuração e Execução do Projeto

### 1. Configurar o Banco de Dados MySQL  
Execute os seguintes comandos no MySQL para criar o banco de dados, tabela e configurar o usuário:  
```sql
CREATE DATABASE ultraregistros;

CREATE TABLE `consultas`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cep` VARCHAR(9) NOT NULL,
    `logradouro` VARCHAR(200) NOT NULL,
    `complemento` VARCHAR(100) NOT NULL,
    `bairro` VARCHAR(100) NOT NULL,
    `localidade` VARCHAR(100) NOT NULL,
    `uf` CHAR(2) NOT NULL,
    `consulta_data` TIMESTAMP NOT NULL
);

CREATE USER 'userTeste'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senhaTeste';
GRANT ALL PRIVILEGES ON ultraregistros.* TO 'userTeste'@'localhost';
FLUSH PRIVILEGES;
```

### 2. Inicializar o Projeto Node.js  
No terminal, inicialize o projeto e instale as dependências necessárias:  
```bash
npm init -y
npm install express axios mysql
```

### 3. Configurar e Executar o Servidor  
Certifique-se de que o arquivo principal do servidor esteja localizado em `server/app.js` e execute o servidor com o comando:  
```bash
node server/app.js
```

---

## 🌐 Acesso ao Deploy  
O projeto foi implantado na plataforma Vercel e pode ser acessado por meio do seguinte link:  
[https://api-via-cep-ultra-is3z6e1i0-gabrielgvcbs-projects.vercel.app/](https://api-via-cep-ultra-is3z6e1i0-gabrielgvcbs-projects.vercel.app/)

---

## ℹ️ Informações Adicionais  
Criado por **Gabriel Vinicius**.  
Este projeto foi desenvolvido com foco em integrar consultas da API viaCEP com armazenamento de dados no MySQL.
