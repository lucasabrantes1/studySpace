package aulas.exercicio2;

public class Program {
    public static void main(String[] args){
        Funcionarios gerente = new Gerente();
        gerente.setSalario(6000);
        System.out.println("O imposto do  gerente e : "+gerente.calculaSalario());

        Funcionarios atendente = new Atendente();
        atendente.setSalario(2000);
        System.out.println("O imposto do Atendente e : "+atendente.calculaSalario());

        Funcionarios supervisor = new Supervisor();
        supervisor.setSalario(11000);
        System.out.println("O imposto do Supervisor e : "+supervisor.calculaSalario());
    }
}
