import React from 'react';
import './style.css';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className='errorPage'>
      <h1>出错了！</h1>
      <p>您访问的页面遇到错误。</p>
      <p>错误信息：{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
