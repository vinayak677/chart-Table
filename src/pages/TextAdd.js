import { Button, Input, Select,Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import SubmitLoader from "../components/SubmitLoader";

const TextAdd = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);

    // 
    const handleBack = () => {
        navigate("/create-ads");
      };

    //   
    const handleSubmit = () => {
        setLoading(true);
    
        setTimeout(() => {
          setLoading(false);
          navigate("/create-ads");
        }, 6000);
      };

  return (
    <>  
    { loading ? <div> <SubmitLoader /></div> : <div>
      <div className="m-6 p-5 bg-slate-200 border-black">
        <h1 className="px-5 pb-2">Create Text & Media</h1>
        <div className="flex">
          <div className="flex w-1/2 flex-col gap-6 px-5">
            <div className="flex flex-col"> 
              <span className="pb-2">Heading 01</span>
              <Input type="text" placeholder="Add heading that would make user interestsed"/>
            </div>
            <div className="flex flex-col"> 
              <span className="pb-2">Heading 02</span>
              <Input type="text" placeholder="Add heading that would make user interestsed"/>
            </div>
          </div>
          <div className="flex flex-col w-1/2 px-5">
            <span className="pb-2">Description 01</span>
            <TextArea className="" name="text" rows="5"></TextArea>
          </div>
        </div>
            <div className="flex flex-row ">
            <div className="flex w-1/2 flex-col gap-1 px-5 pt-5 "> 
              <span className="pb-1">Business Name</span>
              <Input type="text" placeholder="Add your business name"/>
            </div>
            <div className="flex w-1/2 flex-col gap-1 px-5 pt-5"> 
              <span className="pb-1">Button Label</span>
              <Select placeholder="select the label that best suit your ad">
                <option>First</option>
                <option>Secound</option>
              </Select>
            </div>
            </div>
            <div className="flex flex-col w-full gap-5 px-5 pt-5">
             <span className="">Website URL</span>
             <Input type="text" placeholder="Add the URL of the landing page you want to direct users to"/>
            </div>
            <div className="flex justify-end px-5 pt-5 gap-3">
                <Button className="px-10" onClick={handleBack}>Back</Button>
                <Button className="px-10 bg-sky-500" type="primary" onClick={handleSubmit}>Submit</Button>
            </div>
      </div>
      </div>
      }
    </>
  );
};

export default TextAdd;
