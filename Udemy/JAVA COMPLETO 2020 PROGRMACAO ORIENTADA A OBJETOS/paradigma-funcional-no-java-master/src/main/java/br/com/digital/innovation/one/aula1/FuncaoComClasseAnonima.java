package br.com.digital.innovation.one.aula1;

public class FuncaoComClasseAnonima {
    public static void main(String[] args) {

        Funcao colocarPrefixoSenhorNaString = new Funcao() {
            @Override
            public String gerar(String palavra){
                return "Sr " + palavra;
            }
        };

        Funcao mudarTextoMaiuscula = new Funcao() {
            @Override
            public String gerar(String palavra) {
                return palavra.toUpperCase();
            }
        };

        System.out.println(colocarPrefixoSenhorNaString.gerar("Sebastião"));
        System.out.println(mudarTextoMaiuscula.gerar("Minha frase toda em maiucula"));

    }
}
