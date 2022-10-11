DECLARE @LIMITE_MINIMO INT, @LIMITE_MAXIMO INT, @LIMITE_BREAK INT

SET @LIMITE_MINIMO = 1
SET @LIMITE_MAXIMO = 10
SET @LIMITE_BREAK = 8

WHILE @LIMITE_MINIMO <= @LIMITE_MAXIMO
BEGIN
	PRINT @LIMITE_MINIMO
	SET @LIMITE_MINIMO = @LIMITE_MINIMO + 1
	IF @LIMITE_MINIMO = @LIMITE_BREAK
	BEGIN 
		PRINT 'SAINDO POR CAUSA DO BREAK'
		BREAK
	END
END

/*Sabendo que a fun��o abaixo soma um dia a uma data:

SELECT DATEADD(DAY, 1, @DATA)
Fa�a um script que, a partir do dia 01/01/2017, conte o n�mero de notas fiscais at� o dia 10/01/2017. Imprima a data e o n�mero de notas fiscais.

Dicas:

Declare vari�veis do tipo DATE: DATAINICIAL e DATAFINAL;
Fa�a um loop testando se a data inicial � menor que a data final;
Imprima a data e o n�mero de notas na sa�da do Management Studio. N�o esque�a de converter as vari�veis para VARCHAR;
Acrescente um dia � data.*/

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