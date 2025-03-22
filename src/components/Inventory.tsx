import { useState } from "react";

const ProductsSN = [1, 2, 3];
const Products = ["Sink Cover", "Hair Net", "Kaftan"];
const ProductsQTY = [50, 9, 100];

const Inventory = () => {
  const [selected, setSelected] = useState(0);
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
          {ProductsQTY.map(() => (
            <tr>
              <td>
                {ProductsSN.map((ProductSN, index) => (
                  <tr>
                    <td
                      key={ProductSN}
                      onClick={(e) => setSelected(index)}
                      className={selected === index ? "active" : "active"}
                    >
                      {ProductSN}
                    </td>
                  </tr>
                ))}
              </td>
              <td>
                {Products.map((Product) => (
                  <tr>
                    <td></td>
                    <td key={Product}>{Product}</td>
                  </tr>
                ))}
              </td>
              <td>
                <td>
                  {ProductsQTY.map((ProductQTY) => (
                    <tr>
                      <td key={ProductQTY}>{ProductQTY}</td>
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
