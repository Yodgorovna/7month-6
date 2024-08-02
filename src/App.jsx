import { products } from "./data/data";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { useSelector } from "react-redux";
import { Cart } from "./components/Cart";

function App() {
  const { productList } = useSelector((state) => state.product);
  return (
    <>
      <div style={{ margin: "0 auto", width: "1200px" }}>
        <Header />
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
            {products.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
          <div
            style={{
              border: "1px solid red",
              height: "100vh",
              width: "500px",
              overflowY: "scroll",
              padding: "20px",
            }}
          >
            {productList.map((item) => (
              <Cart key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
