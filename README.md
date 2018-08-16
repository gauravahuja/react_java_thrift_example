## react_java_thrift_example

**Not suitable for production use**

A react app with Java thrift server

### Setup
- Install gradle
- Install thrift compiler
- Install yarn

### Build and run java server
```
$ ./gradlew && ./build/install/react_java_thrift_example/bin/react_java_thrift_example
```

### Build typescript code
```
$ yarn install
$ PATH=$(yarn bin):$PATH
$ webpack
$ firefox build_js/www/index.html
```
