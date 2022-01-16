package br.com.digital.innovation.one.aula1;

public class FatorialComTailCall {

    public static void main(String[] args) {
        System.out.println("Fatorial: " + fatorial(5,1));
    }

    public static int fatorial(int valor, int numero) {
        if (valor == 0) {
            return numero;
        } else {
            return fatorial(valor - 1, valor * numero);
        }
    }
}
