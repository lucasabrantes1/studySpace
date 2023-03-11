import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		/*
		int hora;
		
		System.out.println("Quantas horas ?");
		hora = sc.nextInt();
		
		if(hora < 12 ) {
			System.out.println("Bom dia");
		}
		else if (hora < 18) {
			 System.out.println("Boa tarde");
		}
		else {
			 System.out.println("Boa noite");
		}*/
		
		/*Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.*/
		/*
		int isNegativeOrPositive;
		System.out.println("Type a number: ");
		isNegativeOrPositive = sc.nextInt();
		
		if(isNegativeOrPositive < 0) {
			System.out.println("Negative");
		} else if (isNegativeOrPositive >= 0 ) {
			System.out.println("Not negative");
		}*/
		
		
		/*Fazer um programa para ler um número inteiro e dizer se este número é par ou ímpar.*/
		/*
		int isEvenOrOdd;
		System.out.println("Type a number: ");
		isEvenOrOdd = sc.nextInt();
		
		if(isEvenOrOdd % 2 == 0 ) {
			System.out.println("Even");
		} else {
			System.out.println("Odd");
		}
		*/
		
		
		/*Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao
		Multiplos", indicando se os valores lidos são múltiplos entre si. Atenção: os números devem poder ser digitados em
		ordem crescente ou decrescente.*/
		/*
		int value1;
		int value2;
		
		value1 = sc.nextInt();
		value2 = sc.nextInt();
		
		if (value1 % value2 == 0 || value2 % value1 == 0 ) {
			System.out.println("Sao multiplos");
		}
		else {
			System.out.println("Nao sao multiplos");
		}
		*/
		
		/*Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode
		começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.*/
		/*
		int horaInicial;
		int horaFinal;
		
		
		horaInicial = sc.nextInt();
		horaFinal = sc.nextInt();
		
		int duracao;
		if(horaInicial < horaFinal) {
			duracao = horaFinal - horaInicial;
		}
		else {
			duracao = 24 - horaInicial + horaFinal;
		}
		
		System.out.println("O JOGO DUROU " + duracao + " HORA(S)");
		*/
		
		/*Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos
		seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em
		nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.*/
		double valorQualquer;
		
		
		valorQualquer = sc.nextDouble();
		
		if(valorQualquer < 0.0 || valorQualquer > 100.0 ) {
				System.out.println("Fora do intervalo");
		}else if (valorQualquer <= 25.0){
			System.out.println("Intervalo [0,25]");
		}else if (valorQualquer <= 50.0){
			System.out.println("Intervalo (25,50]");
		}else if (valorQualquer <= 75.0){
			System.out.println("Intervalo (50,75]");
		}else {
			System.out.println("Intervalo (75,100]");
		}
		

		sc.close();
	}
	

}
