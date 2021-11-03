package br.com.digital.innovation.one.aula1;

public class FuncaoComLambda {

    public static void main(String[] args) {
        Funcao adicionarOlaAoNome = palavra -> "Ola " + palavra;
        System.out.println(adicionarOlaAoNome.gerar("Maria"));

        Funcao mostrarTamanhoEPalavra = palavra -> palavra.length() + " - " + palavra;

        System.out.println(mostrarTamanhoEPalavra.gerar("Janaina"));
        System.out.println(mostrarTamanhoEPalavra.gerar("Pindamonhangaba"));

        Funcao espacoEntreLetras = palavra -> palavra.replace("", " ").trim();

        System.out.println(espacoEntreLetras.gerar("Pindamonhangaba"));
    }
}
