DECLARE @IDADE INT 
DECLARE @NOME VARCHAR(200)
DECLARE @DATA DATE

DECLARE @IDADE2 INT, @NOME2 VARCHAR(200), @DATA2 DATE

SET @IDADE = 20
--PRINT @IDADE

SET @NOME = 'JO�O DA SILVA'
--PRINT @NOME

SET @DATA = '20180517'
--PRINT @DATA

DECLARE @CPF VARCHAR(12)
SET @CPF = '2600586709'


--SELECT NOME, [DATA DE NASCIMENTO], IDADE FROM [TABELA DE CLIENTES]
--WHERE CPF = @CPF

SELECT @NOME2 = NOME, @DATA2 = [DATA DE NASCIMENTO], @IDADE2 = IDADE
FROM [TABELA DE CLIENTES]
WHERE CPF = @CPF

PRINT @NOME2
PRINT @DATA2
PRINT @IDADE2