package blocoFinally;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class BlocoFinally {
	public static void main(String[] args) {
		File file = new File("C:\\temp\\in.txt");
		Scanner sc = null;
		try {
			sc = new Scanner(file);
			while (sc.hasNextLine()) {
				System.out.println(sc.nextLine());
			}
		} catch (IOException e) {
			System.out.println("Error opening file: " + e.getMessage());
		} finally {
			if (sc != null) {
				sc.close();
			}
			System.out.println("Finally block executed");
		}
	}
}

/*
 * é um bloco que contém o código a ser executado independente de ter ocorrido u
 * não uma execão por exemplo fechar um aqruivo, conexão de banco de dados, ou
 * outro recurso específico ao final do processamento.
 */
