package br.com.digital.innovation.one.aula3;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Callable;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutionException;

public class Exemplo02 {

    private static final ExecutorService threadPool = Executors.newFixedThreadPool(3);

    public static void main(String[] args) {
        Long numero =20L;
        Fatorial fatorial = new Fatorial(numero);
        Future<Long> futuro = threadPool.submit(fatorial);

        System.out.println("Iniciado a tarefa de calculo do fatorial.");
        while(!futuro.isDone()){
            System.out.println("A Tarefa ainda não foi realizada..");
            try{
                Thread.sleep(500);
            }catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("Tarefa foi realizada!");
        Long resultado = 0L;
        try{
            resultado= futuro.get();
        }catch (ExecutionException | InterruptedException e){
            e.printStackTrace();
        }

        System.out.println("O Fatorioal de " + numero + " é " + resultado);

        threadPool.shutdown();

    }

    private static class Fatorial implements Callable<Long>{
        private Long numero;
        Fatorial(Long numero){
            this.numero = numero;
        }

        @Override
        public Long call(){
            Long resultado = 0L;
            resultado = calcularFatorial(numero);
            try {
                Thread.sleep(2000);
            }catch (InterruptedException e){

            }
            return resultado;
        }

        private Long calcularFatorial(Long num){
            if(num < 0){
                throw new IllegalArgumentException("Numero Deve Ser Maior que Zero");
            }
            Long resultado = 1L;
            while(num >0){
                resultado *= num;
                num--;
            }
            return resultado;
        }
    }
}
