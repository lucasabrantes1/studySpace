SELECT A.[CPF], A.[NOME], SUM(C.[QUANTIDADE] * C.[PREÇO]) AS FATURAMENTO 
FROM [TABELA DE CLIENTES] A INNER JOIN [NOTAS FISCAIS] B
ON A.CPF = B.CPF AND YEAR(B.[DATA]) = 2016 
INNER JOIN [ITENS NOTAS FISCAIS] C ON B.NUMERO = C.NUMERO
GROUP BY A.[CPF], A.[NOME]

/*Estrutura tipo, nela pode-se cria um nome pra um determinado tipo, isso e util quando estamos projetando um banco
e temos varios identificadores todos com varchar, mas podemos criar um tipo chamado identificadores e diremos que esse tipo e varchar
de 20.*/

-- APAGANDO TIPO --
--DROP TYPE nomeDoTipo

-- CRIANDO TIPO --
CREATE TYPE ListaCliente as TABLE 
(CPF VARCHAR(12) NOT NULL)

-- UTILIZANDO O TIPO DENTRO DAS VARIAVEIS --
DECLARE @Lista AS ListaCliente
INSERT INTO @Lista (CPF) VALUES ('8502682733'), ('5648641702'), ('2600586709')
SELECT * FROM @Lista



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

--Melhorando a primeira consulta

DECLARE @Lista AS ListaCliente
INSERT INTO @Lista (CPF) VALUES ('8502682733'), ('5648641702'), ('2600586709')


SELECT A.[CPF], A.[NOME], SUM(C.[QUANTIDADE] * C.[PREÇO]) AS FATURAMENTO 
FROM [TABELA DE CLIENTES] A INNER JOIN [NOTAS FISCAIS] B
ON A.CPF = B.CPF AND YEAR(B.[DATA]) = 2016 
INNER JOIN [ITENS NOTAS FISCAIS] C ON B.NUMERO = C.NUMERO
INNER JOIN @Lista D ON A.CPF = D.CPF
GROUP BY A.[CPF], A.[NOME]

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


--Criando a Stored Procedure
/*OBS: Quando passamos um tipo tabela, precisamos passar o parâmetro readOnly*/

CREATE PROCEDURE FaturamentoClientes2016 
@LISTA AS ListaCliente READONLY 
AS
SELECT A.[CPF], A.[NOME], SUM(C.[QUANTIDADE] * C.[PREÇO]) AS FATURAMENTO 
FROM [TABELA DE CLIENTES] A INNER JOIN [NOTAS FISCAIS] B
ON A.CPF = B.CPF AND YEAR(B.[DATA]) = 2016 
INNER JOIN [ITENS NOTAS FISCAIS] C ON B.NUMERO = C.NUMERO
INNER JOIN @LISTA D ON A.CPF = D.CPF
GROUP BY A.[CPF], A.[NOME]


-- EXECUTANDO A STORED PROCEDURE --

DECLARE @Lista AS ListaCliente
INSERT INTO @Lista (CPF) VALUES ('19290992743'), ('94387575700'), ('9283760794')
EXEC FaturamentoClientes2016 @LISTA = @Lista

SELECT * FROM [TABELA DE CLIENTES]


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*Construa uma SP que retorne o número de notas fiscais por dia, baseada na lista de dias passada como parâmetro.*/

CREATE TYPE ListaDatas as TABLE (
    DATANOTA date NOT NULL
)

CREATE PROCEDURE ListaNumeroNotas @ListaDatas 
    AS ListaDatas READONLY AS
SELECT DATA, COUNT(*) AS NUMERO FROM [NOTAS FISCAIS]
    WHERE DATA IN (SELECT DATANOTA FROM @ListaDatas)
GROUP BY DATA


DECLARE @ListaDatas AS ListaDatas
INSERT INTO @ListaDatas (DATANOTA) VALUES ('20180101'), 
    ('20180102'), ('20180103')
EXEC ListaNumeroNotas @ListaDatas=@ListaDatas