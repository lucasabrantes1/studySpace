package br.com.digital.innovation.one.aula3;

import java.util.Arrays;
import java.util.List;

public class TentandoStream {
    public static void main(String[] args) {
        List<Aluno> alunos = Arrays.asList(
                new Aluno("Maria",23)
                ,new Aluno("Marta", 34)
                ,new Aluno("Sandra",55)
                ,new Aluno("Jose", 32)
                        ,new Aluno("Ana",24)
                        ,new Aluno("Flavia", 29)
                        ,new Aluno("Sonia",43)
                        ,new Aluno("Regina", 42)
        );

        System.out.println(alunos.stream().mapToInt(p -> p.getNome().length()).min());;
        alunos.stream().filter(p-> p.getIdade() < 25).map(Aluno::getNome).forEach(System.out::println);
    }
}

class Aluno{
    private String nome;
    private int idade;

    Aluno(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public int getIdade() {
        return idade;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString(){
        return getNome() + " " + getIdade();
    }
}