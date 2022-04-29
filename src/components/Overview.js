const Overview = ({ itemList }) => {
  const totalSum = itemList.reduce(
    (a, c) => parseInt(a) + parseInt(c.productAmount),
    0
  );

  const average =
    itemList.reduce((a, c) => a + parseInt(c.productAmount), 0) /
    itemList.length;

  const totalItems = itemList.length;
  return (
    <>
      <div className="data-info">
        <h1> Overview</h1>
        <h1> Total Sum : {isNaN(totalSum) ? 0 : totalSum.toFixed(2)}$ </h1>
        <h1> Average : {isNaN(average) ? 0 : average.toFixed(2)}$ </h1>
        <h1> Total Items : {isNaN(totalItems) ? 0 : totalItems}</h1>
      </div>
    </>
  );
};

export default Overview;
