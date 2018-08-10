package github.gauravahuja.ReactJavaThriftExample;

import org.junit.Test;

import static org.junit.Assert.*;

public class AppTest {

    @Test
    public void getGreeting() {
        App app = new App();
        assertEquals("Hello world.", app.getGreeting());
    }
}