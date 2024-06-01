import React from "react";

const Category = ({ finalCategory, setCatName }) => {
  const cat = finalCategory.map((v, i) => {
    console.log(v);
    return (
      <li
        onClick={() => setCatName(v.name)}
        key={i}
        className="bg-[#da5e7d] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2 text-transform:capitalize"
      >
        {v.name}
      </li>
    );
  });
  return (
    <div>
      <h3 className="text-[25px] font-bold p-[10px]">Product Category</h3>
      <ul>{cat}</ul>
    </div>
  );
};

export default Category;
