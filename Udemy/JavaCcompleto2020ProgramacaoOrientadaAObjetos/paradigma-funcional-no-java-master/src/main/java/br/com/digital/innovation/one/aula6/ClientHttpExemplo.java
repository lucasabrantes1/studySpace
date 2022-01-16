package br.com.digital.innovation.one.aula6;

import java.io.IOException;
import java.net.ProxySelector;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;


public class ClientHttpExemplo {

    private static ExecutorService executor = Executors.newFixedThreadPool(6, new ThreadFactory(){
        @Override
        public Thread newThread(Runnable r){
            Thread thread = new Thread(r);
            System.out.println("Nova thread cliada: " + (thread.isDaemon()?"daemon":"") + " Thread Group: " + thread.getThreadGroup());
            return thread;
        }
    });

    public static void main(String[] args) throws IOException, InterruptedException {
        connectAkamaiHttpClient();
    }


    public static void connectAkamaiHttpClient(){
        System.out.println("Running HTTP/2...");

        try{
            HttpClient cliente = HttpClient.newBuilder()
                    .version(HttpClient.Version.HTTP_2)
                    .proxy(ProxySelector.getDefault())
                    .build();
            long start =  System.currentTimeMillis();

            HttpRequest request = HttpRequest.newBuilder()
                    .GET()
                    .uri( URI.create("https://http2.akamai.com/demo/h2_demo_frame.html"))
                    .build();
            HttpResponse<String> response = cliente.send(request, HttpResponse.BodyHandlers.ofString());

            System.out.println("Status code: " + response.statusCode());
            System.out.println("Response Header: " + response.headers());
            String responseBody = response.body();
            System.out.println(responseBody);
            List<Future<?>> futures = new ArrayList<>();
            System.out.println("=======================");
            responseBody
                    .lines()
                    .filter( line -> line.trim().startsWith("<img height"))
                    .map(line -> line.substring(line.indexOf("src='")+5, line.indexOf("'/>")))
                    .forEach(image -> {
                        Future<?> imgFuture = executor.submit(() -> {
                            HttpRequest imgRequest = HttpRequest.newBuilder()
                                    .GET()
                                    .uri(URI.create("https://http2.akamai.com"+image))
                                    .build();
                            try {
                                HttpResponse<String> imageResponse = cliente.send(imgRequest, HttpResponse.BodyHandlers.ofString());
                                System.out.println("Imagem carregada: " + image + " Status code: " + imageResponse.statusCode());
                            } catch (IOException | InterruptedException e) {
                                e.printStackTrace();
                            }

                        });

                        futures.add(imgFuture);
                        System.out.println("Submetida um future para a imagem : " + image);
                    });

            futures.forEach(f -> {
                try {
                    f.get();
                } catch (InterruptedException | ExecutionException e) {
                    e.printStackTrace();
                }
            });

            long end = System.currentTimeMillis();
            System.out.println("Tempo total gasto para a execuçao:: " + (end - start));
        }catch (InterruptedException | IOException e){
            e.printStackTrace();
        }finally {
            executor.shutdown();
        }

    }

    private static void connectAndPrintJavaOracle() throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create("https://docs.oracle.com/javase/10/language/"))
                .build();

        HttpClient httpClient = HttpClient.newHttpClient();
        HttpResponse<String> response =  httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println("status code: "+response.statusCode());
        System.out.println("header response: "+response.headers());
        System.out.println(response.body());
    }
}
