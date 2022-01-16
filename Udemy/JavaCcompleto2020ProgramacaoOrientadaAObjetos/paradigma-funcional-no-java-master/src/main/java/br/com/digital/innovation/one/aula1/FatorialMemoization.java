package br.com.digital.innovation.one.aula1;

import java.util.HashMap;
import java.util.Map;

public class FatorialMemoization {

    public static Map<Integer, Integer> MAPA_FATORIAL = new HashMap<>();

    public static void main(String[] args) {
        long i = System.nanoTime();
        System.out.println("Fatorial: " + fatorial(10));
        long f = System.nanoTime();
        System.out.println(f-i);

        i = System.nanoTime();
        System.out.println("Fatorial: " + fatorial(10));
        f = System.nanoTime();
        System.out.println(f-i);

    }

    public static int fatorial(int valor){
        if(valor == 1) return valor;

        if(MAPA_FATORIAL.containsKey(valor)){
            return MAPA_FATORIAL.get(valor);
        }else {
            int resultado = valor * fatorial(valor - 1);
            MAPA_FATORIAL.put(valor, resultado);
            return resultado;
        }
    }
}
