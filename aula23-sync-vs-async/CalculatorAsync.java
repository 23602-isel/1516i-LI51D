public class CalculatorAsync {
    public static void addAsync(final AddCallback h, final int n1, final int n2) {
        Thread th = new Thread(() -> {
            try {
                Thread.sleep(3000);
            } catch(Exception e){
                throw new RuntimeException(e);
            }
            int res = n1 + n2;
            h.resp(res);
        });
        th.setDaemon(false);
        th.start();
        System.out.println("Start calculation of Add algorithm...");
    }
}