package br.com.digital.innovation.one.aula6;

public class StringRepeat {
    public static void main(String[] args) {
        String nome = "Joao";
        long start = 0,end = 0;

        start = System.currentTimeMillis();
        System.out.println(nome.repeat(1000));
        end = System.currentTimeMillis();
        System.out.println("duracao: "+(end-start));

        start = System.currentTimeMillis();
        String aux = "";
        for (int i = 0; i < 1000; i++) {
            aux+=nome;
        }
        System.out.println(aux);
        end = System.currentTimeMillis();
        System.out.println("duracao: "+(end-start));
    }
}
