const List = ({ itemList }) => {
  return (
    <>
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
                <td>{productAmount}$</td>
                <td>{tax.toFixed(2)}$</td>
                <td>{total.toFixed(2)}$</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default List;
