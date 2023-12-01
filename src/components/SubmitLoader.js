import React from "react";
import { CheckOutlined } from '@ant-design/icons';
const SubmitLoader = () => {
  return (
    <>
      <div className="overlay">
          <div className="modal w-[30rem]">
            <div className="icon"><CheckOutlined style={{ fontSize: '50px', color: '#08c' }} /></div>
            <h1>Submitted</h1>
          </div>
        </div>
    </>
  );
};

export default SubmitLoader;
