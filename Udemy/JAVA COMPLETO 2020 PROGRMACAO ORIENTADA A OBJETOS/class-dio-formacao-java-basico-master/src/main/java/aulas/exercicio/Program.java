package aulas.exercicio;

public class Program {

    public static void main(String[] args){
        Carroo cr = new Carroo("Gol","Variant",1997);

        System.out.printf(cr.getMarca()+"%n"+cr.getModelo()+"%n"+cr.getAno());
    }
}
