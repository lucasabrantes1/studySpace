

CREATE FUNCTION EnderecoCompleto
(@ENDERECO VARCHAR(100), @CIDADE VARCHAR(50), @ESTADO VARCHAR(50), @CEP VARCHAR(20))
RETURNS VARCHAR(250)
AS 
BEGIN
	DECLARE @ENDERECO_COMPLETO VARCHAR(250)
	SET @ENDERECO_COMPLETO = @ENDERECO + ' - ' + @CIDADE + ' - ' + @ESTADO + ' - ' + @CEP
	RETURN @ENDERECO_COMPLETO

END

SELECT CPF, [dbo].[EnderecoCompleto]([ENDERECO 1], CIDADE, ESTADO, CEP) AS END_COMPLETO
FROM [TABELA DE CLIENTES]


ALTER FUNCTION EnderecoCompleto
(@ENDERECO VARCHAR(100), @CIDADE VARCHAR(50), @ESTADO VARCHAR(50), @CEP VARCHAR(20))
RETURNS VARCHAR(250)
AS 
BEGIN
	DECLARE @ENDERECO_COMPLETO VARCHAR(250)
	SET @ENDERECO_COMPLETO = @ENDERECO + ' , ' + @CIDADE + ' , ' + @ESTADO + ' , ' + @CEP
	RETURN @ENDERECO_COMPLETO

END