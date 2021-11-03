import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
	Locale.setDefault(Locale.US);
	Scanner sc = new Scanner(System.in);
	

	double x1, y1, x2, y2, saida;
	
	x1 = sc.nextDouble();
	y2 = sc.nextDouble();
	
	x2 = sc.nextDouble();
	y2 = sc.nextDouble();
	
	saida = (double) Math.sqrt(Math.pow(x1, y1)+Math.pow(x2, y2));
	
	
	

	
	System.out.println(saida + " eh o maior");
	
	
	sc.close();


	}

}