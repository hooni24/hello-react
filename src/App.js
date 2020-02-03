import React from 'react';  // 리액트를 불러와서 사용할 수 있게 해 줌.
import './App.css';

// 함수를 통해 컴포넌트를 만들었다 -> 함수형 컴포넌트
// 아래 구문은 html도 아니고 템플릿도 아님. [JSX] 이다.
function App() {
  const name = '리액트';
  return (
    // Fragment를 import하지 않고 <></> 이런식으로 사용할 수 있다.
    <>
      {name === '리액트' ? (
        <h1>{name} ㅎㅇ</h1>
      ) : (
        <h2>ㄴㄴ</h2>
      )}      
    </>
  );
}

function DoNotReturnUndefined() {
  const name = undefined;
  return name || '값이 undefined 입니다.';
}

function CanBeUndefined() {
  const name = undefined;
  return <div>{name || '값이 있음'}</div>;
}

function InlineStyling() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black', // background-color 속성 (케밥 -> 카멜)
    color: 'aqua',
    fontSize: '48px'
  }
  return <div style={style}>{name}</div>
}


function UseCssClass() {
  const name = '리액트';
  // JSX에서 css class를 사용하고 싶을때는 속성이름을 className으로 줘야한다.
  // class로 줘도 해 주기는 해 주나, 콘솔에러가 남. (v16이상부터 해준 처사)
  return <div className='react'>{name}</div>
}

export default UseCssClass;
