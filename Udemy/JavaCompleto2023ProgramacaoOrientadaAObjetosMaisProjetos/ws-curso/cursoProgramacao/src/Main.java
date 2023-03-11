import java.util.Locale;
import java.util.Scanner;


public class Main {

	public static void main(String[] args) {
		
		int y = 32;
		double x = 10.35784;
		/*Imprimir variaveis e/ou textos*/
		
		System.out.println(y);
		System.out.println("Boa tarde!");
		
		/*Imprimior variaveis com ponto, e controlando a quantidade de casas*/
		Locale.setDefault(Locale.US);
		System.out.printf("%.2f%n",x);
		System.out.printf("%.4f%n",x);
		
		/*Concatenar*/
		System.out.printf("RESULTADO = " + x + " METROS");
		
		/*Concatenar varios elementos em um mesmo comando de escrita utilizando o printf*/
		System.out.printf("RESULTADO = %.2f metros%n", x);
		
		
		/*Concatenar varios elementos em um mesmo comando de escrita utilizando o printf
		%f	ponto flutuante  4000.0;
		%d	inteiro 31;
		%s	texto "Maria";
		%n	quebra de linha
		*/
		
		
		String nome = "Maria";
		int idade = 31;
		double renda = 4000.0;
		System.out.printf("%s tem %d anos e ganha R$ %.2f reais%n%n%n%n", nome, idade, renda);

		
		/*EXERCÍCIO DE FIXAÇÃO
		 
		    Em seguida, usando os valores das variáveis, produza a
			seguinte saída na tela do console:
			Products:
			Computer, which price is $ 2100,00
			Office desk, which price is $ 650,50
			Record: 30 years old, code 5290 and gender: F
			Measue with eight decimal places: 53,23456700
			Rouded (three decimal places): 53,235
			US decimal point: 53.235
		 */
		
		String product1 = "Computer";
		String product2 = "Office desk";
		int age = 30;
		int code = 5290;
		char gender = 'F';
		double price1 = 2100.0;
		double price2 = 650.50;
		double measure = 53.234567;
		
		
		System.out.printf("%n %s, which price is %.1f%n %s, "
				+ "which price is %.2f%n "
				+ "Record: %d years old, code %d and gender: %c%n "
				+ "Measue with eigh decimal places: %.8f%n "
				+ "Rouded (three decimal places): %.3f%n",
				product1, price1, product2, price2, age, code, gender, measure, measure);
		Locale.setDefault(Locale.US);
		System.out.printf(" US decimal point: %.3f%n", measure);
		System.out.printf("%n%n%n%n%n%n");
		
		
		
		/*Processamento de dados em Java, Casting*/
		/*EXEMPLO - 1*/
		int x2, y2;
		x2 = 5;
		y2 = 2 * x2;
		System.out.println(x2);
		System.out.println(y2);
		
		System.out.printf("%n%n");
		
		/*EXEMPLO - 1*/
		int x3;
		double y3;
		x3 = 5;
		y3 = 2 * x3;
		System.out.println(x3);
		System.out.println(y3);
		
		System.out.printf("%n%n");
		
		
		/*EXEMPLO - 3*/
		double b, B, h, area;
		b = 6.0;
		B = 8.0;
		h = 5.0;
		
		area = (b + B) / 2.0 * h;
		System.out.println(area);
		
		System.out.printf("%n%n");
		
		
		/*EXEMPLO - 4 avisando para o compilador retornar o valor em double cast*/
		
		int a1, b1;
		double resultado;
		a1 = 5;
		b1 = 2;
		resultado = (double) a1 / b1;
		System.out.println(resultado);
		
		System.out.printf("%n%n");
		
		
		/*EXEMPLO - 5  cast*/
		double a2;
		int b2;
		a2 = 5.0;
		b2 = (int) a2;
		System.out.println(b2);
		System.out.printf("%n%n%n%n%n%n");
		
		
		
		/*Entrada de dados me java*/System.out.println("Entrada de dados me java");
		
		Scanner sc = new Scanner(System.in);
		/*
		String x4;
		x4 = sc.next();
		System.out.println("você digitou: " + x4);
		
		/*Para ler um número inteiro*/
		/*
		int x5;
		x5 = sc.nextInt();
		System.out.println("Você digitou: " + x5);
		*/
		
	
		
		/*Para ler um número com ponto flutuante*/
		
		double x6;
		x6 = sc.nextDouble();
		System.out.println("Você digitou: " + x6);
		
		
		sc.close();
		


	}

}
