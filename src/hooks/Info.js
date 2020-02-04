import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect는 컴포넌트가 렌더링될 때 마다 특정 작업을 수행한다.
  // componentDidMount + componentDidUpdate 합쳐놓은 판이라고 볼 수 있음.
  /*
  useEffect(() => {
    console.log('렌더링 완료!');
    console.log({
      name,
      nickname
    });
  });

  useEffect(() => {
    console.log('두번 설정도 할 수 있음. 이건 마운트될때만 실행');
  }, []);

  useEffect(() => {
    console.log('두번째 파라미터인 배열은 감시대상을 넣는다.');
  }, [name]);
  */

  // 언마운트되기 전이나, 업데이트 직후에 사용할 수 있다 (cleanup함수)
  useEffect(() => {
    console.log('effect');
    return () => console.log('cleanup');
  });

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
