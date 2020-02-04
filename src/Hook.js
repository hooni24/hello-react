import React, { useState } from 'react';
import Info from './hooks/Info';

const Hook = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={toggleVisible}>{visible ? '숨기기' : '보이기'}</button>
      {visible && <Info />}
    </>
  );
};

export default Hook;
