CREATE DATABASE SALES_VENDAS_2
ON   
( NAME = Sales_dat,  
    FILENAME = 'C:\TEMP\DATA\SALES_VENDAS_2.mdf',  
    SIZE = 10,  
    MAXSIZE = 50,  
    FILEGROWTH = 5 )  
LOG ON  
( NAME = Sales_log,  
    FILENAME = 'C:\TEMP\DATA\SALES_VENDAS_2.ldf',  
    SIZE = 5MB,  
    MAXSIZE = 25MB,  
    FILEGROWTH = 5MB ) ;  
GO  