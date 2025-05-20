public class MockStockMarket  implements StockMarket{
    @Override
    public double getPrice(String stock) {
        return 100;
    }
}
