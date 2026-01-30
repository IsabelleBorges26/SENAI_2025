DROP DATABASE IF EXISTS clinicavida;
CREATE DATABASE clinicavida;
USE clinicavida;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  cargo VARCHAR(11) NOT NULL,
  senha VARCHAR(11) NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE pacientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  telefone VARCHAR(11) NOT NULL,
  senha VARCHAR(50) NOT NULL
);

CREATE TABLE consultas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  medico_id INT NOT NULL,
  data_hora DATETIME NOT NULL,
  status VARCHAR(15) NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES pacientes(id),
  FOREIGN KEY (medico_id) REFERENCES usuarios(id)
);
