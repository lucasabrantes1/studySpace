package br.com.digital.innovation.one.aula2;

public class FuncaoAltaOrdem {

    public static void main(String[] args) {
        Calculo soma = ( a, b) -> a+b;
        Calculo multiplicacao = ( a, b) -> a*b;
        Calculo subtracao = ( a, b) -> a-b;
        Calculo divisao = ( a, b) -> a/b;

        System.out.println("Soma de 12 + 13 = " + soma.calcular( 12, 13));
        System.out.println("multiplicação de 5 * 6 = " + multiplicacao.calcular( 5, 6));
        System.out.println("subtração de 15 - 6 = " + subtracao.calcular( 15, 6));
        System.out.println("divisão de 21 + 7 = " + divisao.calcular( 21, 7));

        System.out.println("Usando Funcao Alta Ordem para somar 52 + 173 = " + executarOperacao(soma, 52, 173));
    }

    public static int executarOperacao(Calculo calculo, int a, int b){
        return calculo.calcular(a, b);
    }
    //FUNÇÃO DE ALTA ORDEM
    //por parâmetro recebe outra função
    //ou ela retorna outra função
}

@FunctionalInterface
interface Calculo{
    public int calcular(int a, int b);

}