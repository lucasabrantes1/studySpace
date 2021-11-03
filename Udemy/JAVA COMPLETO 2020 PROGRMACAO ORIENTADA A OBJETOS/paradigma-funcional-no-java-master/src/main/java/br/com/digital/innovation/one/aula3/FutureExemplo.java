package br.com.digital.innovation.one.aula3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.stream.Collectors;

public class FutureExemplo {

    private static final ExecutorService pessoasParaExecutarTarefa = Executors.newFixedThreadPool(3);

    public static void main(String[] args) {
        Casa casa = new Casa(new Quarto());
        casa.obterAfazeresDaCasa().forEach(atividade -> pessoasParaExecutarTarefa.submit(()-> atividade.realizar()));
        List<Future> futuros = casa.obterAfazeresDaCasa().stream()
                .map(atividade -> pessoasParaExecutarTarefa.submit(()->atividade.realizar()))
                .collect(Collectors.toList());

        while (!futuros.stream().allMatch(Future::isDone)){
            System.out.println("Tarefa ainda nao foi realizada");
        }
        pessoasParaExecutarTarefa.shutdown();
    }
}

class Casa{

    private List<Comodo> comodos;

    Casa(Comodo... comodos){
        this.comodos = Arrays.asList(comodos);
    }

    List<Atividade> obterAfazeresDaCasa(){
        return this.comodos.stream().map(Comodo::obterAfazeresDoComodo)
                .reduce(new ArrayList<Atividade>(),(pivo,atividades) -> {pivo.addAll(atividades);
                return pivo;
                });
    }
}

interface Atividade{

   void realizar();
}

abstract class Comodo{

    abstract List<Atividade> obterAfazeresDoComodo();
}

class Quarto extends Comodo{

    @Override
    List<Atividade> obterAfazeresDoComodo(){

        return Arrays.asList(
                this::getArrumarACama,
                this::varrerOQuarto,
                this::arrumarGuardaRoupa
        );
    }

    private void getArrumarACama(){
        System.out.println("Arrumando cama");
    }

    private void varrerOQuarto(){
        System.out.println("Varrendo o Quarto");
    }

    private void arrumarGuardaRoupa(){
        System.out.println("Arrumar o Guarda roupa");
    }
}