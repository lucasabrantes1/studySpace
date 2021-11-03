package br.com.digital.innovation.one.aula3;

import static java.lang.Thread.*;

public class ExemploThread {

    public static void main(String[] args) {
        GeradorDePDF gerarPDF = new GeradorDePDF();
        gerarPDF.start();
        BarraDeCarregamento barraDeCarregamento = new BarraDeCarregamento(gerarPDF);
        barraDeCarregamento.start();
    }
}

class GeradorDePDF extends Thread{

    @Override
    public void run(){
        try {
            System.out.println("iniciar geração de PDF");
            Thread.sleep(5000);

        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("PDF Gerado");
    }
}

class BarraDeCarregamento extends Thread{

    private Thread iniciarGeradorPDF;

    public BarraDeCarregamento(Thread iniciarGeradorPDF){
        this.iniciarGeradorPDF = iniciarGeradorPDF;
    }

    @Override
    public void run(){
        try {
            while(true){
                Thread.sleep(500);
                if(!iniciarGeradorPDF.isAlive()) break;
                System.out.println("Carregando...");

            }

        } catch (InterruptedException e) {
            e.printStackTrace();
        }


    }
}