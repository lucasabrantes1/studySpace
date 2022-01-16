package br.com.digital.innovation.one.aula5;

import java.io.*;
import java.net.URL;
import java.util.stream.Collectors;

public class InferenciaExemplo {
    public static void main(String[] args) throws IOException{
        printarNomeCompleto("João", "das Neves");
        printarSoma(7,12);
        printarSoma(7,7,7);

        System.out.println("------ Codico fonte do site --------\n");
        connectAndPrintURLJavaOracle();
        int nucleos = Runtime.getRuntime().availableProcessors();
        System.out.println("nucleos: " + nucleos);
        

        /* sem a inferencia
        URL url = new URL("https://docs.oracle.com/javase/10/language/");
        URLConnection urlConnection = url.openConnection();
        BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

       String texto =  br.lines().map(text -> text.replace(">", ">\n")).collect(Collectors.joining());
        System.out.println(removeTags(texto));
        */
        //Codigo abaixo usado para salvar os dados em um arquivo

       // FileWriter fileWriter = new FileWriter("texto.txt");
       // PrintWriter printWriter = new PrintWriter(fileWriter);
       // printWriter.println(texto);
       // printWriter.close();


    }

    public static void printarNomeCompleto(String nome, String sobrenome){
        var nomeCompleto = String.format("%s %s",nome,sobrenome);
        System.out.println(nomeCompleto);
    }

    public static void printarSoma(int a, int b){
        var soma = a + b;
        System.out.println(soma);
    }

    public static void printarSoma(int... numeros){
        var soma = 0;
        if (numeros.length > 0) {

            for (var numero : numeros) {
                soma+=numero;
            }
            System.out.println(soma);
        }
    }
    private static void connectAndPrintURLJavaOracle() throws IOException{
        var url = new URL("https://docs.oracle.com/javase/10/language/");
        var urlConnection = url.openConnection();

        try(var br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()))){
            String texto =  br.lines().map(text -> text.replace(">", ">\n"))
                    .collect(Collectors.joining());
            System.out.println(texto);
        }catch (IOException e){
            e.printStackTrace();
        }

    }




    //nao consegue utilizar

    //var nao pode ser usado/utilizado nos atributos de classes, nivel de classes
    //nao pode ser utilizado no parâmetros de métodos
    //nao é possível usar inferência em variável locais que não foram inicializadas

}
