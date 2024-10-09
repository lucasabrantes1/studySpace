namespace ExercicioConversor {
    internal class Conversor {

 
        public static double Iof = 6.0;


        public static double ValorCalculado(double quantidade, double cotacao) {
            double valorTotal = cotacao * quantidade;
            return valorTotal * Iof / 100 + valorTotal;
        }

    }
}
