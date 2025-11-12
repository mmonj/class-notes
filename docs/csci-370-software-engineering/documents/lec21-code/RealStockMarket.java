import java.util.Dictionary;
import java.util.Hashtable;

public class RealStockMarket implements StockMarket{
    Dictionary<String,Double> prices =
            new Hashtable<>();
    public RealStockMarket()
    {
        prices.put("Google",100.0);
    }
    public double getPrice(String stock)
    {
        return prices.get(stock);
    }
}
