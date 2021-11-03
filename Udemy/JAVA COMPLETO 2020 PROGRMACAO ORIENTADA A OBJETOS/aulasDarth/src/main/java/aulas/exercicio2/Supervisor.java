package aulas.exercicio2;

public class Supervisor extends Funcionarios {

    public double calculaSalario(){
        return this.getSalario() * 0.05;
    }
}
