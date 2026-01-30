DROP DATABASE IF EXISTS novaloja;
CREATE DATABASE novaloja;

USE novaloja;

CREATE TABLE pedidos (
  id INT PRIMARY KEY,
  cliente_nome VARCHAR(100),
  produto VARCHAR(100),
  quantidade INT,
  preco_unitario DECIMAL(10,2),
  data_pedido DATE,
  status VARCHAR(20)
);

INSERT INTO pedidos VALUES (1, 'Bruna da Rocha', 'Farinha', 8, 40.85, '2025-05-17', 'pendente');
INSERT INTO pedidos VALUES (2, 'Joana da Conceição', 'Refrigerante', 6, 30.55, '2025-03-25', 'pendente');
INSERT INTO pedidos VALUES (3, 'Leandro Moraes', 'Arroz', 15, 42.11, '2025-06-03', 'entregue');
INSERT INTO pedidos VALUES (4, 'Brenda Ramos', 'Refrigerante', 13, 8.48, '2024-11-08', 'cancelado');
INSERT INTO pedidos VALUES (5, 'Heloísa Freitas', 'Feijão', 9, 2.72, '2024-09-09', 'cancelado');
INSERT INTO pedidos VALUES (6, 'Sr. Joaquim Mendes', 'Arroz', 10, 40.88, '2025-04-25', 'entregue');
INSERT INTO pedidos VALUES (7, 'Luiz Gustavo Rodrigues', 'Óleo', 7, 23.88, '2025-03-29', 'cancelado');
INSERT INTO pedidos VALUES (8, 'Maria Luiza Souza', 'Óleo', 5, 37.02, '2025-02-28', 'pendente');
INSERT INTO pedidos VALUES (9, 'Clara Nunes', 'Refrigerante', 9, 28.08, '2025-01-16', 'cancelado');
INSERT INTO pedidos VALUES (10, 'Sr. Vicente Peixoto', 'Biscoito', 17, 33.25, '2024-09-12', 'pendente');
INSERT INTO pedidos VALUES (11, 'João Pedro da Cruz', 'Leite', 12, 40.72, '2025-02-21', 'entregue');
INSERT INTO pedidos VALUES (12, 'Guilherme Viana', 'Leite', 16, 20.52, '2024-12-19', 'cancelado');
INSERT INTO pedidos VALUES (13, 'Murilo Nunes', 'Biscoito', 8, 4.95, '2024-12-29', 'pendente');
INSERT INTO pedidos VALUES (14, 'Emanuelly Mendes', 'Farinha', 20, 4.91, '2025-09-01', 'pendente');
INSERT INTO pedidos VALUES (15, 'Luigi Azevedo', 'Óleo', 6, 24.01, '2024-12-23', 'cancelado');
INSERT INTO pedidos VALUES (16, 'Mariana Azevedo', 'Biscoito', 19, 11.11, '2025-02-18', 'entregue');
INSERT INTO pedidos VALUES (17, 'Joana Alves', 'Açúcar', 3, 26.74, '2024-12-06', 'pendente');
INSERT INTO pedidos VALUES (18, 'Dra. Evelyn Monteiro', 'Refrigerante', 6, 36.76, '2025-01-03', 'entregue');
INSERT INTO pedidos VALUES (19, 'Renan Novaes', 'Arroz', 20, 49.99, '2025-05-22', 'entregue');
INSERT INTO pedidos VALUES (20, 'Otávio Gomes', 'Farinha', 9, 49.61, '2024-12-08', 'entregue');
INSERT INTO pedidos VALUES (21, 'Camila Nogueira', 'Biscoito', 1, 13.35, '2024-10-25', 'pendente');
INSERT INTO pedidos VALUES (22, 'Valentina Gonçalves', 'Óleo', 14, 30.93, '2024-11-09', 'cancelado');
INSERT INTO pedidos VALUES (23, 'Matheus Rezende', 'Leite', 20, 27.85, '2024-11-04', 'cancelado');
INSERT INTO pedidos VALUES (24, 'Carlos Eduardo Vieira', 'Macarrão', 3, 27.81, '2025-04-17', 'entregue');
INSERT INTO pedidos VALUES (25, 'Luiz Gustavo Barbosa', 'Farinha', 20, 13.06, '2025-07-28', 'pendente');
INSERT INTO pedidos VALUES (26, 'Melissa Sales', 'Macarrão', 18, 15.46, '2025-05-13', 'cancelado');
INSERT INTO pedidos VALUES (27, 'Kaique Duarte', 'Café', 16, 32.0, '2025-05-22', 'pendente');
INSERT INTO pedidos VALUES (28, 'Mariana Peixoto', 'Farinha', 4, 37.28, '2025-05-17', 'cancelado');
INSERT INTO pedidos VALUES (29, 'Emanuelly Ribeiro', 'Açúcar', 8, 16.36, '2025-06-11', 'cancelado');
INSERT INTO pedidos VALUES (30, 'Matheus Silveira', 'Biscoito', 16, 37.0, '2025-01-15', 'entregue');
INSERT INTO pedidos VALUES (31, 'Luiz Henrique Dias', 'Café', 10, 5.56, '2025-07-08', 'pendente');
INSERT INTO pedidos VALUES (32, 'Diego Ramos', 'Macarrão', 20, 15.97, '2025-08-31', 'entregue');
INSERT INTO pedidos VALUES (33, 'Juliana Araújo', 'Farinha', 1, 7.02, '2024-12-23', 'cancelado');
INSERT INTO pedidos VALUES (34, 'Theo Vieira', 'Biscoito', 13, 49.79, '2025-08-23', 'entregue');
INSERT INTO pedidos VALUES (35, 'Clarice Costela', 'Café', 3, 2.87, '2025-02-13', 'cancelado');
INSERT INTO pedidos VALUES (36, 'Valentina Oliveira', 'Biscoito', 6, 31.97, '2025-05-15', 'pendente');
INSERT INTO pedidos VALUES (37, 'Fernanda Silveira', 'Macarrão', 14, 33.97, '2025-02-21', 'pendente');
INSERT INTO pedidos VALUES (38, 'Juan Barbosa', 'Leite', 15, 21.25, '2025-01-31', 'pendente');
INSERT INTO pedidos VALUES (39, 'Dra. Juliana Barbosa', 'Leite', 12, 44.52, '2025-01-17', 'cancelado');
INSERT INTO pedidos VALUES (40, 'Eloah da Costa', 'Leite', 19, 19.05, '2024-12-19', 'cancelado');
INSERT INTO pedidos VALUES (41, 'Sr. Otávio Cardoso', 'Açúcar', 16, 27.9, '2025-06-30', 'entregue');
INSERT INTO pedidos VALUES (42, 'Nathan Silva', 'Biscoito', 1, 31.92, '2025-06-04', 'entregue');
INSERT INTO pedidos VALUES (43, 'Sophia Barros', 'Refrigerante', 10, 15.96, '2025-07-19', 'pendente');
INSERT INTO pedidos VALUES (44, 'Vitor Dias', 'Óleo', 19, 9.48, '2025-04-09', 'cancelado');
INSERT INTO pedidos VALUES (45, 'Enzo Gabriel da Cruz', 'Arroz', 8, 10.11, '2024-09-30', 'entregue');
INSERT INTO pedidos VALUES (46, 'Sr. João Gabriel da Costa', 'Óleo', 10, 6.4, '2025-02-01', 'pendente');
INSERT INTO pedidos VALUES (47, 'Bruno Barbosa', 'Óleo', 16, 35.57, '2025-04-16', 'cancelado');
INSERT INTO pedidos VALUES (48, 'Srta. Melissa Lopes', 'Café', 4, 41.63, '2025-07-12', 'pendente');
INSERT INTO pedidos VALUES (49, 'Yasmin Monteiro', 'Biscoito', 20, 10.11, '2025-03-02', 'entregue');
INSERT INTO pedidos VALUES (50, 'Beatriz Santos', 'Leite', 16, 42.39, '2025-02-25', 'entregue');
INSERT INTO pedidos VALUES (51, 'Ana Júlia da Conceição', 'Açúcar', 13, 25.83, '2024-10-07', 'cancelado');
INSERT INTO pedidos VALUES (52, 'Ana Julia Gomes', 'Café', 15, 12.25, '2025-04-08', 'cancelado');
INSERT INTO pedidos VALUES (53, 'Srta. Elisa Alves', 'Óleo', 16, 7.05, '2024-10-22', 'pendente');
INSERT INTO pedidos VALUES (54, 'Maria Moreira', 'Arroz', 20, 14.77, '2025-05-16', 'pendente');
INSERT INTO pedidos VALUES (55, 'Dr. Luiz Miguel Ribeiro', 'Café', 17, 42.74, '2025-02-13', 'entregue');
INSERT INTO pedidos VALUES (56, 'Vitor Gabriel Sales', 'Leite', 11, 14.48, '2025-03-03', 'cancelado');
INSERT INTO pedidos VALUES (57, 'Sr. Benjamin Teixeira', 'Óleo', 17, 16.93, '2025-08-24', 'entregue');
INSERT INTO pedidos VALUES (58, 'Lorena Alves', 'Leite', 16, 46.97, '2024-11-25', 'entregue');
INSERT INTO pedidos VALUES (59, 'Brenda Freitas', 'Biscoito', 17, 32.47, '2024-09-27', 'pendente');
INSERT INTO pedidos VALUES (60, 'Luiz Miguel da Conceição', 'Óleo', 14, 24.6, '2025-02-09', 'entregue');
INSERT INTO pedidos VALUES (61, 'Heloísa Porto', 'Café', 9, 46.25, '2024-11-18', 'pendente');
INSERT INTO pedidos VALUES (62, 'Pedro Lucas Pereira', 'Farinha', 3, 44.57, '2025-02-24', 'entregue');
INSERT INTO pedidos VALUES (63, 'Murilo da Rosa', 'Café', 12, 39.99, '2025-04-11', 'cancelado');
INSERT INTO pedidos VALUES (64, 'Vicente Rodrigues', 'Macarrão', 10, 13.02, '2025-06-15', 'entregue');
INSERT INTO pedidos VALUES (65, 'João Pedro Ferreira', 'Óleo', 3, 43.76, '2025-03-29', 'entregue');
INSERT INTO pedidos VALUES (66, 'Dr. Rafael Campos', 'Arroz', 6, 27.2, '2025-06-08', 'cancelado');
INSERT INTO pedidos VALUES (67, 'Srta. Julia Pinto', 'Feijão', 13, 29.71, '2025-05-09', 'pendente');
INSERT INTO pedidos VALUES (68, 'Sra. Valentina Porto', 'Café', 4, 42.31, '2024-11-07', 'entregue');
INSERT INTO pedidos VALUES (69, 'Emanuelly Nogueira', 'Feijão', 18, 18.12, '2024-11-03', 'cancelado');
INSERT INTO pedidos VALUES (70, 'Vicente Moraes', 'Arroz', 10, 34.79, '2024-10-28', 'entregue');
INSERT INTO pedidos VALUES (71, 'Dr. Noah Moreira', 'Refrigerante', 7, 48.04, '2025-05-30', 'cancelado');
INSERT INTO pedidos VALUES (72, 'Rodrigo Duarte', 'Farinha', 6, 42.39, '2024-11-10', 'pendente');
INSERT INTO pedidos VALUES (73, 'Eloah Melo', 'Café', 2, 26.72, '2025-04-02', 'pendente');
INSERT INTO pedidos VALUES (74, 'Enrico da Paz', 'Macarrão', 16, 43.31, '2025-07-11', 'entregue');
INSERT INTO pedidos VALUES (75, 'Amanda Azevedo', 'Café', 19, 19.54, '2025-04-11', 'cancelado');
INSERT INTO pedidos VALUES (76, 'Pietra da Rosa', 'Farinha', 5, 23.89, '2025-07-21', 'pendente');
INSERT INTO pedidos VALUES (77, 'Thomas das Neves', 'Farinha', 12, 47.47, '2025-06-02', 'pendente');
INSERT INTO pedidos VALUES (78, 'Anthony da Conceição', 'Açúcar', 2, 29.91, '2024-10-31', 'cancelado');
INSERT INTO pedidos VALUES (79, 'Bianca Lima', 'Café', 3, 36.98, '2025-02-28', 'cancelado');
INSERT INTO pedidos VALUES (80, 'Brenda Farias', 'Óleo', 17, 10.76, '2025-07-11', 'pendente');
INSERT INTO pedidos VALUES (81, 'Isabella Fernandes', 'Leite', 17, 22.09, '2025-07-02', 'cancelado');
INSERT INTO pedidos VALUES (82, 'Sabrina Caldeira', 'Arroz', 7, 22.34, '2024-12-03', 'entregue');
INSERT INTO pedidos VALUES (83, 'Manuela Duarte', 'Farinha', 3, 35.8, '2025-04-02', 'pendente');
INSERT INTO pedidos VALUES (84, 'Isaac Fogaça', 'Café', 5, 35.28, '2025-08-07', 'cancelado');
INSERT INTO pedidos VALUES (85, 'Ana Dias', 'Macarrão', 19, 48.88, '2025-01-22', 'cancelado');
INSERT INTO pedidos VALUES (86, 'Mirella da Mata', 'Farinha', 10, 29.69, '2025-01-26', 'entregue');
INSERT INTO pedidos VALUES (87, 'Mirella Costa', 'Arroz', 20, 36.23, '2025-07-01', 'cancelado');
INSERT INTO pedidos VALUES (88, 'Ana Beatriz Nogueira', 'Feijão', 15, 13.41, '2025-08-28', 'pendente');
INSERT INTO pedidos VALUES (89, 'Cauê Barbosa', 'Macarrão', 4, 22.17, '2025-07-27', 'pendente');
INSERT INTO pedidos VALUES (90, 'Alice Oliveira', 'Refrigerante', 20, 46.16, '2024-11-28', 'entregue');
INSERT INTO pedidos VALUES (91, 'Maria Rezende', 'Farinha', 20, 37.56, '2024-09-16', 'entregue');
INSERT INTO pedidos VALUES (92, 'Srta. Maria Cecília Pereira', 'Feijão', 18, 49.1, '2025-09-05', 'cancelado');
INSERT INTO pedidos VALUES (93, 'Heitor Castro', 'Macarrão', 2, 39.35, '2025-02-09', 'cancelado');
INSERT INTO pedidos VALUES (94, 'Nicolas Moreira', 'Farinha', 13, 33.7, '2025-01-03', 'cancelado');
INSERT INTO pedidos VALUES (95, 'Clarice Nunes', 'Leite', 13, 6.26, '2024-11-09', 'entregue');
INSERT INTO pedidos VALUES (96, 'Evelyn Nogueira', 'Café', 10, 22.87, '2025-04-25', 'entregue');
INSERT INTO pedidos VALUES (97, 'André Carvalho', 'Óleo', 17, 35.27, '2024-12-14', 'entregue');
INSERT INTO pedidos VALUES (98, 'Melissa Mendes', 'Óleo', 8, 14.32, '2025-03-06', 'entregue');
INSERT INTO pedidos VALUES (99, 'Igor Campos', 'Biscoito', 20, 41.68, '2024-10-07', 'entregue');
INSERT INTO pedidos VALUES (100, 'Arthur Viana', 'Biscoito', 19, 40.43, '2025-04-07', 'entregue');
INSERT INTO pedidos VALUES (101, 'Daniela Silva', 'Macarrão', 13, 49.88, '2025-04-11', 'pendente');
INSERT INTO pedidos VALUES (102, 'Luna Viana', 'Arroz', 4, 33.04, '2024-09-17', 'pendente');
INSERT INTO pedidos VALUES (103, 'Catarina Costa', 'Farinha', 20, 43.07, '2025-02-05', 'cancelado');
INSERT INTO pedidos VALUES (104, 'Gustavo Henrique Duarte', 'Açúcar', 4, 7.48, '2024-11-22', 'cancelado');
INSERT INTO pedidos VALUES (105, 'Vitor Fogaça', 'Biscoito', 12, 38.57, '2024-09-30', 'cancelado');
INSERT INTO pedidos VALUES (106, 'Sr. Luiz Miguel Almeida', 'Feijão', 19, 39.3, '2024-11-01', 'pendente');
INSERT INTO pedidos VALUES (107, 'Ana Carolina Gonçalves', 'Farinha', 12, 26.17, '2024-12-24', 'entregue');
INSERT INTO pedidos VALUES (108, 'Catarina Correia', 'Leite', 19, 32.8, '2024-12-23', 'cancelado');
INSERT INTO pedidos VALUES (109, 'Kamilly Pinto', 'Macarrão', 7, 39.17, '2024-11-25', 'pendente');
INSERT INTO pedidos VALUES (110, 'Dr. Breno da Luz', 'Leite', 4, 49.68, '2025-03-31', 'entregue');
INSERT INTO pedidos VALUES (111, 'Maysa da Paz', 'Macarrão', 16, 46.89, '2024-10-21', 'pendente');
INSERT INTO pedidos VALUES (112, 'João Felipe Caldeira', 'Farinha', 9, 37.41, '2024-11-30', 'entregue');
INSERT INTO pedidos VALUES (113, 'Vitor Gabriel Dias', 'Macarrão', 19, 33.36, '2025-02-20', 'entregue');
INSERT INTO pedidos VALUES (114, 'Caio Martins', 'Biscoito', 16, 22.27, '2024-10-21', 'cancelado');
INSERT INTO pedidos VALUES (115, 'Murilo Costela', 'Arroz', 16, 48.04, '2025-08-17', 'entregue');
INSERT INTO pedidos VALUES (116, 'Luiz Miguel Jesus', 'Óleo', 16, 17.0, '2025-04-06', 'entregue');
INSERT INTO pedidos VALUES (117, 'Stella Alves', 'Farinha', 12, 22.95, '2025-08-02', 'cancelado');
INSERT INTO pedidos VALUES (118, 'Maria Alice Monteiro', 'Arroz', 4, 6.39, '2024-10-07', 'cancelado');
INSERT INTO pedidos VALUES (119, 'Sofia Cunha', 'Macarrão', 13, 36.97, '2025-09-04', 'cancelado');
INSERT INTO pedidos VALUES (120, 'Caio Gomes', 'Feijão', 15, 10.17, '2025-07-24', 'entregue');
INSERT INTO pedidos VALUES (121, 'Milena Santos', 'Arroz', 4, 30.5, '2024-12-07', 'cancelado');
INSERT INTO pedidos VALUES (122, 'Ryan Monteiro', 'Biscoito', 17, 21.91, '2025-01-15', 'pendente');
INSERT INTO pedidos VALUES (123, 'Lara Cunha', 'Arroz', 1, 5.14, '2025-01-13', 'pendente');
INSERT INTO pedidos VALUES (124, 'Dra. Ana Luiza Carvalho', 'Refrigerante', 17, 46.38, '2024-11-27', 'entregue');
INSERT INTO pedidos VALUES (125, 'Cecília Monteiro', 'Biscoito', 1, 3.09, '2025-02-21', 'cancelado');
INSERT INTO pedidos VALUES (126, 'Gabrielly Barros', 'Arroz', 19, 42.07, '2025-07-22', 'pendente');
INSERT INTO pedidos VALUES (127, 'Pietra Costela', 'Óleo', 5, 3.58, '2024-11-22', 'cancelado');
INSERT INTO pedidos VALUES (128, 'Sr. Bryan Vieira', 'Leite', 7, 3.89, '2024-12-02', 'entregue');
INSERT INTO pedidos VALUES (129, 'Ana Lívia Fogaça', 'Leite', 5, 48.76, '2025-03-29', 'entregue');
INSERT INTO pedidos VALUES (130, 'Srta. Isadora Pinto', 'Macarrão', 14, 13.18, '2025-05-14', 'entregue');
INSERT INTO pedidos VALUES (131, 'Bárbara Pinto', 'Feijão', 5, 24.78, '2025-03-31', 'entregue');
INSERT INTO pedidos VALUES (132, 'Dr. Danilo das Neves', 'Café', 5, 48.88, '2025-02-25', 'entregue');
INSERT INTO pedidos VALUES (133, 'Camila Correia', 'Óleo', 8, 3.04, '2025-03-21', 'cancelado');
INSERT INTO pedidos VALUES (134, 'Milena Fogaça', 'Açúcar', 5, 45.91, '2024-11-24', 'cancelado');
INSERT INTO pedidos VALUES (135, 'Nathan Dias', 'Leite', 9, 39.81, '2024-11-06', 'cancelado');
INSERT INTO pedidos VALUES (136, 'Caio Aragão', 'Refrigerante', 16, 47.84, '2024-10-18', 'pendente');
INSERT INTO pedidos VALUES (137, 'Gustavo Henrique Nunes', 'Biscoito', 20, 48.67, '2025-05-13', 'pendente');
INSERT INTO pedidos VALUES (138, 'Ana Beatriz Alves', 'Café', 7, 13.94, '2025-02-06', 'entregue');
INSERT INTO pedidos VALUES (139, 'Larissa Freitas', 'Café', 17, 8.55, '2025-01-18', 'pendente');
INSERT INTO pedidos VALUES (140, 'Dr. Paulo Santos', 'Feijão', 2, 11.06, '2025-01-16', 'entregue');
INSERT INTO pedidos VALUES (141, 'Carlos Eduardo da Mata', 'Farinha', 16, 26.28, '2024-09-13', 'pendente');
INSERT INTO pedidos VALUES (142, 'Sr. Caio da Paz', 'Farinha', 4, 2.69, '2025-03-27', 'cancelado');
INSERT INTO pedidos VALUES (143, 'Diego Pires', 'Feijão', 2, 20.94, '2025-08-05', 'cancelado');
INSERT INTO pedidos VALUES (144, 'Dr. Leandro Caldeira', 'Café', 2, 27.76, '2025-03-24', 'cancelado');
INSERT INTO pedidos VALUES (145, 'Srta. Olivia Farias', 'Leite', 14, 4.6, '2025-06-03', 'cancelado');
INSERT INTO pedidos VALUES (146, 'Eduarda Oliveira', 'Café', 9, 14.87, '2025-01-14', 'cancelado');
INSERT INTO pedidos VALUES (147, 'Sr. Davi Lucca Carvalho', 'Café', 19, 39.4, '2024-10-09', 'pendente');
INSERT INTO pedidos VALUES (148, 'Ana Vitória Nascimento', 'Biscoito', 9, 33.67, '2024-10-31', 'pendente');
INSERT INTO pedidos VALUES (149, 'Vitória Barros', 'Biscoito', 16, 23.66, '2025-03-15', 'cancelado');
INSERT INTO pedidos VALUES (150, 'Bruna Dias', 'Refrigerante', 12, 21.57, '2024-10-02', 'cancelado');
INSERT INTO pedidos VALUES (151, 'Srta. Emilly Aragão', 'Óleo', 4, 39.01, '2025-06-27', 'cancelado');
INSERT INTO pedidos VALUES (152, 'Diogo Jesus', 'Leite', 10, 28.4, '2024-09-29', 'cancelado');
INSERT INTO pedidos VALUES (153, 'Guilherme Cavalcanti', 'Farinha', 17, 22.84, '2024-11-12', 'pendente');
INSERT INTO pedidos VALUES (154, 'Brenda Nogueira', 'Leite', 5, 9.17, '2025-04-28', 'cancelado');
INSERT INTO pedidos VALUES (155, 'Maria Alice Cardoso', 'Açúcar', 18, 38.36, '2024-09-26', 'cancelado');
INSERT INTO pedidos VALUES (156, 'Natália Aragão', 'Leite', 7, 36.9, '2025-01-21', 'pendente');
INSERT INTO pedidos VALUES (157, 'Daniela Rezende', 'Refrigerante', 6, 29.76, '2025-07-22', 'entregue');
INSERT INTO pedidos VALUES (158, 'Dr. Theo da Mata', 'Açúcar', 13, 39.87, '2024-10-02', 'entregue');
INSERT INTO pedidos VALUES (159, 'Yuri Azevedo', 'Biscoito', 8, 38.68, '2025-02-15', 'cancelado');
INSERT INTO pedidos VALUES (160, 'Dr. Luigi Cardoso', 'Feijão', 19, 41.7, '2025-01-20', 'entregue');
INSERT INTO pedidos VALUES (161, 'Brenda Nogueira', 'Arroz', 5, 40.3, '2024-09-12', 'cancelado');
INSERT INTO pedidos VALUES (162, 'Enrico Martins', 'Farinha', 17, 49.13, '2024-12-18', 'cancelado');
INSERT INTO pedidos VALUES (163, 'Laura Silva', 'Açúcar', 10, 5.02, '2024-09-29', 'cancelado');
INSERT INTO pedidos VALUES (164, 'Lucas Gabriel Gonçalves', 'Feijão', 6, 49.79, '2025-08-13', 'cancelado');
INSERT INTO pedidos VALUES (165, 'Felipe Duarte', 'Refrigerante', 18, 49.74, '2025-01-04', 'pendente');
INSERT INTO pedidos VALUES (166, 'Dr. Cauã Silva', 'Farinha', 11, 42.07, '2025-01-24', 'pendente');
INSERT INTO pedidos VALUES (167, 'Enzo Azevedo', 'Açúcar', 2, 24.51, '2025-09-04', 'cancelado');
INSERT INTO pedidos VALUES (168, 'Lara Cavalcanti', 'Café', 20, 27.29, '2024-09-22', 'pendente');
INSERT INTO pedidos VALUES (169, 'Dr. Cauê Azevedo', 'Café', 19, 40.22, '2025-01-26', 'entregue');
INSERT INTO pedidos VALUES (170, 'Sr. Pedro Nogueira', 'Macarrão', 4, 4.62, '2024-10-21', 'entregue');
INSERT INTO pedidos VALUES (171, 'Vitor Hugo Alves', 'Macarrão', 12, 38.47, '2024-09-16', 'cancelado');
INSERT INTO pedidos VALUES (172, 'Valentina Cardoso', 'Arroz', 3, 26.08, '2024-11-23', 'cancelado');
INSERT INTO pedidos VALUES (173, 'Enrico Costela', 'Óleo', 16, 5.21, '2024-10-05', 'entregue');
INSERT INTO pedidos VALUES (174, 'Caio Cardoso', 'Biscoito', 14, 15.62, '2025-08-23', 'entregue');
INSERT INTO pedidos VALUES (175, 'Letícia Novaes', 'Óleo', 7, 24.56, '2025-06-27', 'cancelado');
INSERT INTO pedidos VALUES (176, 'Sarah Rocha', 'Óleo', 7, 38.39, '2025-03-09', 'cancelado');
INSERT INTO pedidos VALUES (177, 'Cauã Pires', 'Feijão', 17, 47.57, '2025-04-14', 'cancelado');
INSERT INTO pedidos VALUES (178, 'Luiz Gustavo Mendes', 'Macarrão', 3, 20.45, '2024-10-26', 'pendente');
INSERT INTO pedidos VALUES (179, 'Rodrigo Fernandes', 'Feijão', 2, 21.49, '2025-04-23', 'pendente');
INSERT INTO pedidos VALUES (180, 'Lara Novaes', 'Óleo', 20, 7.43, '2025-05-07', 'entregue');
INSERT INTO pedidos VALUES (181, 'Pedro Lucas Cunha', 'Leite', 16, 44.91, '2024-12-18', 'pendente');
INSERT INTO pedidos VALUES (182, 'Leonardo da Rocha', 'Leite', 6, 39.01, '2025-06-08', 'pendente');
INSERT INTO pedidos VALUES (183, 'Daniel Rezende', 'Óleo', 4, 33.88, '2024-12-18', 'cancelado');
INSERT INTO pedidos VALUES (184, 'Dr. Rodrigo Dias', 'Biscoito', 2, 10.83, '2024-09-30', 'cancelado');
INSERT INTO pedidos VALUES (185, 'Emanuella Cunha', 'Café', 12, 19.06, '2025-06-05', 'entregue');
INSERT INTO pedidos VALUES (186, 'Ana Lívia Souza', 'Arroz', 1, 41.24, '2025-08-21', 'pendente');
INSERT INTO pedidos VALUES (187, 'Luigi Barbosa', 'Açúcar', 12, 38.82, '2024-10-03', 'pendente');
INSERT INTO pedidos VALUES (188, 'Dra. Clarice Almeida', 'Arroz', 16, 38.81, '2025-06-04', 'cancelado');
INSERT INTO pedidos VALUES (189, 'Isabella Nascimento', 'Café', 1, 36.82, '2025-02-25', 'pendente');
INSERT INTO pedidos VALUES (190, 'Enzo Martins', 'Arroz', 17, 28.55, '2025-01-23', 'cancelado');
INSERT INTO pedidos VALUES (191, 'Dra. Gabrielly Dias', 'Macarrão', 10, 12.43, '2025-07-15', 'entregue');
INSERT INTO pedidos VALUES (192, 'João Felipe Nogueira', 'Farinha', 16, 26.11, '2024-09-29', 'cancelado');
INSERT INTO pedidos VALUES (193, 'Sr. Matheus Gonçalves', 'Feijão', 5, 32.27, '2024-11-23', 'entregue');
INSERT INTO pedidos VALUES (194, 'Daniela Gomes', 'Refrigerante', 1, 43.16, '2025-06-15', 'cancelado');
INSERT INTO pedidos VALUES (195, 'Ana Beatriz Costela', 'Farinha', 16, 13.74, '2025-03-31', 'cancelado');
INSERT INTO pedidos VALUES (196, 'Enrico Fogaça', 'Leite', 10, 11.64, '2025-07-02', 'pendente');
INSERT INTO pedidos VALUES (197, 'Ana Vitória da Mota', 'Farinha', 9, 39.86, '2025-06-06', 'pendente');
INSERT INTO pedidos VALUES (198, 'João Miguel da Paz', 'Feijão', 8, 17.29, '2025-06-20', 'cancelado');
INSERT INTO pedidos VALUES (199, 'Sabrina Freitas', 'Açúcar', 1, 28.44, '2024-09-24', 'pendente');
INSERT INTO pedidos VALUES (200, 'Isabella Porto', 'Arroz', 12, 43.6, '2025-05-17', 'entregue');
INSERT INTO pedidos VALUES (201, 'Vitor Nascimento', 'Café', 13, 19.85, '2025-05-18', 'cancelado');
INSERT INTO pedidos VALUES (202, 'Sra. Eduarda Pereira', 'Leite', 9, 32.8, '2024-10-06', 'entregue');
INSERT INTO pedidos VALUES (203, 'Marcelo Freitas', 'Óleo', 8, 45.22, '2025-07-21', 'cancelado');
INSERT INTO pedidos VALUES (204, 'Sra. Maria Cecília Moura', 'Macarrão', 12, 44.09, '2025-01-30', 'pendente');
INSERT INTO pedidos VALUES (205, 'Enzo Gabriel Santos', 'Macarrão', 12, 40.43, '2025-07-16', 'pendente');
INSERT INTO pedidos VALUES (206, 'João Guilherme Oliveira', 'Açúcar', 16, 13.33, '2025-08-29', 'pendente');
INSERT INTO pedidos VALUES (207, 'Cecília Novaes', 'Café', 16, 34.72, '2025-02-05', 'cancelado');
INSERT INTO pedidos VALUES (208, 'Matheus da Mota', 'Biscoito', 17, 17.81, '2025-01-11', 'pendente');
INSERT INTO pedidos VALUES (209, 'Lucas Gabriel Aragão', 'Óleo', 2, 31.01, '2024-12-10', 'pendente');
INSERT INTO pedidos VALUES (210, 'Murilo Rezende', 'Arroz', 11, 41.93, '2025-08-09', 'entregue');
INSERT INTO pedidos VALUES (211, 'Nina da Conceição', 'Café', 9, 10.24, '2024-12-20', 'pendente');
INSERT INTO pedidos VALUES (212, 'Ana Carolina Costela', 'Refrigerante', 11, 22.02, '2025-03-31', 'entregue');
INSERT INTO pedidos VALUES (213, 'Otávio Cardoso', 'Açúcar', 20, 13.0, '2024-11-18', 'cancelado');
INSERT INTO pedidos VALUES (214, 'Marcos Vinicius Alves', 'Leite', 20, 5.73, '2025-05-20', 'entregue');
INSERT INTO pedidos VALUES (215, 'Bruna Barbosa', 'Óleo', 7, 17.29, '2025-07-25', 'pendente');
INSERT INTO pedidos VALUES (216, 'Sr. Emanuel Jesus', 'Refrigerante', 9, 15.66, '2025-06-03', 'entregue');
INSERT INTO pedidos VALUES (217, 'Caio Melo', 'Feijão', 17, 49.32, '2025-06-19', 'entregue');
INSERT INTO pedidos VALUES (218, 'Ana Vitória Caldeira', 'Farinha', 6, 31.07, '2025-01-19', 'entregue');
INSERT INTO pedidos VALUES (219, 'Caio Silva', 'Leite', 18, 6.56, '2024-10-17', 'pendente');
INSERT INTO pedidos VALUES (220, 'Joana Moura', 'Macarrão', 10, 45.6, '2025-04-26', 'pendente');
INSERT INTO pedidos VALUES (221, 'Pietro Souza', 'Leite', 16, 5.27, '2025-01-13', 'pendente');
INSERT INTO pedidos VALUES (222, 'Gustavo Henrique Cardoso', 'Biscoito', 5, 3.56, '2025-09-07', 'pendente');
INSERT INTO pedidos VALUES (223, 'Vinicius da Cruz', 'Farinha', 4, 3.65, '2024-10-05', 'entregue');
INSERT INTO pedidos VALUES (224, 'Augusto Nunes', 'Café', 8, 14.5, '2024-12-08', 'cancelado');
INSERT INTO pedidos VALUES (225, 'Nathan Cardoso', 'Macarrão', 19, 34.96, '2024-11-06', 'cancelado');
INSERT INTO pedidos VALUES (226, 'Luiz Henrique Araújo', 'Biscoito', 15, 40.14, '2024-11-22', 'pendente');
INSERT INTO pedidos VALUES (227, 'Kevin da Conceição', 'Óleo', 9, 8.55, '2024-11-22', 'entregue');
INSERT INTO pedidos VALUES (228, 'Murilo Martins', 'Açúcar', 15, 7.48, '2024-11-05', 'pendente');
INSERT INTO pedidos VALUES (229, 'Eduarda Gomes', 'Farinha', 9, 28.91, '2025-03-26', 'cancelado');
INSERT INTO pedidos VALUES (230, 'Lucca Freitas', 'Arroz', 17, 11.78, '2025-04-01', 'cancelado');
INSERT INTO pedidos VALUES (231, 'Sr. Marcos Vinicius Rocha', 'Macarrão', 5, 20.71, '2024-12-26', 'entregue');
INSERT INTO pedidos VALUES (232, 'Bruna Araújo', 'Açúcar', 10, 28.37, '2025-01-03', 'cancelado');
INSERT INTO pedidos VALUES (233, 'Ana Clara Ferreira', 'Café', 10, 28.13, '2025-08-13', 'cancelado');
INSERT INTO pedidos VALUES (234, 'Felipe da Cunha', 'Açúcar', 13, 16.86, '2025-05-03', 'cancelado');
INSERT INTO pedidos VALUES (235, 'Eduarda Silva', 'Açúcar', 14, 45.99, '2024-10-12', 'pendente');
INSERT INTO pedidos VALUES (236, 'Sophia Martins', 'Refrigerante', 5, 37.64, '2025-03-27', 'pendente');
INSERT INTO pedidos VALUES (237, 'Noah Freitas', 'Farinha', 12, 41.65, '2025-09-04', 'cancelado');
INSERT INTO pedidos VALUES (238, 'Bianca Ferreira', 'Óleo', 10, 32.01, '2024-12-23', 'entregue');
INSERT INTO pedidos VALUES (239, 'Carolina Nogueira', 'Arroz', 17, 3.27, '2025-02-24', 'cancelado');
INSERT INTO pedidos VALUES (240, 'Melissa Lima', 'Leite', 17, 28.13, '2024-09-30', 'cancelado');
INSERT INTO pedidos VALUES (241, 'Sofia da Luz', 'Arroz', 15, 21.82, '2025-05-22', 'cancelado');
INSERT INTO pedidos VALUES (242, 'Murilo da Luz', 'Leite', 15, 31.28, '2025-03-10', 'cancelado');
INSERT INTO pedidos VALUES (243, 'Maria Fernanda Rezende', 'Leite', 1, 48.76, '2025-01-23', 'pendente');
INSERT INTO pedidos VALUES (244, 'Diego Vieira', 'Açúcar', 18, 9.56, '2025-02-05', 'entregue');
INSERT INTO pedidos VALUES (245, 'Sr. João Almeida', 'Óleo', 15, 37.41, '2024-10-26', 'pendente');
INSERT INTO pedidos VALUES (246, 'Luana Costela', 'Farinha', 17, 47.78, '2024-11-23', 'entregue');
INSERT INTO pedidos VALUES (247, 'Thiago Melo', 'Macarrão', 3, 39.85, '2025-05-21', 'pendente');
INSERT INTO pedidos VALUES (248, 'Ana Lívia Moraes', 'Feijão', 1, 41.13, '2025-06-29', 'entregue');
INSERT INTO pedidos VALUES (249, 'Sr. João Miguel Santos', 'Biscoito', 14, 21.48, '2025-02-16', 'entregue');
INSERT INTO pedidos VALUES (250, 'Maria Cecília Ribeiro', 'Arroz', 6, 26.95, '2025-09-07', 'pendente');
INSERT INTO pedidos VALUES (251, 'Maria Luiza Lima', 'Leite', 3, 41.4, '2025-03-01', 'entregue');
INSERT INTO pedidos VALUES (252, 'Ryan Martins', 'Café', 3, 36.17, '2025-05-06', 'entregue');
INSERT INTO pedidos VALUES (253, 'Clara Ribeiro', 'Arroz', 10, 24.27, '2024-10-06', 'cancelado');
INSERT INTO pedidos VALUES (254, 'Srta. Emanuelly Silveira', 'Óleo', 9, 29.6, '2025-06-15', 'cancelado');
INSERT INTO pedidos VALUES (255, 'Isadora Nascimento', 'Biscoito', 7, 30.22, '2025-08-02', 'pendente');
INSERT INTO pedidos VALUES (256, 'Lívia Barros', 'Farinha', 12, 49.52, '2024-09-24', 'cancelado');
INSERT INTO pedidos VALUES (257, 'Ana Carolina Rocha', 'Arroz', 12, 7.91, '2025-05-24', 'pendente');
INSERT INTO pedidos VALUES (258, 'Carolina Costa', 'Leite', 1, 9.33, '2025-08-25', 'cancelado');
INSERT INTO pedidos VALUES (259, 'Ana Carolina Cardoso', 'Refrigerante', 15, 23.82, '2024-10-14', 'cancelado');
INSERT INTO pedidos VALUES (260, 'Srta. Lorena Ramos', 'Óleo', 11, 47.8, '2025-04-13', 'pendente');
INSERT INTO pedidos VALUES (261, 'Luiz Felipe Jesus', 'Biscoito', 3, 35.73, '2024-11-24', 'entregue');
INSERT INTO pedidos VALUES (262, 'Maria Sophia Pires', 'Feijão', 11, 18.4, '2025-06-24', 'entregue');
INSERT INTO pedidos VALUES (263, 'Joaquim da Luz', 'Farinha', 13, 30.98, '2025-01-23', 'pendente');
INSERT INTO pedidos VALUES (264, 'Srta. Maria Fernanda Fernandes', 'Leite', 3, 14.81, '2024-10-01', 'cancelado');
INSERT INTO pedidos VALUES (265, 'Sr. Murilo Freitas', 'Biscoito', 10, 25.19, '2025-05-22', 'entregue');
INSERT INTO pedidos VALUES (266, 'Murilo da Mota', 'Farinha', 19, 45.34, '2025-06-28', 'pendente');
INSERT INTO pedidos VALUES (267, 'Dra. Ana Júlia da Luz', 'Refrigerante', 5, 48.29, '2025-01-14', 'pendente');
INSERT INTO pedidos VALUES (268, 'Felipe Barbosa', 'Farinha', 18, 2.94, '2025-05-29', 'entregue');
INSERT INTO pedidos VALUES (269, 'Pedro Moreira', 'Farinha', 11, 36.03, '2024-11-24', 'entregue');
INSERT INTO pedidos VALUES (270, 'Sra. Rebeca Duarte', 'Farinha', 12, 12.75, '2024-10-06', 'entregue');
INSERT INTO pedidos VALUES (271, 'Sra. Carolina Cardoso', 'Óleo', 20, 42.07, '2025-09-08', 'pendente');
INSERT INTO pedidos VALUES (272, 'Alícia Freitas', 'Café', 1, 47.57, '2025-06-29', 'pendente');
INSERT INTO pedidos VALUES (273, 'Helena Caldeira', 'Café', 19, 44.4, '2025-03-21', 'cancelado');
INSERT INTO pedidos VALUES (274, 'Alexia Nogueira', 'Refrigerante', 13, 36.54, '2025-03-21', 'pendente');
INSERT INTO pedidos VALUES (275, 'Davi Luiz Jesus', 'Açúcar', 1, 28.88, '2025-01-16', 'pendente');
INSERT INTO pedidos VALUES (276, 'Maria Vitória Azevedo', 'Arroz', 16, 20.72, '2025-06-20', 'entregue');
INSERT INTO pedidos VALUES (277, 'Ana Luiza Araújo', 'Café', 3, 35.26, '2025-01-22', 'entregue');
INSERT INTO pedidos VALUES (278, 'Sr. Luiz Fernando Gonçalves', 'Macarrão', 14, 25.99, '2025-07-30', 'entregue');
INSERT INTO pedidos VALUES (279, 'Ryan Farias', 'Leite', 20, 21.57, '2024-11-08', 'cancelado');
INSERT INTO pedidos VALUES (280, 'Dr. Daniel Ribeiro', 'Café', 8, 16.61, '2025-08-22', 'entregue');
INSERT INTO pedidos VALUES (281, 'Ana Julia Silveira', 'Biscoito', 8, 18.79, '2024-11-04', 'pendente');
INSERT INTO pedidos VALUES (282, 'Agatha Silveira', 'Feijão', 11, 35.5, '2024-11-25', 'cancelado');
INSERT INTO pedidos VALUES (283, 'Dra. Pietra Araújo', 'Leite', 19, 12.89, '2025-01-29', 'pendente');
INSERT INTO pedidos VALUES (284, 'Clara da Cunha', 'Biscoito', 2, 31.74, '2025-02-05', 'pendente');
INSERT INTO pedidos VALUES (285, 'Marina Dias', 'Café', 1, 13.53, '2025-02-14', 'entregue');
INSERT INTO pedidos VALUES (286, 'Vitor Moreira', 'Feijão', 11, 16.04, '2025-02-08', 'pendente');
INSERT INTO pedidos VALUES (287, 'Vitória Pires', 'Feijão', 2, 19.04, '2025-08-20', 'cancelado');
INSERT INTO pedidos VALUES (288, 'Maria Fernanda Farias', 'Farinha', 3, 28.11, '2024-11-21', 'pendente');
INSERT INTO pedidos VALUES (289, 'Clara Freitas', 'Biscoito', 13, 31.97, '2025-02-06', 'entregue');
INSERT INTO pedidos VALUES (290, 'Guilherme Santos', 'Macarrão', 6, 21.94, '2025-07-17', 'entregue');
INSERT INTO pedidos VALUES (291, 'Vitor Hugo Costa', 'Feijão', 13, 31.42, '2025-03-08', 'pendente');
INSERT INTO pedidos VALUES (292, 'Júlia Correia', 'Café', 1, 11.09, '2025-07-14', 'entregue');
INSERT INTO pedidos VALUES (293, 'Luiz Miguel Ribeiro', 'Macarrão', 4, 20.83, '2025-04-07', 'cancelado');
INSERT INTO pedidos VALUES (294, 'Sr. Guilherme Cardoso', 'Biscoito', 4, 48.95, '2025-04-06', 'entregue');
INSERT INTO pedidos VALUES (295, 'Vinicius Martins', 'Refrigerante', 7, 27.71, '2025-04-13', 'pendente');
INSERT INTO pedidos VALUES (296, 'Daniel Nogueira', 'Açúcar', 6, 3.09, '2025-04-20', 'entregue');
INSERT INTO pedidos VALUES (297, 'Francisco Nogueira', 'Feijão', 18, 18.08, '2024-11-02', 'entregue');
INSERT INTO pedidos VALUES (298, 'Raquel Lima', 'Óleo', 13, 29.31, '2025-01-25', 'entregue');
INSERT INTO pedidos VALUES (299, 'Joaquim Barros', 'Leite', 3, 41.62, '2025-02-28', 'pendente');
INSERT INTO pedidos VALUES (300, 'Davi da Luz', 'Óleo', 7, 29.57, '2025-04-20', 'entregue');
INSERT INTO pedidos VALUES (301, 'Sr. Yago Araújo', 'Refrigerante', 4, 38.46, '2025-02-19', 'entregue');
INSERT INTO pedidos VALUES (302, 'João Felipe Araújo', 'Óleo', 1, 21.83, '2025-01-13', 'pendente');
INSERT INTO pedidos VALUES (303, 'Davi Lucas Correia', 'Açúcar', 5, 34.38, '2025-09-08', 'cancelado');
INSERT INTO pedidos VALUES (304, 'Dr. Francisco Gonçalves', 'Refrigerante', 6, 40.27, '2025-02-22', 'pendente');
INSERT INTO pedidos VALUES (305, 'Mariane Rodrigues', 'Farinha', 9, 5.76, '2025-08-14', 'entregue');
INSERT INTO pedidos VALUES (306, 'Otávio Gonçalves', 'Arroz', 7, 40.59, '2025-07-02', 'entregue');
INSERT INTO pedidos VALUES (307, 'Alice Freitas', 'Café', 20, 28.05, '2025-04-08', 'entregue');
INSERT INTO pedidos VALUES (308, 'Helena da Paz', 'Açúcar', 4, 15.79, '2025-04-26', 'entregue');
INSERT INTO pedidos VALUES (309, 'Marcelo Fogaça', 'Açúcar', 10, 21.47, '2025-01-17', 'entregue');
INSERT INTO pedidos VALUES (310, 'Lucas Gomes', 'Biscoito', 11, 34.86, '2025-07-12', 'entregue');
INSERT INTO pedidos VALUES (311, 'Sr. Thomas Fogaça', 'Óleo', 10, 47.66, '2025-06-03', 'entregue');
INSERT INTO pedidos VALUES (312, 'Pietra da Costa', 'Açúcar', 11, 7.96, '2025-07-21', 'cancelado');
INSERT INTO pedidos VALUES (313, 'Isis Cardoso', 'Macarrão', 11, 36.27, '2025-08-26', 'cancelado');
INSERT INTO pedidos VALUES (314, 'Ana Luiza Lopes', 'Biscoito', 19, 38.46, '2025-03-15', 'entregue');
INSERT INTO pedidos VALUES (315, 'Ryan Rezende', 'Macarrão', 17, 44.9, '2025-03-31', 'entregue');
INSERT INTO pedidos VALUES (316, 'Maitê Silva', 'Biscoito', 3, 7.25, '2024-10-05', 'pendente');
INSERT INTO pedidos VALUES (317, 'Clarice Dias', 'Café', 11, 45.16, '2024-10-31', 'pendente');
INSERT INTO pedidos VALUES (318, 'Ana Vitória Moraes', 'Arroz', 14, 46.54, '2024-09-16', 'entregue');
INSERT INTO pedidos VALUES (319, 'Davi Luiz Duarte', 'Arroz', 12, 11.68, '2024-12-04', 'pendente');
INSERT INTO pedidos VALUES (320, 'João Barbosa', 'Biscoito', 9, 8.46, '2024-10-02', 'entregue');
INSERT INTO pedidos VALUES (321, 'Daniel Lima', 'Biscoito', 8, 40.21, '2025-07-15', 'cancelado');
INSERT INTO pedidos VALUES (322, 'Paulo Cunha', 'Refrigerante', 18, 24.51, '2024-12-20', 'pendente');
INSERT INTO pedidos VALUES (323, 'Eloah Carvalho', 'Arroz', 11, 45.49, '2025-02-14', 'pendente');
INSERT INTO pedidos VALUES (324, 'Guilherme Ribeiro', 'Feijão', 18, 18.09, '2025-03-05', 'pendente');
INSERT INTO pedidos VALUES (325, 'Dr. Kaique Mendes', 'Farinha', 13, 9.21, '2024-09-13', 'cancelado');
INSERT INTO pedidos VALUES (326, 'Sophie Rocha', 'Café', 17, 46.45, '2025-04-29', 'pendente');
INSERT INTO pedidos VALUES (327, 'Felipe da Cunha', 'Refrigerante', 16, 11.34, '2025-01-19', 'cancelado');
INSERT INTO pedidos VALUES (328, 'Srta. Rebeca Fogaça', 'Arroz', 2, 47.92, '2025-08-24', 'cancelado');
INSERT INTO pedidos VALUES (329, 'Dra. Gabriela da Paz', 'Óleo', 3, 25.68, '2025-05-14', 'pendente');
INSERT INTO pedidos VALUES (330, 'Sr. Kaique Barbosa', 'Biscoito', 10, 13.84, '2025-08-02', 'pendente');
INSERT INTO pedidos VALUES (331, 'Alexia Correia', 'Refrigerante', 5, 27.0, '2025-01-30', 'pendente');
INSERT INTO pedidos VALUES (332, 'Joana Carvalho', 'Macarrão', 9, 5.45, '2024-11-16', 'cancelado');
INSERT INTO pedidos VALUES (333, 'Carlos Eduardo Barbosa', 'Farinha', 20, 21.21, '2024-10-26', 'cancelado');
INSERT INTO pedidos VALUES (334, 'Davi Luiz Silveira', 'Farinha', 4, 5.36, '2025-07-19', 'entregue');
INSERT INTO pedidos VALUES (335, 'Murilo Oliveira', 'Farinha', 20, 23.31, '2025-08-23', 'entregue');
INSERT INTO pedidos VALUES (336, 'Carolina Teixeira', 'Macarrão', 6, 20.2, '2025-01-28', 'pendente');
INSERT INTO pedidos VALUES (337, 'Sra. Catarina Rodrigues', 'Biscoito', 11, 2.75, '2025-01-17', 'cancelado');
INSERT INTO pedidos VALUES (338, 'Bruno Cunha', 'Açúcar', 11, 9.18, '2025-04-16', 'cancelado');
INSERT INTO pedidos VALUES (339, 'Calebe Cardoso', 'Arroz', 5, 15.77, '2025-05-08', 'entregue');
INSERT INTO pedidos VALUES (340, 'Cauã Pereira', 'Açúcar', 11, 5.64, '2024-10-09', 'pendente');
INSERT INTO pedidos VALUES (341, 'Heitor Costa', 'Biscoito', 20, 26.87, '2025-07-10', 'cancelado');
INSERT INTO pedidos VALUES (342, 'Luiz Henrique Souza', 'Feijão', 2, 17.07, '2025-05-20', 'entregue');
INSERT INTO pedidos VALUES (343, 'Luiz Gustavo Fernandes', 'Café', 5, 47.74, '2025-04-18', 'entregue');
INSERT INTO pedidos VALUES (344, 'Bruno Fernandes', 'Refrigerante', 10, 22.01, '2025-07-16', 'cancelado');
INSERT INTO pedidos VALUES (345, 'Valentina Porto', 'Arroz', 15, 11.65, '2025-04-06', 'entregue');
INSERT INTO pedidos VALUES (346, 'Anthony Lopes', 'Arroz', 15, 4.95, '2025-03-01', 'pendente');
INSERT INTO pedidos VALUES (347, 'Luiz Henrique Cunha', 'Arroz', 6, 39.78, '2025-07-07', 'entregue');
INSERT INTO pedidos VALUES (348, 'Ana Luiza Sales', 'Biscoito', 7, 31.17, '2025-08-08', 'entregue');
INSERT INTO pedidos VALUES (349, 'Srta. Ana Laura da Mata', 'Arroz', 17, 5.66, '2025-06-02', 'pendente');
INSERT INTO pedidos VALUES (350, 'Luiz Felipe Campos', 'Açúcar', 9, 5.04, '2024-12-28', 'pendente');
INSERT INTO pedidos VALUES (351, 'Pedro Henrique da Rosa', 'Macarrão', 12, 30.38, '2025-03-20', 'entregue');
INSERT INTO pedidos VALUES (352, 'Caio Correia', 'Óleo', 15, 15.21, '2024-12-13', 'pendente');
INSERT INTO pedidos VALUES (353, 'Thomas Rocha', 'Óleo', 9, 42.61, '2025-05-20', 'entregue');
INSERT INTO pedidos VALUES (354, 'Matheus da Mota', 'Arroz', 3, 9.62, '2025-09-01', 'cancelado');
INSERT INTO pedidos VALUES (355, 'Maysa Moraes', 'Óleo', 1, 10.38, '2024-12-19', 'pendente');
INSERT INTO pedidos VALUES (356, 'Dra. Julia Duarte', 'Leite', 15, 41.77, '2025-05-01', 'pendente');
INSERT INTO pedidos VALUES (357, 'Srta. Giovanna Pires', 'Leite', 10, 3.51, '2025-05-14', 'entregue');
INSERT INTO pedidos VALUES (358, 'Bernardo Novaes', 'Refrigerante', 5, 32.94, '2025-04-22', 'cancelado');
INSERT INTO pedidos VALUES (359, 'Dr. Daniel Cavalcanti', 'Açúcar', 11, 26.6, '2025-08-05', 'entregue');
INSERT INTO pedidos VALUES (360, 'Dr. Fernando Campos', 'Refrigerante', 7, 16.59, '2025-09-03', 'cancelado');
INSERT INTO pedidos VALUES (361, 'Agatha Martins', 'Refrigerante', 11, 18.77, '2024-09-13', 'pendente');
INSERT INTO pedidos VALUES (362, 'Kaique Araújo', 'Arroz', 12, 18.51, '2025-07-16', 'entregue');
INSERT INTO pedidos VALUES (363, 'Sra. Clara Dias', 'Refrigerante', 14, 28.99, '2025-02-09', 'pendente');
INSERT INTO pedidos VALUES (364, 'Maria Julia da Costa', 'Farinha', 13, 6.07, '2025-06-05', 'pendente');
INSERT INTO pedidos VALUES (365, 'Cecília da Cruz', 'Feijão', 4, 37.82, '2025-01-23', 'cancelado');
INSERT INTO pedidos VALUES (366, 'Pedro Henrique Barbosa', 'Arroz', 8, 43.15, '2025-02-10', 'entregue');
INSERT INTO pedidos VALUES (367, 'Ana Luiza Sales', 'Óleo', 13, 17.04, '2025-01-25', 'pendente');
INSERT INTO pedidos VALUES (368, 'Gabriel Correia', 'Macarrão', 16, 30.64, '2024-09-11', 'cancelado');
INSERT INTO pedidos VALUES (369, 'Emanuella Lopes', 'Macarrão', 20, 41.86, '2024-12-11', 'entregue');
INSERT INTO pedidos VALUES (370, 'Ana Lívia Duarte', 'Café', 20, 14.16, '2024-12-29', 'cancelado');
INSERT INTO pedidos VALUES (371, 'Luana Barros', 'Óleo', 2, 24.22, '2025-08-09', 'pendente');
INSERT INTO pedidos VALUES (372, 'Bruno Rodrigues', 'Refrigerante', 9, 2.8, '2024-09-26', 'cancelado');
INSERT INTO pedidos VALUES (373, 'Enzo Gabriel Fogaça', 'Açúcar', 18, 2.91, '2025-03-01', 'pendente');
INSERT INTO pedidos VALUES (374, 'Pietra Gonçalves', 'Macarrão', 14, 45.08, '2025-06-25', 'entregue');
INSERT INTO pedidos VALUES (375, 'Igor Martins', 'Arroz', 18, 27.9, '2024-11-23', 'entregue');
INSERT INTO pedidos VALUES (376, 'Cauã Caldeira', 'Óleo', 14, 24.69, '2024-10-16', 'entregue');
INSERT INTO pedidos VALUES (377, 'Paulo Viana', 'Leite', 13, 16.75, '2025-08-27', 'entregue');
INSERT INTO pedidos VALUES (378, 'Luiz Otávio Silva', 'Refrigerante', 18, 20.48, '2025-01-25', 'pendente');
INSERT INTO pedidos VALUES (379, 'Juan Duarte', 'Óleo', 5, 11.46, '2025-03-17', 'pendente');
INSERT INTO pedidos VALUES (380, 'Maria Cecília Souza', 'Biscoito', 13, 17.95, '2024-10-10', 'entregue');
INSERT INTO pedidos VALUES (381, 'Anthony Gonçalves', 'Café', 3, 9.71, '2024-09-26', 'pendente');
INSERT INTO pedidos VALUES (382, 'Davi Luiz Gonçalves', 'Óleo', 9, 9.71, '2025-09-06', 'pendente');
INSERT INTO pedidos VALUES (383, 'Sra. Esther Barros', 'Feijão', 15, 30.92, '2025-08-25', 'cancelado');
INSERT INTO pedidos VALUES (384, 'Agatha Mendes', 'Leite', 9, 24.94, '2025-01-26', 'cancelado');
INSERT INTO pedidos VALUES (385, 'Ian Mendes', 'Biscoito', 5, 15.31, '2024-09-30', 'pendente');
INSERT INTO pedidos VALUES (386, 'Bruno Moura', 'Biscoito', 13, 15.9, '2025-08-05', 'entregue');
INSERT INTO pedidos VALUES (387, 'Breno Ramos', 'Feijão', 18, 38.49, '2024-12-06', 'pendente');
INSERT INTO pedidos VALUES (388, 'Luana Vieira', 'Feijão', 3, 11.06, '2025-01-05', 'cancelado');
INSERT INTO pedidos VALUES (389, 'Noah Ramos', 'Café', 6, 32.98, '2025-09-08', 'cancelado');
INSERT INTO pedidos VALUES (390, 'Rafael Fernandes', 'Café', 4, 38.04, '2025-02-12', 'entregue');
INSERT INTO pedidos VALUES (391, 'Lara Rezende', 'Óleo', 8, 15.72, '2025-05-08', 'pendente');
INSERT INTO pedidos VALUES (392, 'Maria Luiza Rocha', 'Arroz', 3, 32.0, '2025-06-21', 'entregue');
INSERT INTO pedidos VALUES (393, 'Pietra Azevedo', 'Farinha', 7, 32.67, '2025-07-07', 'cancelado');
INSERT INTO pedidos VALUES (394, 'Carolina Cardoso', 'Óleo', 12, 14.12, '2025-08-11', 'cancelado');
INSERT INTO pedidos VALUES (395, 'Srta. Beatriz Silva', 'Macarrão', 1, 14.88, '2025-07-15', 'pendente');
INSERT INTO pedidos VALUES (396, 'Gabrielly Alves', 'Refrigerante', 14, 6.68, '2025-02-28', 'cancelado');
INSERT INTO pedidos VALUES (397, 'Vitor Hugo Cavalcanti', 'Refrigerante', 5, 35.74, '2025-04-12', 'cancelado');
INSERT INTO pedidos VALUES (398, 'Heloísa da Rocha', 'Leite', 8, 36.05, '2024-10-01', 'cancelado');
INSERT INTO pedidos VALUES (399, 'Ana Cavalcanti', 'Refrigerante', 20, 40.61, '2025-02-28', 'pendente');
INSERT INTO pedidos VALUES (400, 'Erick Nogueira', 'Leite', 1, 17.11, '2025-03-18', 'entregue');
INSERT INTO pedidos VALUES (401, 'Calebe Cardoso', 'Açúcar', 12, 26.56, '2024-11-18', 'entregue');
INSERT INTO pedidos VALUES (402, 'Vitor Gabriel das Neves', 'Feijão', 15, 34.88, '2025-09-05', 'cancelado');
INSERT INTO pedidos VALUES (403, 'Renan Pereira', 'Óleo', 17, 5.79, '2024-11-14', 'entregue');
INSERT INTO pedidos VALUES (404, 'Alana das Neves', 'Óleo', 11, 12.53, '2025-08-03', 'cancelado');
INSERT INTO pedidos VALUES (405, 'João Pedro Carvalho', 'Arroz', 2, 9.29, '2024-12-19', 'entregue');
INSERT INTO pedidos VALUES (406, 'Anthony da Cruz', 'Farinha', 20, 23.45, '2025-01-22', 'cancelado');
INSERT INTO pedidos VALUES (407, 'Larissa Costela', 'Leite', 9, 17.69, '2024-11-16', 'entregue');
INSERT INTO pedidos VALUES (408, 'Theo Moura', 'Arroz', 16, 24.58, '2025-04-15', 'cancelado');
INSERT INTO pedidos VALUES (409, 'Joaquim da Paz', 'Macarrão', 14, 23.33, '2024-11-08', 'cancelado');
INSERT INTO pedidos VALUES (410, 'Ana Clara Costa', 'Leite', 10, 30.94, '2025-03-16', 'cancelado');
INSERT INTO pedidos VALUES (411, 'Kevin Farias', 'Biscoito', 13, 39.69, '2025-06-10', 'cancelado');
INSERT INTO pedidos VALUES (412, 'Sophia Vieira', 'Biscoito', 4, 4.74, '2024-12-04', 'entregue');
INSERT INTO pedidos VALUES (413, 'Letícia Silva', 'Feijão', 4, 39.75, '2025-04-04', 'cancelado');
INSERT INTO pedidos VALUES (414, 'Matheus Nunes', 'Biscoito', 5, 23.41, '2024-09-19', 'cancelado');
INSERT INTO pedidos VALUES (415, 'Gabriel Rodrigues', 'Leite', 1, 29.11, '2024-12-20', 'cancelado');
INSERT INTO pedidos VALUES (416, 'Srta. Ana Júlia Cavalcanti', 'Arroz', 3, 11.12, '2025-04-21', 'pendente');
INSERT INTO pedidos VALUES (417, 'Dr. Francisco Nascimento', 'Refrigerante', 6, 42.52, '2024-12-21', 'pendente');
INSERT INTO pedidos VALUES (418, 'Dr. Fernando Moreira', 'Café', 11, 17.96, '2025-04-23', 'cancelado');
INSERT INTO pedidos VALUES (419, 'João Miguel Correia', 'Refrigerante', 1, 42.22, '2025-08-31', 'pendente');
INSERT INTO pedidos VALUES (420, 'Ian da Paz', 'Arroz', 7, 35.9, '2024-11-13', 'entregue');
INSERT INTO pedidos VALUES (421, 'Rafaela Cavalcanti', 'Óleo', 17, 20.89, '2024-11-25', 'pendente');
INSERT INTO pedidos VALUES (422, 'Stephany Martins', 'Arroz', 15, 5.42, '2025-01-07', 'entregue');
INSERT INTO pedidos VALUES (423, 'Stella da Luz', 'Feijão', 8, 33.72, '2025-03-30', 'entregue');
INSERT INTO pedidos VALUES (424, 'Clarice Lopes', 'Refrigerante', 12, 21.21, '2025-04-29', 'cancelado');
INSERT INTO pedidos VALUES (425, 'Clara Gonçalves', 'Feijão', 15, 4.55, '2025-03-23', 'cancelado');
INSERT INTO pedidos VALUES (426, 'Antônio Almeida', 'Óleo', 19, 45.78, '2025-04-03', 'entregue');
INSERT INTO pedidos VALUES (427, 'Sr. João Pedro Dias', 'Macarrão', 13, 26.72, '2024-10-23', 'entregue');
INSERT INTO pedidos VALUES (428, 'João Felipe Moreira', 'Açúcar', 16, 31.9, '2025-08-26', 'cancelado');
INSERT INTO pedidos VALUES (429, 'Levi Duarte', 'Feijão', 11, 14.12, '2025-05-12', 'entregue');
INSERT INTO pedidos VALUES (430, 'Lorena Fogaça', 'Leite', 12, 15.09, '2024-11-15', 'pendente');
INSERT INTO pedidos VALUES (431, 'Srta. Yasmin Nogueira', 'Arroz', 6, 32.71, '2024-10-03', 'entregue');
INSERT INTO pedidos VALUES (432, 'Ana Lívia Azevedo', 'Óleo', 17, 15.4, '2025-02-03', 'cancelado');
INSERT INTO pedidos VALUES (433, 'Gabriela Viana', 'Óleo', 1, 41.93, '2024-10-29', 'entregue');
INSERT INTO pedidos VALUES (434, 'Emilly Jesus', 'Açúcar', 10, 46.2, '2025-05-24', 'pendente');
INSERT INTO pedidos VALUES (435, 'Eduarda da Conceição', 'Feijão', 16, 16.34, '2024-12-14', 'cancelado');
INSERT INTO pedidos VALUES (436, 'Yago Sales', 'Refrigerante', 11, 30.77, '2025-02-18', 'pendente');
INSERT INTO pedidos VALUES (437, 'Ana Clara Rodrigues', 'Farinha', 15, 41.04, '2025-05-12', 'cancelado');
INSERT INTO pedidos VALUES (438, 'Henrique Vieira', 'Macarrão', 12, 45.04, '2025-07-28', 'pendente');
INSERT INTO pedidos VALUES (439, 'Eduardo da Rosa', 'Óleo', 15, 25.83, '2025-08-23', 'cancelado');
INSERT INTO pedidos VALUES (440, 'Gabrielly Duarte', 'Açúcar', 20, 29.92, '2025-01-15', 'pendente');
INSERT INTO pedidos VALUES (441, 'João Miguel Porto', 'Macarrão', 13, 19.34, '2025-08-05', 'entregue');
INSERT INTO pedidos VALUES (442, 'Isabella Moura', 'Biscoito', 6, 28.97, '2025-06-20', 'cancelado');
INSERT INTO pedidos VALUES (443, 'João Vitor Lima', 'Feijão', 2, 8.13, '2025-03-05', 'cancelado');
INSERT INTO pedidos VALUES (444, 'Benjamin Costela', 'Óleo', 12, 22.28, '2025-08-23', 'cancelado');
INSERT INTO pedidos VALUES (445, 'Emilly Porto', 'Refrigerante', 10, 21.02, '2025-03-20', 'pendente');
INSERT INTO pedidos VALUES (446, 'Srta. Valentina Araújo', 'Refrigerante', 6, 12.47, '2024-12-21', 'pendente');
INSERT INTO pedidos VALUES (447, 'Clara Costa', 'Arroz', 8, 8.88, '2025-02-15', 'entregue');
INSERT INTO pedidos VALUES (448, 'Dra. Marcela da Mota', 'Açúcar', 2, 34.68, '2025-04-23', 'cancelado');
INSERT INTO pedidos VALUES (449, 'Sr. Paulo Freitas', 'Refrigerante', 11, 26.8, '2025-02-03', 'pendente');
INSERT INTO pedidos VALUES (450, 'Pedro Lucas Silveira', 'Arroz', 17, 11.77, '2025-05-08', 'pendente');
INSERT INTO pedidos VALUES (451, 'Ana Luiza Ramos', 'Café', 13, 14.35, '2024-12-11', 'cancelado');
INSERT INTO pedidos VALUES (452, 'Thomas Campos', 'Macarrão', 12, 35.94, '2025-01-14', 'entregue');
INSERT INTO pedidos VALUES (453, 'Breno da Mota', 'Farinha', 10, 49.11, '2024-11-22', 'pendente');
INSERT INTO pedidos VALUES (454, 'Dra. Juliana Nunes', 'Farinha', 15, 41.36, '2024-10-10', 'cancelado');
INSERT INTO pedidos VALUES (455, 'Kaique Aragão', 'Leite', 19, 11.66, '2025-04-04', 'pendente');
INSERT INTO pedidos VALUES (456, 'Sra. Beatriz Pinto', 'Café', 12, 46.1, '2024-12-29', 'pendente');
INSERT INTO pedidos VALUES (457, 'Maria Cecília Pires', 'Farinha', 3, 32.77, '2025-05-08', 'cancelado');
INSERT INTO pedidos VALUES (458, 'Vitória Azevedo', 'Leite', 10, 23.41, '2025-08-14', 'entregue');
INSERT INTO pedidos VALUES (459, 'Sra. Heloísa Jesus', 'Biscoito', 8, 35.46, '2024-12-01', 'cancelado');
INSERT INTO pedidos VALUES (460, 'Enrico Ramos', 'Açúcar', 14, 9.79, '2025-07-09', 'cancelado');
INSERT INTO pedidos VALUES (461, 'Srta. Maysa Cavalcanti', 'Óleo', 8, 39.07, '2025-08-02', 'pendente');
INSERT INTO pedidos VALUES (462, 'Fernanda da Paz', 'Açúcar', 13, 19.55, '2025-03-02', 'entregue');
INSERT INTO pedidos VALUES (463, 'Clara Sales', 'Arroz', 10, 28.78, '2025-01-25', 'entregue');
INSERT INTO pedidos VALUES (464, 'Bernardo Melo', 'Café', 18, 23.65, '2025-03-29', 'entregue');
INSERT INTO pedidos VALUES (465, 'Nicole Mendes', 'Macarrão', 16, 9.97, '2025-03-17', 'cancelado');
INSERT INTO pedidos VALUES (466, 'Emanuel da Rosa', 'Óleo', 12, 28.97, '2024-12-14', 'cancelado');
INSERT INTO pedidos VALUES (467, 'Leonardo Teixeira', 'Biscoito', 14, 15.25, '2025-07-26', 'pendente');
INSERT INTO pedidos VALUES (468, 'Miguel da Luz', 'Óleo', 5, 17.72, '2025-01-18', 'pendente');
INSERT INTO pedidos VALUES (469, 'Srta. Milena Rodrigues', 'Feijão', 5, 43.62, '2025-07-21', 'entregue');
INSERT INTO pedidos VALUES (470, 'Theo Silveira', 'Óleo', 16, 41.98, '2025-07-08', 'entregue');
INSERT INTO pedidos VALUES (471, 'Mariana Freitas', 'Feijão', 8, 15.75, '2025-08-12', 'pendente');
INSERT INTO pedidos VALUES (472, 'Davi Lucca Farias', 'Café', 9, 12.75, '2025-08-09', 'pendente');
INSERT INTO pedidos VALUES (473, 'Milena da Rocha', 'Feijão', 20, 48.37, '2025-05-18', 'entregue');
INSERT INTO pedidos VALUES (474, 'Maria Vitória Pinto', 'Leite', 13, 45.94, '2025-04-21', 'cancelado');
INSERT INTO pedidos VALUES (475, 'Luiz Henrique Correia', 'Biscoito', 13, 28.21, '2025-05-01', 'cancelado');
INSERT INTO pedidos VALUES (476, 'Clara Farias', 'Óleo', 20, 26.23, '2024-11-10', 'pendente');
INSERT INTO pedidos VALUES (477, 'Sr. Murilo Pires', 'Macarrão', 1, 28.61, '2025-04-28', 'pendente');
INSERT INTO pedidos VALUES (478, 'Alana Ribeiro', 'Açúcar', 19, 49.63, '2025-07-13', 'pendente');
INSERT INTO pedidos VALUES (479, 'Emanuella Rocha', 'Refrigerante', 18, 29.68, '2025-06-20', 'entregue');
INSERT INTO pedidos VALUES (480, 'Stephany Cavalcanti', 'Leite', 13, 43.33, '2024-11-20', 'entregue');
INSERT INTO pedidos VALUES (481, 'Davi Gonçalves', 'Óleo', 11, 47.1, '2025-07-28', 'pendente');
INSERT INTO pedidos VALUES (482, 'Joana da Mota', 'Leite', 4, 30.27, '2024-09-17', 'cancelado');
INSERT INTO pedidos VALUES (483, 'Sr. João Lucas Pires', 'Biscoito', 8, 20.9, '2025-03-05', 'entregue');
INSERT INTO pedidos VALUES (484, 'Rafael Silva', 'Feijão', 13, 12.5, '2024-09-20', 'entregue');
INSERT INTO pedidos VALUES (485, 'Amanda Rodrigues', 'Café', 16, 33.66, '2025-07-13', 'entregue');
INSERT INTO pedidos VALUES (486, 'Isabella Mendes', 'Farinha', 18, 11.49, '2024-11-21', 'cancelado');
INSERT INTO pedidos VALUES (487, 'Pedro Henrique Araújo', 'Leite', 5, 19.27, '2024-11-02', 'pendente');
INSERT INTO pedidos VALUES (488, 'Esther Costela', 'Feijão', 17, 45.14, '2024-09-25', 'cancelado');
INSERT INTO pedidos VALUES (489, 'Gustavo Henrique da Cruz', 'Feijão', 12, 34.3, '2025-03-09', 'entregue');
INSERT INTO pedidos VALUES (490, 'Vitor Fernandes', 'Arroz', 15, 20.66, '2025-07-21', 'cancelado');
INSERT INTO pedidos VALUES (491, 'Sr. Carlos Eduardo Azevedo', 'Café', 8, 46.5, '2025-05-27', 'cancelado');
INSERT INTO pedidos VALUES (492, 'Sra. Maria Moreira', 'Café', 18, 35.37, '2024-12-09', 'entregue');
INSERT INTO pedidos VALUES (493, 'Sr. Eduardo Moura', 'Refrigerante', 11, 2.99, '2024-12-19', 'cancelado');
INSERT INTO pedidos VALUES (494, 'Luiz Otávio Souza', 'Macarrão', 6, 8.26, '2025-06-20', 'entregue');
INSERT INTO pedidos VALUES (495, 'Maria da Paz', 'Café', 17, 27.63, '2025-07-12', 'pendente');
INSERT INTO pedidos VALUES (496, 'Igor Azevedo', 'Arroz', 5, 30.12, '2025-09-07', 'cancelado');
INSERT INTO pedidos VALUES (497, 'Srta. Heloísa Vieira', 'Feijão', 7, 23.2, '2025-05-18', 'pendente');
INSERT INTO pedidos VALUES (498, 'Júlia Oliveira', 'Macarrão', 12, 40.87, '2025-02-09', 'cancelado');
INSERT INTO pedidos VALUES (499, 'Srta. Esther Melo', 'Refrigerante', 20, 9.23, '2025-07-02', 'cancelado');
INSERT INTO pedidos VALUES (500, 'Samuel Rodrigues', 'Refrigerante', 9, 16.91, '2025-07-03', 'cancelado');

