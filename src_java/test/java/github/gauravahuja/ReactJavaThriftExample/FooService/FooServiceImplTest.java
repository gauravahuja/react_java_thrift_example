package github.gauravahuja.ReactJavaThriftExample.FooService;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class FooServiceImplTest {

  private FooServiceImpl fooService;

  @Before
  public void setup() {
    fooService = new FooServiceImpl();
  }

  @Test
  public void ping() {
    assertEquals("pong-1", fooService.ping());
  }
}
