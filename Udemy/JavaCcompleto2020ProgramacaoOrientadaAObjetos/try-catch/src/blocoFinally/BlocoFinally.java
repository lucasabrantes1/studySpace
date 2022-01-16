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
 * � um bloco que cont�m o c�digo a ser executado independente de ter ocorrido u
 * n�o uma exec�o por exemplo fechar um aqruivo, conex�o de banco de dados, ou
 * outro recurso espec�fico ao final do processamento.
 */
