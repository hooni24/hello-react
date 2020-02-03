import React, { Component } from 'react';

/**
 * 리액트에서의 이벤트 핸들링
 */
class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  };

  handleChange = e => {
    // 이벤트가 네이티브 이벤트와 같은 인터페이스를 쓰기는 하지만
    // 리액트에서는 이벤트후 초기화 되므로 비동기에 사용되는 경우
    // e.persist() 함수로 유지해야 한다.
    e.persist();
    setTimeout(() => console.log(e.target.value), 100);

    this.setState({
      // 객체 안에서 key를 []로 감싸면 안에 넣은 레퍼런스의 실제 값이 key로 사용된다.!
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세용"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
