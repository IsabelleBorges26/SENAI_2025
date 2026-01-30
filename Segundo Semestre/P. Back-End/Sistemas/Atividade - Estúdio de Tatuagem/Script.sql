DROP DATABASE IF EXISTS estudio_tatuagem;
CREATE DATABASE estudio_tatuagem;
USE estudio_tatuagem;

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  telefone VARCHAR(11) NOT NULL
);

CREATE TABLE tatuadores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  telefone VARCHAR(11) NOT NULL
);

CREATE TABLE agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  tatuador_id INT NOT NULL,
  data_hora DATETIME NOT NULL,
  valor DECIMAL(6,2) NOT NULL,
  status VARCHAR(15) NOT NULL,
  desenho VARCHAR(100) NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (tatuador_id) REFERENCES tatuadores(id)
);

INSERT INTO clientes VALUES
(DEFAULT, 'Isabelle Borges', '19111111111'),
(DEFAULT, 'Mirella Brolezi', '19222222222'),
(DEFAULT, 'Gabrielly Souza', '19333333333'),
(DEFAULT, 'Maria Eduarda', '19444444444');

INSERT INTO tatuadores VALUES
(DEFAULT, 'Carlos Henrique', '19555555555'),
(DEFAULT, 'Monique Stefany', '19666666666'),
(DEFAULT, 'Kauã Lucio', '19777777777'),
(DEFAULT, 'Lívia Guarizo', '19888888888');

INSERT INTO agendamentos VALUES
(DEFAULT, 1, 1, '2025-11-10 10:28:00', 350.90, 'concluída', 'ferradura'),  
(DEFAULT, 3, 1, '2025-11-12 10:28:00', 350.90, 'concluída', 'borboleta'), 
(DEFAULT, 3, 2, '2025-11-12 10:28:00', 450.00, 'concluída', 'cobra'),      
(DEFAULT, 3, 3, '2025-11-12 10:28:00', 560.45, 'concluída', 'abelha'),     
(DEFAULT, 2, 2, '2025-11-13 10:28:00', 480.00, 'concluída', 'flor'),      
(DEFAULT, 4, 4, '2025-11-14 10:28:00', 476.70, 'concluída', 'jesus'),    
(DEFAULT, 4, 4, '2025-11-14 10:28:00', 476.70, 'confirmada', 'maria'),
(DEFAULT, 1, 4, '2025-11-14 10:28:00', 476.70, 'confirmada', 'jose'); 

SELECT * FROM agendamentos WHERE tatuador_id = 1 AND data_hora BETWEEN '2025-11-10' AND '2025-11-14';

SELECT * FROM agendamentos WHERE cliente_id = 1 AND status = 'concluída';

SELECT tatuador_id, SUM(valor) AS total_faturado FROM agendamentos WHERE status = 'concluída' AND MONTH(data_hora) = 11 AND YEAR(data_hora) = 2025 GROUP BY tatuador_id;

SELECT * FROM agendamentos WHERE status = 'confirmada' AND data_hora > NOW();







