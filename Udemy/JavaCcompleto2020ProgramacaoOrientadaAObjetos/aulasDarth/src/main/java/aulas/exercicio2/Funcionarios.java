package aulas.exercicio2;

public abstract class  Funcionarios {
    private int salario;

    public Funcionarios(){
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }

    public double calculaSalario(){
        return this.getSalario() * 0.1;
    }
}
