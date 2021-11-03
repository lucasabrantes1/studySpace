package br.com.digital.innovation.one.aula1;

import java.util.function.UnaryOperator;

public class Imutabilidade {

    public static void main(String[] args) {
        int valor = 20;
        UnaryOperator<Integer> retornarDobro = v -> v * 2;
        UnaryOperator<Integer> retornaOCubo = v -> (int) Math.pow(v,3);

        System.out.println("O doblo do valor: " + retornarDobro.apply(valor)); // retorna o doblo do valor
        System.out.println("O Cubo do valro: " + retornaOCubo.apply(valor)); //retorna o cubo do valor
        System.out.println("Valor: " + valor); //valor nao é alterado, continua o mesmo;

    }
}
