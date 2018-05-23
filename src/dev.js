import './dev.scss';
import ReactAliOssUpload from './main';

/*===example start===*/

// install: npm install afeiship/react-ali-oss-upload --save
// import : import ReactAliOssUpload from 'react-ali-oss-upload'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e);
  };

  render(){
    const ossToken = {
      "region": "oss-cn-hangzhou",
      "accessKeyId": "STS.NJ2WF5bc9dDNGBvdkac1M56Nu",
      "accessKeySecret": "8PMidUGZxBzCaBS7sa54w9QrLxqbLafKvsR4rcMwFEHn",
      "stsToken": "CAISgAJ1q6Ft5B2yfSjIr4mHHPyBj7wY04alRWTHgGs0b75h2vPllzz2IHtKeHhgBugasP8xnWlR5voclqYqG8YVaRGVQJFbtswPqVv53hEjMBzxv9I+k5SANTW5KXyShb3/AYjQSNfaZY3eCTTtnTNyxr3XbCirW0ffX7SClZ9gaKZ8PGD6F00kYu1bPQx/ssQXGGLMPPK2SH7Qj3HXEVBjt3gX6wo9y9zmmZHHu0OC3AOikr9E9t2qGPX+MZkwZqUYesyuwel7epDG1CNt8BVQ/M909vcfp2uW7o7FXwcKvUzfarqIrMcVPg90YKIzHKlft+TxjuFivejeh1U7Q4CtnDg/GoABAntVcshphCI+Uf/0pPyKW05Swv9gNGPfGMCDTcteSvT3fZ6naPlyTNt5MWqhgAWtK6TY4ejeJz98PoP3c++nkURh86LFuKtlEKufqIhPT90PcfgStbss5vbAm6hEt37Pk+aEf51vlsXcEz/D8ZrrDWRjm6suArecZx8IlepEp3k=",
      "expiration": "2018-05-23 17:44:30",
      "bucket": "demo-test"
    };
    return (
      <div className="hello-react-ali-oss-upload">
        <ReactAliOssUpload
          imgServer="http://testimg.demo.cn"
          onChange={this._onChange}
          ossToken={ossToken} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
