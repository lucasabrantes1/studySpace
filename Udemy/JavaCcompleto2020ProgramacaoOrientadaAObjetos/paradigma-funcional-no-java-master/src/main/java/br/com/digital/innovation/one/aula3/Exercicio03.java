package br.com.digital.innovation.one.aula3;

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.Random;

public class Exercicio03 {

    private static final ExecutorService threadPool = Executors.newFixedThreadPool(3);

    public static void main(String[] args) {
        GerarNumeroAleatorio aleatorio1 = new GerarNumeroAleatorio();
        GerarNumeroAleatorio aleatorio2 = new GerarNumeroAleatorio();
        GerarNumeroAleatorio aleatorio3 = new GerarNumeroAleatorio();

        Future<Integer> futuro1 = threadPool.submit(aleatorio1);
        Future<Integer> futuro2 = threadPool.submit(aleatorio2);
        Future<Integer> futuro3 = threadPool.submit(aleatorio3);

        System.out.println("iniciando as tarefas");
        while (!futuro1.isDone() && !futuro2.isDone() && !futuro3.isDone()){

            System.out.println("Tarefa ainda nao foi realizada");
            try{
                Thread.sleep(500);
            }catch(InterruptedException e){
                e.printStackTrace();
            }
        }
        try{
            int resultado1 = futuro1.get();
            int resultado2 = futuro2.get();
            int resultado3 = futuro3.get();

            int soma = resultado1 + resultado2 +resultado3;
            System.out.println("A Soma dos 3 numeros aleatorios é " + soma);

        }catch(InterruptedException | ExecutionException e ){
            e.printStackTrace();
        }

        threadPool.shutdown();

    }

    private static class GerarNumeroAleatorio implements Callable<Integer>{

        @Override
        public Integer call(){
            Integer resultado = 0;
            Random aleatorio = new Random();
            resultado = aleatorio.nextInt(20);
            try{
                Thread.sleep(2000);
            }catch(InterruptedException e){
                e.printStackTrace();
            }
            System.out.println("Numero sorteado: " + resultado);
            return resultado;
        }
    }
}
