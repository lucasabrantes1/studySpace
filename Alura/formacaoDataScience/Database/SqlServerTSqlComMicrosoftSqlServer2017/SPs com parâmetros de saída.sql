/*Busca o n�mero de notas fiscais e o valor de
 faturamento daquele cliente em um determinado ano*/

 SELECT COUNT(*) FROM [NOTAS FISCAIS] WHERE CPF = '9283760794'
 AND YEAR([DATA]) = 2016

 SELECT SUM(QUANTIDADE * [PRE�O]) FROM [ITENS NOTAS FISCAIS] B
 INNER JOIN [NOTAS FISCAIS] A ON A.NUMERO = B.NUMERO 
WHERE CPF = '9283760794'
 AND YEAR([DATA]) = 2016



 --CRIANDO PROCEDURE
 -- OUTPUT DEPOS DA DECLARACAO DA VARIAVEL ELA PODE SER UTILIZADA POR QUEM CHAMOU COMO REFERENCIA, (USAR LA NA FRENTE)
 CREATE PROCEDURE RetornaValores
 @CPF VARCHAR(12),
 @ANO AS INT,
 @NUM_NOTAS AS INT OUTPUT,
 @FATURAMENTO AS FLOAT OUTPUT
 AS
 BEGIN
	SELECT @NUM_NOTAS = COUNT(*) FROM [NOTAS FISCAIS] WHERE CPF = @CPF
	AND YEAR([DATA]) = @ANO

	SELECT @FATURAMENTO = SUM(QUANTIDADE * [PRE�O]) FROM [ITENS NOTAS FISCAIS] B
	INNER JOIN [NOTAS FISCAIS] A ON A.NUMERO = B.NUMERO 
	WHERE CPF = @CPF
	AND YEAR([DATA]) = @ANO

 END

 --CHAMANDO A SP CRIADA
 --OBS: Como a variavel esta sendo passado como referencia deve se utilizar o output

 DECLARE @NUMERO_NOTAS INT, @FATURAMENTO FLOAT
 DECLARE @CPF AS VARCHAR(12), @ANO AS INT
 SET @CPF = '9283760794'
 SET @ANO = 2017
 EXEC RetornaValores @CPF = @CPF, @ANO = @ANO, 
 @NUM_NOTAS = @NUMERO_NOTAS OUTPUT, @FATURAMENTO = @FATURAMENTO OUTPUT
 SELECT @NUMERO_NOTAS, @FATURAMENTO



 /*Construa uma SP (nome NumNotasSP) cujos par�metros s�o uma data, 
 passada como valor, e o n�mero de notas, passado como refer�ncia. 
 Depois, fa�a um script onde, na vari�vel @NUMNOTAS, some as notas do dia 01/01/2017 e 02/01/2017.

Dica: Na SP, crie uma vari�vel auxiliar e some da vari�vel que � passada como refer�ncia.*/


CREATE PROCEDURE NumNotasSP
@DATA AS DATE,
@NUMNOTAS AS INT OUTPUT
AS
BEGIN
    DECLARE @NUMNOTASLOCAL INT
    SELECT @NUMNOTASLOCAL = COUNT(*) 
        FROM [NOTAS FISCAIS] WHERE [DATA] = @DATA
    SET @NUMNOTAS = @NUMNOTAS + @NUMNOTASLOCAL
END


DECLARE @DATA DATE
DECLARE @NUMNOTAS INT
SET @NUMNOTAS = 0
SET @DATA = '20170101'
EXEC NumNotasSP @DATA = @DATA, @NUMNOTAS = @NUMNOTAS OUTPUT
SET @DATA = '20170102'
EXEC NumNotasSP @DATA = @DATA, @NUMNOTAS = @NUMNOTAS OUTPUT
PRINT @NUMNOTAS