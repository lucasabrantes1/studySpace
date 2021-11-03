package br.com.digital.innovation.one.aula3;

import java.util.Random;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Callable;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutionException;

public class Exemplo01 {
    private static final ExecutorService threadPool = Executors.newFixedThreadPool(3);

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        GerarNumeroAleatorios task = new GerarNumeroAleatorios();
        System.out.println("Executando a tarefa.");
        Future<Integer> futuro = threadPool.submit(task);
        while (!futuro.isDone()) {
            System.out.println("A tarefa ainda não foi processada!");
            Thread.sleep(500);
        }
        System.out.println("Tarefa Completa!");
        int numero = futuro.get();
        System.out.println("O numero gerado foi: " + numero);

        threadPool.shutdown();
    }

    private static class GerarNumeroAleatorios implements Callable<Integer> {

        @Override
        public Integer call() {
            Random random = new Random();
            try{
                Thread.sleep(5000);
            }catch (InterruptedException e){
                e.printStackTrace();
            }

            Integer aleatorio = random.nextInt(100);
            return aleatorio;
        }
    }

}
