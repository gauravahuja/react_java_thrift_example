package github.gauravahuja.ReactJavaThriftExample;

import com.linecorp.armeria.common.HttpResponse;
import com.linecorp.armeria.common.thrift.ThriftSerializationFormats;
import com.linecorp.armeria.server.Server;
import com.linecorp.armeria.server.ServerBuilder;
import com.linecorp.armeria.server.thrift.THttpService;
import github.gauravahuja.ReactJavaThriftExample.FooService.FooServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App {
  private static Logger logger = LoggerFactory.getLogger(App.class);

  public static void main(String[] args) {
    ServerBuilder serverBuilder = new ServerBuilder();
    serverBuilder.http(8080);
    serverBuilder.service("/", (ctx, res) -> HttpResponse.of("Hello, world!"));
    serverBuilder.service(
        "/FooService", THttpService.of(new FooServiceImpl(), ThriftSerializationFormats.JSON));
    Server server = serverBuilder.build();

    logger.info("Starting server");
    server.start();
  }
}
