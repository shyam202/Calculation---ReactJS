import React, { useState } from "react";
import "./style.css";
import Overview from "./Overview";
import TaxGross from "./TaxGross";
import List from "./List";

const Form = () => {
  const [inputData, setInputData] = useState({
    productName: "",
    productAmount: "",
  });
  const [itemList, setItemList] = useState([]);
  return (
    <>
      <div className="forms">
        <TaxGross
          inputData={inputData}
          setInputData={setInputData}
          setItemList={setItemList}
        />
      
        <Overview itemList={itemList} />
       
      </div>
      <List itemList={itemList} />
    </>
  );
};

export default Form;
