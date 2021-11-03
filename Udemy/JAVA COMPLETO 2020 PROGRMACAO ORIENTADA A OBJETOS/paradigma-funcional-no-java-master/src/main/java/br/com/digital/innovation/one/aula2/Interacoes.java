package br.com.digital.innovation.one.aula2;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Interacoes {

    public static void main(String[] args) {
        Integer[] numeros = {1,2,3,4,5};
        Stream.of(numeros).map(numero -> numero*2).forEach(System.out::println);

        String[] nomes = {"Talita", "Marcos","Tadeu","Cristina","Regina","Fernanda",
                "Joana", "Eloisa", "Bruna", "Ana","Juliana"};

        Stream.of(nomes).map(nome -> nome.concat(" Pereira da silva")).forEach(System.out::println);
        Map<Integer, List<String>> collect = Stream.of(nomes).map(nome -> nome.toUpperCase()
                .concat(" " + nome.length()))
                .collect(Collectors.groupingBy(nome -> nome.length()));
        System.out.println(collect);

        String juntandoTudo = Stream.of(nomes).collect(Collectors.joining());
        System.out.println(juntandoTudo);
    }
}
