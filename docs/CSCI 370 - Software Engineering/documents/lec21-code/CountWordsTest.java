import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CountWordsTest {

    @Test
    void count() {
        CountWords countWords = new CountWords();
        countWords.count(new MockStream());
    }
}