package br.com.digital.innovation.one.aula6;

import java.util.function.Function;

public class InferenciaLambda {
    public static void main(String[] args) {
        Function<Integer, Double> divisaoPor2 = (var valor) -> valor / 2.0;
        System.out.println(divisaoPor2.apply(12357));
        System.out.println(divisaoPor2.apply(7));
    }
}