SELECT * FROM pedidos WHERE status = "entregue"; /*igual*/
SELECT * FROM pedidos WHERE status <> "entregue"; /*diferente*/
SELECT * FROM pedidos WHERE quantidade >= 10; /*maior ou igual*/
SELECT * FROM pedidos WHERE quantidade >= 10 AND status = "entregue"; /*duas condições*/
SELECT * FROM pedidos WHERE produto = "leite" OR produto = "café"; /*OU*/
SELECT * FROM pedidos ORDER BY cliente_nome ASC; /*ordenada em ordem crescente*/
SELECT * FROM pedidos ORDER BY cliente_nome DESC; /*ordenada em ordem decrescente*/
SELECT * FROM pedidos ORDER BY quantidade ASC; /*ordena em ordem crescente*/

SELECT * FROM pedidos /*seleciona a tabela pedidos*/
WHERE status = "entregue" /*somente resultados igual entregues*/
ORDER BY cliente_nome ASC;/*com os nomes em ordem alfabética*/

SELECT * FROM pedidos
ORDER BY quantidade DESC /*pedidos com maior quantidade*/
LIMIT 5; /*limite de registro que vai aparecer*/

SELECT * FROM pedidos
ORDER BY id ASC /*ordena id em crescente*/
LIMIT 5 OFFSET 0; /*limita em grupos, paginação*/

SELECT cliente_nome AS "Nome do Cliente" FROM pedidos /*renomeia a coluna visualmente*/
ORDER BY id ASC
LIMIT 5 OFFSET 10;	

SELECT 
cliente_nome AS "Nome do Cliente", /*seleciona mais de uma coluna e renomeia*/
data_pedido AS "Data do Pedido",
status AS "Status"
FROM pedidos
ORDER BY id ASC
LIMIT 5 OFFSET 10;

SELECT * FROM pedidos 
WHERE data_pedido 
BETWEEN "2025-08-01" AND "2025-08-31"; /*busca valores entre um campo*/

SELECT * FROM pedidos 
WHERE cliente_nome LIKE "Bruna%"; /*procura com base em informações pela metade*/

SELECT * FROM pedidos 
WHERE produto IN ("arroz", "café", "farinha"); /*procura todos os registro*/




