import java.util.Locale;


public class Main {

	public static void main(String[] args) {
		
		int y = 32; //variavel tipo basico int numero inteiros
		double x = 10.35784; //variavel tipo double numero com virgulas
		double z = 10.3574; //variavel tipo double com a virgula limitada
		
		String nome ="maria";
	    int idade = 31;
	    double renda = 4000.0;
	    
		//System.out.println(y);
		//System.out.println(x);
		//System.out.printf("%.2f%n", z);
		//System.out.printf("%.4f%n", z);
	    //Locale.setDefault(Locale.US);
	    //System.out.printf("%.4f%n", z);
	    //System.out.println("RESULTADO = " + x + " METROS");
	    //System.out.printf("RESULTADO =  %.2f metros%n", x);
	    
	    
	    
	    //%f = ponto flutuante
	    //%d = inteiro
	    //%s = texo
	    //%n quebra de linha
	    
	    System.out.printf("%s tem %d anos e ganha R$ %.2f reais%n", nome, idade, renda);
	    
	} 

}
