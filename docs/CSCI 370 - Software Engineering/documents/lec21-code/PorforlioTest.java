import org.junit.Assert;

import static org.junit.jupiter.api.Assertions.*;

class PorforlioTest {

    @org.junit.jupiter.api.Test
    void valueOfPortfolio() {
        Porforlio porforlio = new Porforlio();
        assertTrue(porforlio.valueOfPortfolio(
                new MockStockMarket())==100);


    }
}