package br.com.digital.innovation.one.aula6;

import java.util.Collection;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;

public class CollectionExemplo {
    public static void main(String[] args) {
       // Collection<String> nomes = Arrays.asList("João", "Samuel", "Pedro", "Fabiana"); //maneira antiga
        Collection<String> nomes = List.of("João", "Samuel", "Pedro", "Fabiana"); // Set.of()

        System.out.println(nomes);

    }
}
