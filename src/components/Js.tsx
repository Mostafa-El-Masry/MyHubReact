import "bootstrap/dist/css/bootstrap.css";

const Js = () => {
  return (
    <>
      <main className="container m-auto">
        <section className="w-4 h-4 bg-red-300 active">
          <div className="flex flex-col p-4 m-4">
            <p>Factory functions</p>
          </div>

          <div className="flex flex-col p-4 m-4">
            <p>Constructor functions</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Js;
