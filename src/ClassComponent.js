import React, { Component } from 'react';

// 클래스형 컴포넌트..!
class ClassComponent extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}

export default ClassComponent;
