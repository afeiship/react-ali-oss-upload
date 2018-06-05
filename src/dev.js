import './dev.scss';
import ReactAliOssUpload from './main';
import 'next-guid';
/*===example start===*/

// install: npm install afeiship/react-ali-oss-upload --save
// import : import ReactAliOssUpload from 'react-ali-oss-upload'

class App extends React.Component{
  state = {
    value:[]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    const { value } = e.target;
    this.setState({ value });
  };

  render(){
    const ossToken = {
      "region": "oss-cn-hangzhou",
      "accessKeyId": "STS.NKHopYx2fp3w9K7fRKXPvqnZH",
      "accessKeySecret": "5RrLtqe9Q1Q5tXtXJ2M72eUna6xFcDasd3KWAfPueLMS",
      "stsToken": "CAISgAJ1q6Ft5B2yfSjIr4j9JMrtle1Hx/GcO22GglIeVN9anqvxqjz2IHtKeHhgBugasP8xnWlR5voclqYqGsYUb2boNpIgtswPqVv5nH1MPBjxv9I+k5SANTW5KXyShb3/AYjQSNfaZY3eCTTtnTNyxr3XbCirW0ffX7SClZ9gaKZ8PGD6F00kYu1bPQx/ssQXGGLMPPK2SH7Qj3HXEVBjt3gX6wo9y9zmmZHHu0OC3AOikr9E9t2qGPX+MZkwZqUYesyuwel7epDG1CNt8BVQ/M909vcfp2uW7o7FXwcKvUzfarqIrMcVPg90YKIzHKlft+TxjuFivejeh1U7Q4CtnDg/GoABLU/2tQXKtQv8asyhMm1FlGRbqyVTIWVl10mGk9qWx98GHeXh1VWCnMfeV0vLq4Y1W3AgitOtJXvZgqSfZSDhqfdrSlSvjiQyzVxvDWWmWxCfRUC4jpjEdPN5x51AZKuEKSdYxk5N61u2qoRbHKy4BAn+7vExDJ9D//Fd8A+EdUA=",
      "expiration": "2018-06-05 11:24:18",
      "bucket": "zhenbao-test"
    };
    return (
      <div className="hello-react-ali-oss-upload">
        <ReactAliOssUpload
          imgServer="http://testimg.treasurevision.cn"
          onChange={this._onChange}
          filename={nx.guid}
          value={
            [{
              name: 'test',
              url:'http://placeholder.qiniudn.com/80x80'
            }]
          }
          ossToken={ossToken} ref='rc' />

          {
            this.state.value.map(item=>{
              return (
                <img src={item.url} alt=""/>
              )
            })
          }
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
