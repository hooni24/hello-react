import React, { Component } from 'react';

/**
 * 클래스형 컴포넌트에서 state 사용하기. (this.state)
 */
class Counter extends Component {
  /*
  constructor(props) {
    super(props);

    // state의 초깃값 설정하기 (컴포넌트의 state는 객체형식이어야 한다.)
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  }
  */

  // state의 초깃값 설정하기2 (전역 변수에 설정해둔다.)
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // setState는 비동기로 처리되기 때문에 값을 보장하기 위해 함수를 넘겨서 처리한다.
            // this.setState({ number: number + 1 });
            this.setState(
              (prevState, props) => ({
                number: prevState.number + 1
              }),
              () => {
                // setState의 2번째 인자로는 콜백을 줄 수 있음.
                console.log('setState 콜백');
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
