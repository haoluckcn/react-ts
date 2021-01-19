import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './router'

import { ConfigProvider } from 'antd';
import {Provider} from 'react-redux'
import store from './store'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App name="haha" />
    </ConfigProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
