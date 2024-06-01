import { useState, useEffect } from "react";
import "./App.css";
import Category from "./Category";
import axios from "axios";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalPro, setFinalPro] = useState([]);
  let [catName, setCatName] = useState("");

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
        console.log(finalRes);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalPro(finalRes.products);
      });
  };
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((proRes) => proRes.data)
        .then((finalRes) => {
          setFinalPro(finalRes.products);
        });
    }
  }, [catName]);

  let Pitems = finalPro.map((item, i) => {
    return <ProductItems key={i} pdata={item} />;
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[50px] font-bold mb-[50px]">
            Products
          </h1>
          <div className="grid grid-cols-[25%_auto] gap-[30px] text-left">
            <div>
              <Category finalCategory={finalCategory} setCatName={setCatName} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-5">
                {finalPro.length >= 1 ? Pitems : "No Product found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
function ProductItems({ pdata }) {
  return (
    <div className="shadow-lg text-center pb-4">
      <h4>{pdata.title}</h4>
      <img src={pdata.thumbnail} className="w-[100%] h-[250px]" />
      <b>Rs {pdata.price}</b>
    </div>
  );
}
