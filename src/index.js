import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

// 自定义主题配置
const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 4,
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ConfigProvider locale={zhCN} theme={theme}>
        <App />
      </ConfigProvider>
    </ErrorBoundary>
  </React.StrictMode>
); 