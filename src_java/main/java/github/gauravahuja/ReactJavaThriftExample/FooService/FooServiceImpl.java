package github.gauravahuja.ReactJavaThriftExample.FooService;

public class FooServiceImpl implements FooService.Iface {
  @Override
  public String ping() {
    return "pong";
  }
}
