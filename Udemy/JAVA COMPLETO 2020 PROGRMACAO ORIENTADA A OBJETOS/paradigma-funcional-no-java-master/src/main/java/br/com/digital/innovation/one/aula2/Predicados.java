package br.com.digital.innovation.one.aula2;

import java.util.function.Predicate;

public class Predicados {
    public static void main(String[] args) {

        Predicate<String> estaVazio = string -> string.isEmpty();
        System.out.println(estaVazio.test(""));
        System.out.println(estaVazio.test("Israel"));

        Predicate<Integer> ehPar = numero -> numero%2 == 0;

        System.out.println("124 é par: " + ehPar.test(124));
        System.out.println("33 é par: " + ehPar.test(33));

    }
}
