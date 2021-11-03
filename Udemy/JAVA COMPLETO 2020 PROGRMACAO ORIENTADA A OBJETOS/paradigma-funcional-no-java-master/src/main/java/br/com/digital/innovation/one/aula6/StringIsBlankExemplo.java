package br.com.digital.innovation.one.aula6;

public class StringIsBlankExemplo {
    public static void main(String[] args) {
        String espaco = "                   ";
        String nula = null;

        System.out.println(espaco.isBlank());
        System.out.println(nula.isBlank());
    }
}
