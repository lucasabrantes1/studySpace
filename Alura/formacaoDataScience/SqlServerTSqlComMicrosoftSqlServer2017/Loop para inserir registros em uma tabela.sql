
IF OBJECT_ID('TABELA DE NUMEROS,','U') IS NOT NULL
	DROP TABLE [TABELA DE NUMEROS]

CREATE TABLE [TABELA DE NUMEROS] ([NUMERO] INT, [STATUS] VARCHAR(200))


DECLARE @LIMITE_MINIMO INT, @LIMITE_MAXIMO INT, @CONTADOR_NOTAS INT

SET @LIMITE_MINIMO = 1
SET @LIMITE_MAXIMO = 1000


WHILE @LIMITE_MINIMO <= @LIMITE_MAXIMO
BEGIN
	SELECT @CONTADOR_NOTAS = COUNT(*) FROM [NOTAS FISCAIS] WHERE [NUMERO]

	SET @LIMITE_MINIMO = @LIMITE_MINIMO + 1
	
END

/*Sabendo que a função abaixo soma um dia a uma data:

SELECT DATEADD(DAY, 1, @DATA)
Faça um script que, a partir do dia 01/01/2017, conte o número de notas fiscais até o dia 10/01/2017. Imprima a data e o número de notas fiscais.

Dicas:

Declare variáveis do tipo DATE: DATAINICIAL e DATAFINAL;
Faça um loop testando se a data inicial é menor que a data final;
Imprima a data e o número de notas na saída do Management Studio. Não esqueça de converter as variáveis para VARCHAR;
Acrescente um dia à data.*/

DECLARE @DATAINICIAL DATE
DECLARE @DATAFINAL DATE
DECLARE @NUMNOTAS INT
SET @DATAINICIAL = '20170101'
SET @DATAFINAL = '20170110'
WHILE @DATAINICIAL <= @DATAFINAL
BEGIN
    SELECT @NUMNOTAS = COUNT(*) FROM [NOTAS FISCAIS] 
        WHERE DATA = @DATAINICIAL
    PRINT CONVERT(VARCHAR(10), @DATAINICIAL) + ' --> ' 
        + CONVERT(VARCHAR(10), @NUMNOTAS)
    SELECT @DATAINICIAL = DATEADD(DAY, 1, @DATAINICIAL)
END