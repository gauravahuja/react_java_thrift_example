## react_java_thrift_example
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
$ chrome build_js/www/index.html
```