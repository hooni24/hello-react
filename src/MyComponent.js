import React from 'react';
import PropTypes from 'prop-types';

// props는 전달받을때 object로 받기 때문에 비구조화로 쪼개 받을 수 있다.
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다.
      <br />
      childern 값은 {children} 입니다.
      <br />
      좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

// 컴포넌트의 props 기본값 설정
MyComponent.defaultProps = {
  name: '기본 이름'
};

// props의 타입 설정
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired // 체이닝가능
};

export default MyComponent;
