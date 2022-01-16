package br.com.digital.innovation.one.aula2;

import java.util.function.Consumer;

public class Consumidores {

    public static void main(String[] args) {
        //apena utiliza o parametro da forma que ele foi recebido
        Consumer<String> imprimeUmaFrase = frase -> System.out.println(frase);
        Consumer<String> imprimeUmaFrase2 = System.out::println;

        imprimeUmaFrase.accept("OLA MUNDO!");
        imprimeUmaFrase2.accept("Hello World!!");
    }
}
