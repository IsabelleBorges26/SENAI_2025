DROP DATABASE IF EXISTS lojao;
CREATE DATABASE lojao; /*Cria uma base de dados*/

USE lojao;

CREATE TABLE produto ( /*Nome da tabela*/
	id INTEGER AUTO_INCREMENT PRIMARY KEY, /*Nome da coluna/atributo*/
    nome VARCHAR(50) NOT NULL, /*Não pode faltar*/
    preco FLOAT NOT NULL,
    descricao VARCHAR(150) 
);

CREATE TABLE pedidos (
	id INTEGER AUTO_INCREMENT PRIMARY KEY, /* Valor unico*/
    produto_id INTEGER,
    cliente VARCHAR(150),
    quantidade INTEGER,
    data DATETIME,
    FOREIGN KEY (produto_id) REFERENCES produto(id) /*Relacionamento entre tabelas*/
);

INSERT INTO produto (preco, nome, descricao) 
VALUES (10.50, "Maquiaji", "Qualidade Galantida");

SELECT * FROM produto;

SELECT nome, preco FROM produto;

INSERT INTO produto
VALUES (DEFAULT, "Base", 6.99, "De confianssa");

SELECT * FROM produto WHERE id = 1; /*Busca os regostros com id igual a 1 */

INSERT INTO pedidos 
VALUES 
(DEFAULT, 1, "Isabelle", 2, "2025-08-26"), 
(DEFAULT, 2, "Isabelle", 1, "2025-08-26"),
(DEFAULT, 2, "Monique", 1, "2025-08-25");

/* Atualiza os registro da tabela */
UPDATE pedidos
SET quantidade = 2
WHERE id = 2;

/* Apaga um registro da tabela */
DELETE FROM pedidos WHERE id = 3;



