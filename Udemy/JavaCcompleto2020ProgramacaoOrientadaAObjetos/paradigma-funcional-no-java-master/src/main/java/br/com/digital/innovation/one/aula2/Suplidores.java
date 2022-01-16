package br.com.digital.innovation.one.aula2;

import java.util.function.Supplier;

public class Suplidores {

    public static void main(String[] args) {
        Supplier<Pessoa> suppliers = () -> new Pessoa();
        System.out.println(suppliers.get());

        Supplier<Pessoa> pessoa = Pessoa::new;
        System.out.println(pessoa.get());


    }
}

class Pessoa{

    private String nome;
    private Integer idade;

    public Pessoa(){
        this.nome = "Antonio";
        this.idade = 39;
    }

    @Override
    public String toString() {
        return "nome: " + this.nome + " idade: " + this.idade;
    }
}
