const ProductsSN = [1, 2, 3];
const Products = ["Sink Cover", "Hair Net", "Kaftan"];
const ProductsQTY = [50, 9, 100];

const Inventory = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {ProductsQTY.map((ProductsQTY) => (
            <tr>
              <td>
                {ProductsSN.map((ProductSN) => (
                  <tr>
                    <td>{ProductSN}</td>
                  </tr>
                ))}
              </td>
              <td>
                {Products.map((Product) => (
                  <tr>
                    <td></td>
                    <td>{Product}</td>
                  </tr>
                ))}
              </td>
              <td>
                <td>
                  {ProductsSN.map((ProductSN) => (
                    <tr>
                      <td>{ProductSN}</td>
                    </tr>
                  ))}
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inventory;
