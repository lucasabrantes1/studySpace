package br.com.digital.innovation.one.aula1;

public class RecursividadeNoJava {

    public static void main(String[] args) {
        System.out.println(fatorial(5));
    }

    public static int fatorial(int valor){
        if(valor == 1) return 1;
        return valor * fatorial(valor - 1);
    }
}
