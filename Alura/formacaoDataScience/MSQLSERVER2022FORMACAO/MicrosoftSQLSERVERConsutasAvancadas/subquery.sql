SELECT DISTINCT BAIRRO FROM TABELA_DE_VENDEDORES;

SELECT * FROM TABELA_DE_CLIENTES 
WHERE BAIRRO IN ('Copacabana', 'Jardims', 'Santo Amaro', 'Tijuca');

SELECT * FROM TABELA_DE_CLIENTES 
WHERE BAIRRO IN (select);
