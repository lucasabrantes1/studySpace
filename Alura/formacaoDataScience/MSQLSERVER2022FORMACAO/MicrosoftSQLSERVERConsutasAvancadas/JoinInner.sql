

SELECT * FROM TABELA_DE_VENDEDORES;

SELECT * FROM NOTAS_FISCAIS;


/* Sabemois que temos o mesmo campo entre as tabelas acima que � o matricula, que tamb�m s�o do mesmo tipo � agora vamos contar quantas notas fiscais que cada vendedor vendeu*/

--Exemplo sem o nome do vendendor, trazendo apenas matricula
SELECT MATRICULA, COUNT(*)  AS NUMERO_NOTAS FROM NOTAS_FISCAIS GROUP BY MATRICULA;

--Exemplo com o join, trazendo o nome do vendendor
SELECT NOTAS_FISCAIS.MATRICULA, TABELA_DE_VENDEDORES.NOME, COUNT(*)  AS NUMERO_NOTAS 
FROM NOTAS_FISCAIS 
INNER JOIN TABELA_DE_VENDEDORES
ON NOTAS_FISCAIS.MATRICULA = TABELA_DE_VENDEDORES.MATRICULA
GROUP BY NOTAS_FISCAIS.MATRICULA, NOME;

--Exemplo utilizando aliass
SELECT NF.MATRICULA, TV.NOME, COUNT(*)  AS NUMERO_NOTAS 
FROM NOTAS_FISCAIS as NF
INNER JOIN TABELA_DE_VENDEDORES AS TV
ON NF.MATRICULA = TV.MATRICULA
GROUP BY NF.MATRICULA, NOME;

--Boas praticas
/*Sempre qeue tivermos por exemplo uma tabela como NOTAS FISCAIS E TABELA DE VENDEDORES ONDE � uma rela�ao de varias para 1 n  to 1. 

A tabela de vendedores vai ter menos linhas ou seja hierarquicamente ela est� acima das notas fiscais , o que significa que para que a notas fiscais existas a tabela de vendedores tem que existir primeiro ent�o geralmente colocamos no from a tabela superior.*/
SELECT NF.MATRICULA, TV.NOME, COUNT(*)  AS NUMERO_NOTAS 
FROM TABELA_DE_VENDEDORES AS TV
INNER JOIN NOTAS_FISCAIS as NF
ON NF.MATRICULA = TV.MATRICULA
GROUP BY NF.MATRICULA, NOME;



/*Em exerc�cios anteriores, pretend�amos obter os produtos que venderam mais que 394000 litros e para isso executamos a seguinte consulta.*/
SELECT CODIGO_DO_PRODUTO, SUM(QUANTIDADE) AS QUANTIDADE FROM ITENS_NOTAS_FISCAIS 
GROUP BY CODIGO_DO_PRODUTO HAVING SUM(QUANTIDADE) > 394000 
ORDER BY SUM(QUANTIDADE) DESC;
/*Dito isso, e levando em considera��o os comandos da consulta, desejamos que na resposta desta consulta apare�a n�o somente o c�digo do produto, mas tamb�m o nome do produto.
Com este cen�rio em mente, como podemos resolver esse tipo de solicita��o?
*/


SELECT * FROM ITENS_NOTAS_FISCAIS
SELECT * FROM TABELA_DE_PRODUTOS


SELECT 
	TP.NOME_DO_PRODUTO, INF.CODIGO_DO_PRODUTO, SUM(INF.QUANTIDADE) AS QUANTIDADE
FROM
	ITENS_NOTAS_FISCAIS AS INF
INNER JOIN 
	TABELA_DE_PRODUTOS AS TP ON INF.CODIGO_DO_PRODUTO = TP.CODIGO_DO_PRODUTO
GROUP BY 
	TP.NOME_DO_PRODUTO, INF.CODIGO_DO_PRODUTO  
HAVING 
	SUM(INF.QUANTIDADE) > 394000 
ORDER BY
	SUM(INF.QUANTIDADE) DESC;


SELECT INF.CODIGO_DO_PRODUTO, TP.NOME_DO_PRODUTO, SUM(INF.QUANTIDADE) AS QUANTIDADE FROM ITENS_NOTAS_FISCAIS  INF
INNER JOIN TABELA_DE_PRODUTOS TP 
ON INF.CODIGO_DO_PRODUTO = TP.CODIGO_DO_PRODUTO
GROUP BY INF.CODIGO_DO_PRODUTO, TP.NOME_DO_PRODUTO HAVING SUM(INF.QUANTIDADE) > 394000 
ORDER BY SUM(INF.QUANTIDADE) DESC;