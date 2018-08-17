import * as React from 'react';
import * as FooService from '../gen-nodejs/FooService';
import * as Thrift from 'thrift';

interface State { pings: Array<string>}

export class FooServicePing extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {pings: []};
  }
  updatePings = (ping: string) => {
    this.setState({pings: this.state.pings.concat([ping])});
  }
  ping() {
    let transport = Thrift.TBufferedTransport;
    let protocol = Thrift.TJSONProtocol;
    let connection = Thrift.createXHRConnection('localhost', 8080, {
      transport: transport,
      protocol: protocol,
      path: '/FooService',
    });
    connection.on('error', (err:any) => console.log(err));
    //@ts-ignore
    let client = Thrift.createXHRClient(FooService, connection);
    client.ping((err: any, data:any) => {
      if (err) {
        console.error('Error:', err);
        alert(err);
      } else {
        console.log('Data:', data);
        this.updatePings(data);
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.ping.bind(this)}>Test FooService::ping</button>
        <div>
          {this.state.pings.map((ping, index) => <li key={index}>{ping}</li>)}
        </div>
      </div>
    );
  }
}
