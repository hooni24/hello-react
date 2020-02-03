import React, { useState } from 'react';

/**
 * 함수형 컴포넌트에서 state 사용. (16.8버전 이후로 지원. 이 방법이 권장됨)
 */

const Say = () => {
  // useState() 함수의 반환값은 배열이 나오는데, 0번은 현재state값, 1번은 state를 변경할 수 있는 함수
  // 해당 배열을 비구조화 할당해서 message와 setMessage 변수에 담은 것임.
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨강
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파랑
      </button>
    </div>
  );
};

/**
 * state를 사용할 때에는 직접 접근해 값을 변경해서는 안된다.
 * setter (useState, setState)를 사용해야만 한다.
 * 만약 객체나 배열을 갱신해야 하는 경우는, 해당 객체의 사본을 만들어 값을 바꾼 뒤
 * setter를 통해 그 객체 자체를 갱신해야 한다.
 */

export default Say;
