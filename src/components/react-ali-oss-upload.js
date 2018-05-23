import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import 'next-guid';
import NxAliOss from 'next-ali-oss';

const DEFAULT_ACCEPT = 'image/jpg,image/jpeg,image/png,image/gif';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    accept: PropTypes.string,
    ossToken: PropTypes.object,
    filename: PropTypes.func,
    imgServer: PropTypes.string,
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    onChange: noop,
    accept: DEFAULT_ACCEPT,
    ossToken: null,
    filename: nx.guid,
  };
  /*===properties end===*/

  componentDidMount() {
    const { ossToken } = this.props;
    this._instance = NxAliOss.getInstance(ossToken);
  }

  _onChange = inEvent => {
    const { onChange, imgServer, filename } = this.props;
    const files = inEvent.target.files;
    const value = nx.map(files, (_, file) => {
      const generate = filename(file);
      const ext = file.type.split('/')[1];
      const name = `${generate}.${ext}`;
      const url = imgServer + '/' + name;
      return { file, name, url };
    });

    this._instance.uploads(value).then(resp => {
      onChange({
        target: { files, value }
      });
    });
  };

  render() {
    const { className, filename, imgServer, onChange, ossToken, ...props } = this.props;
    return (
      <input type="file" onChange={this._onChange} {...props} />
    );
  }
}
