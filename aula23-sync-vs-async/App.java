public class App {
    public static void main(String [] args) {
        Calculator c = new Calculator();
        int result = c.add(5,7);
        System.out.println("Waiting for the result of 5 + 7");
        System.out.println("5 + 7 = " + result);
    
        System.out.println("************************************");
    
        CalculatorAsync cAsync = new CalculatorAsync();
        AddCallback h = res -> System.out.println("5 + 7 = " + res);
        cAsync.addAsync(h,5,7);
        System.out.println("Waiting for the result of 5 + 7");
    }
}