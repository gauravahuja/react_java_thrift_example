## react_java_thrift_example

**Not suitable for production use**

A react app with Java thrift server

### Setup
- Install gradle
- Install thrift compiler
- Install yarn
- ```$ yarn install```

### Build and run java server
```
$ PATH=$(yarn bin):$PATH
$ yarn start-server
```

### Build typescript code
```
$ PATH=$(yarn bin):$PATH
$ yarn gen-thrift-ts
$ yarn start-dev
```
