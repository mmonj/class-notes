import java.util.ArrayList;
import java.util.List;

public class Porforlio {
    List<String> stocks= new ArrayList<>();
    public double valueOfPortfolio(StockMarket stockMarket)
    {

        double value = 0;
        for(String s:stocks)
            value += stockMarket.getPrice(s);
        return value;
    }
}
