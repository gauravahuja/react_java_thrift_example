package github.gauravahuja.ReactJavaThriftExample.FooService;

public class FooServiceImpl implements FooService.Iface {
  private static int counter = 0;

  @Override
  public String ping() {
    counter = counter + 1;
    return String.format("pong-%d", counter);
  }
}
