import React, { useState } from "react";
import { Checkbox, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

const CreateAds = () => {
  const [checked, setChecked] = useState({ text: false, media: false });
  const navigate = useNavigate();

  const onChange = (type, e) => {
    setChecked((prev) => ({ ...prev, [type]: e.target.checked }));
  };

  const handleNext = () => {
    const nextPage = checked.text
      ? "/text-ad"
      : checked.media
      ? "/media-ad"
      : "/";
    navigate(nextPage);
  };

  return (
    <>
      <div className="flex flex-row gap-10 justify-center items-center h-[35rem] ">
        <div className="bg-slate-300 w-[13rem] h-[18rem] flex flex-col shadow-2xl ">
          <Checkbox
            className="p-3"
            onChange={(e) => onChange("text", e)}
          ></Checkbox>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.e6MADTYWl221gGSS4XCBNgHaG4&pid=Api&P=0&h=220"
            className="flex-grow h-[10rem]"
            alt="Ad"
          />
          <div className="flex flex-col justify-end align-middle items-center bg-slate-700 p-2">
            <p>Create</p>
            <h1>Text Ad</h1>
          </div>
        </div>

        <div className="bg-slate-300 w-[13rem] h-[18rem] flex flex-col shadow-2xl">
          <Checkbox
            className="p-3"
            onChange={(e) => onChange("media", e)}
          ></Checkbox>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.yZOTG67-Voq8Ap1FNzuiuQHaHa&pid=Api&P=0&h=220"
            className="flex-grow h-[10rem]"
            alt="Ad"
          />
          <div className="flex flex-col justify-end align-middle items-center bg-slate-700 p-2">
            <p>Create</p>
            <h1>Media Ad</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end pr-[6rem]">
        {/* <Link to={checked ? '/text-ad' : '/media-ad'}> */}
        <Button
          type="primary"
          className="text-slate-900 border-slate-900"
          onClick={handleNext}
        >
          Next
        </Button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default CreateAds;
