/*Tras o catalago de todas as colunas (caracteristicas) de uma tabela*/
EXEC sp_columns @table_name = 'TABELA DE CLIENTES', @table_owner = 'dbo'

/* Lista todas as tabelas que começam com TAB*/
EXEC sp_tables @table_name = 'TAB%', @table_owner = 'dbo', @table_qualifier = 'SUCOS_VENDAS'