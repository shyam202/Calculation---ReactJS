import React, { useState } from "react";
import "./style.css";

const Form = () => {
  const [inputData, setInputData] = useState({
    productName: "",
    productAmount: "",
  });
  const [itemList, setItemList] = useState([]);

  const tax = inputData.productAmount * 0.16;

  const total =
    parseInt(inputData.productAmount) + inputData.productAmount * 0.16;

  const totalSum = itemList.reduce(
    (a, c) => parseInt(a) + parseInt(c.productAmount),
    0
  );

  const average =
    itemList.reduce((a, c) => a + parseInt(c.productAmount), 0) /
    itemList.length;

  const totalItems = itemList.length;

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: new Date().getTime().toString(),
      tax,
      total,
      ...inputData,
    };
    setItemList([...itemList, newEntry]);
    setInputData({ productName: "", productAmount: "" });
  };

  const resetData = () => {
    setInputData({ productName: "", productAmount: "" });
  };

  return (
    <>
      <div className="forms">
        <div>
          <form onSubmit={handleSubmit}>
            <label>Product Name*</label>
            <input
              type="text"
              className="form-control"
              name="productName"
              value={inputData.productName}
              placeholder="Enter the product name"
              onChange={handleChange}
            />

            <label>Amount*</label>
            <input
              type="number"
              name="productAmount"
              className="form-control"
              value={inputData.productAmount}
              placeholder="Enter the product Amount"
              onChange={handleChange}
            />
          </form>
        </div>

        <div className="tax-gross">
          <div>
            <h3>
              <b>Tax 16%</b>
            </h3>
            <h4>{tax.toFixed(2)}</h4>
          </div>
          <div>
            <h3>
              <b>Gross</b>
            </h3>
            <h4>{isNaN(total) ? 0 : total.toFixed(2)}</h4>
          </div>
        </div>

        <div className="button-reset">
          <button className="btn1" onClick={resetData}>
            Reset
          </button>
          <button type="submit" className="btn2" onClick={handleSubmit}>
            Add
          </button>
        </div>

        <div className="data-info">
          <h1> Overview</h1>
          <h1> Total Sum : {isNaN(totalSum) ? 0 : totalSum} </h1>
          <h1> Average : {isNaN(average) ? 0 : average} </h1>
          <h1> Total Items : {isNaN(totalItems) ? 0 : totalItems} </h1>
        </div>
      </div>

      <div className="data-show">
        <table className="table-data">
          <tr>
            <th>Product Name</th>
            <th>NET</th>
            <th>TAX</th>
            <th>GROSS</th>
          </tr>

          {itemList.map((curr) => {
            const { productName, productAmount, id, tax, total } = curr;
            return (
              <tr key={id}>
                <td>{productName}</td>
                <td>{productAmount}</td>
                <td>{tax.toFixed(2)}</td>
                <td>{total.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Form;
