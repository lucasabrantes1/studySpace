package br.com.digital.innovation.one.aula1;

public class TestandoInterfaceFunciona {

    public static void main(String[] args) {

        Funcao1 gerarValor = valor -> "Sr " + valor;

        System.out.println(gerarValor.gerar("João"));

        Funcao1 mudarPraMaiuscula = valor -> valor.toUpperCase();

        System.out.println(mudarPraMaiuscula.gerar("Texto em maiúscula"));

    }

}

@FunctionalInterface
interface Funcao1 {
    String gerar(String valor);

    default void imprimir(String valor){
        System.out.println(valor);
    }
}