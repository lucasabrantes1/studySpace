--1 # ? Quando o sql (conex�o )for encerrado essa tabela n�o vai existir mais, da mesma forma que eu trocar de conex�o
CREATE TABLE #TABELA01 (ID VARCHAR(10) NULL, NOME VARCHAR (200) NULL)
	
	INSERT INTO #TABELA01 (ID, NOME) VALUES ('1', 'JO�O')

	SELECT * FROM #TABELA01


--2 ## ? Vale para todas conex�es, so vai ser apagada quando eu der logoff ou quando encerar o processo do sq
CREATE TABLE ##TABELA02 (ID VARCHAR(10) NULL, NOME VARCHAR (200) NULL)
	
	INSERT INTO ##TABELA02 (ID, NOME) VALUES ('1', 'PEDRO')


	SELECT * FROM ##TABELA02
