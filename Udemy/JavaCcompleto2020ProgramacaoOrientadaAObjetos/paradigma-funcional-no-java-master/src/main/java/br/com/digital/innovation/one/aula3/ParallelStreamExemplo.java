package br.com.digital.innovation.one.aula3;

import java.util.stream.IntStream;
import java.util.List;
import java.util.Arrays;

public class ParallelStreamExemplo {

    public static void main(String[] args) {
        long inicio = System.currentTimeMillis();
        IntStream.range(1,100000).forEach(num-> fatorial(num)); //serial
        long fim = System.currentTimeMillis();
        System.out.println("Tempo gasto para processar em Serial: " + (fim - inicio));

        inicio = System.currentTimeMillis();
        IntStream.range(1,100000).parallel().forEach(num-> fatorial(num)); //Parallel
        fim = System.currentTimeMillis();
        System.out.println("Tempo gasto para processar em Parallel: " + (fim - inicio));

        List<String> nomes = Arrays.asList("Ana","Joao", "Maria", "Olivia", "Antonio","Marlene");
        //maneiras de usar o parallel
        nomes.stream().parallel().forEach(System.out::println);
        System.out.println("------");
        nomes.parallelStream().forEach(System.out::println);

    }

    public static long fatorial(long f){
        if(f == 0 || f == 1) return 1;
        long resultado = 1;
        for (int i = 2; i <= f; i++){
            resultado*=i;
        }
        return resultado;
    }
}
