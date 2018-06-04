# react-ali-oss-upload
> Ali oss upload component for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.any,
    accept: PropTypes.string,
    ossToken: PropTypes.object,
    filename: PropTypes.func,
    imgServer: PropTypes.string,
    options: PropTypes.object,
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    onChange: noop,
    accept: DEFAULT_ACCEPT,
    ossToken: null,
    filename: Date.now
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ali-oss-upload --registry=https://registry.npm.taobao.org
```

```js
import ReactAliOssUpload from 'react-ali-oss-upload';
```

```scss
// customize your styles:
$react-ali-oss-upload-options:(
);

@import 'node_modules/react-ali-oss-upload/dist/style.scss';
```


## usage:
```jsx

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
      "accessKeyId": "STS.NKJZcdpftTbuHHSonYSXVBieG",
      "accessKeySecret": "6kv1WyTUAq3ey5zyuQi69h7uDw9TAxaXCePj8VJJJ9HS",
      "stsToken": "CAISgAJ1q6Ft5B2yfSjIr4j/EdnQnblV46CeSm7ii24MX9d6razOpTz2IHtKeHhgBugasP8xnWlR5voclqYqG8YVaRGVQJFbtswPqVv5lWJbUB3xv9I+k5SANTW5KXyShb3/AYjQSNfaZY3eCTTtnTNyxr3XbCirW0ffX7SClZ9gaKZ8PGD6F00kYu1bPQx/ssQXGGLMPPK2SH7Qj3HXEVBjt3gX6wo9y9zmmZHHu0OC3AOikr9E9t2qGPX+MZkwZqUYesyuwel7epDG1CNt8BVQ/M909vcfp2uW7o7FXwcKvUzfarqIrMcVPg90YKIzHKlft+TxjuFivejeh1U7Q4CtnDg/GoABl7eeLP1wuZmaR167xn0YWgKw7MCfzaIGLHqm2jae3GX3U7gLtywPn/z8pFMQ2XAr8NDxeZlRJnBV2jzmdxrItI9A+1ppTCzWNq1EZgDQjZuz+zbV8W94bbI1LnlqfckqeAxTZosuRIhCqx/dZmg1sTjYlIA9Rw1I+ygesdXRTcc=",
      "expiration": "2018-05-24 12:51:08",
      "bucket": "demo-test"
    };
    return (
      <div className="hello-react-ali-oss-upload">
        <ReactAliOssUpload
          imgServer="http://testimg.treasurevision.cn"
          onChange={this._onChange}
          value={
            [{
              name: 'test',
              url:'http://placeholder.qiniudn.com/80x80'
            }]
          }
          ossToken={ossToken} ref='rc' />
      </div>
    );
  }
}

```
