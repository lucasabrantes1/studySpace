package br.com.digital.innovation.one.aula1;

import java.util.function.UnaryOperator;

public class Aula {

    public static void main(String[] args) {
        UnaryOperator<Integer> calcularValorVezesTres= valor -> valor*3;
        int valor = calcularValorVezesTres.apply(10);
        System.out.println("O resultado é : " + valor);
    }
}
