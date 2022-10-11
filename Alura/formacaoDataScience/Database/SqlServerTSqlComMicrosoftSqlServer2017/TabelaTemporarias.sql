--1 # ? Quando o sql (conexão )for encerrado essa tabela não vai existir mais, da mesma forma que eu trocar de conexão
CREATE TABLE #TABELA01 (ID VARCHAR(10) NULL, NOME VARCHAR (200) NULL)
	
	INSERT INTO #TABELA01 (ID, NOME) VALUES ('1', 'JOÃO')

	SELECT * FROM #TABELA01


--2 ## ? Vale para todas conexões, so vai ser apagada quando eu der logoff ou quando encerar o processo do sq
CREATE TABLE ##TABELA02 (ID VARCHAR(10) NULL, NOME VARCHAR (200) NULL)
	
	INSERT INTO ##TABELA02 (ID, NOME) VALUES ('1', 'PEDRO')


	SELECT * FROM ##TABELA02
