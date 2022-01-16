package br.com.digital.innovation.one.aula2;

import java.util.function.Function;

public class Funcoes {

    public static void main(String[] args) {

        Function<String, String> retornarNomeAoContrario = nome -> new StringBuilder(nome).reverse().toString();
        System.out.println(retornarNomeAoContrario.apply("israel"));

        Function<String, Integer> coverterStringParaInteiro = string -> Integer.valueOf(string);
        System.out.println(coverterStringParaInteiro.apply("233"));

        Function<String, Integer> coverterStringParaInteiroEDobrar = string -> Integer.valueOf(string) * 2;
        System.out.println(coverterStringParaInteiroEDobrar.apply("25"));


    }
}
