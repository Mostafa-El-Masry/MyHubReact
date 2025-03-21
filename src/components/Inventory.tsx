const ProductsSN = [1, 2, 3];
const Products = ["Sink Cover", "Hair Net", "Kaftan"];
const ProductsQTY = [50, 9, 100];

const Inventory = () => {
  return (
    <>
      <div className="bg-info flex">
        {ProductsSN.map((productsn) => (
          <div className="flex bg-danger">{productsn}</div>
        ))}
        {Products.map((Product) => (
          <div className="flex bg-dark">{Product}</div>
        ))}
        {ProductsQTY.map((ProductsQTY) => (
          <div className="flex">{ProductsQTY}</div>
        ))}
      </div>
    </>
  );
};

export default Inventory;
