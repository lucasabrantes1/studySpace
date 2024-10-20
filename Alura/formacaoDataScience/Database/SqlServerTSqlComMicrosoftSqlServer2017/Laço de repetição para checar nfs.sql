IF OBJECT_ID('TABELA DE NUMERO', 'U') IS NOT NULL
 DROP TABLE [TABELA DE NUMEROS]

CREATE TABLE [TABELA DE NUMEROS] ([NUMERO] INT, [STATUS] VARCHAR (200))

DECLARE @LIMITE_MINIMO INT, @LIMITE_MAXIMO INT, @CONTADOR_NOTAS INT

SET @LIMITE_MINIMO = 1
SET @LIMITE_MAXIMO = 1000


WHILE @LIMITE_MINIMO <= @LIMITE_MAXIMO
BEGIN
	SELECT @CONTADOR_NOTAS = COUNT(*) FROM [NOTAS FISCAIS] WHERE [NUMERO] = @LIMITE_MINIMO
	IF @CONTADOR_NOTAS > 0 
		INSERT INTO [TABELA DE NUMEROS] ([NUMERO],[STATUS]) VALUES (@LIMITE_MINIMO, 'IS NOTA FISCAL')
	ELSE 
		INSERT INTO [TABELA DE NUMEROS] ([NUMERO],[STATUS]) VALUES (@LIMITE_MINIMO, 'IS NOT NOTA FISCAL')
	SET @LIMITE_MINIMO = @LIMITE_MINIMO + 1
	
END

SELECT * FROM [TABELA DE NUMEROS]